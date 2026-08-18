/**
 * Academic Misconduct Dilemmas - Core Application Logic
 * Featuring Elo matchmaking, Supabase Cloud synchronization,
 * Interactive SVG Alluvial Flow Diagram, Catalog filtering, and Research Integrity Profiler.
 */

(function () {
  "use strict";

  // Application State
  const state = {
    currentPair: [null, null],
    isRevealed: false,
    userChoiceId: null,
    totalDilemmasAnswered: 0,
    agreedWithPolicyCount: 0,
    agreedWithSanctionsCount: 0,
    categoryFilter: "all",
    rankingSortMode: "globalPublic", // 'globalPublic', 'userVotes', 'policyBenchmark', 'careerImpact'
    rankingViewMode: "flow", // 'flow' (SVG Alluvial) or 'list' (Classic table)
    flowFirstColumnMode: "public", // 'public' or 'user'
    sessionId: null,
    isCloudConnected: false,
    userScores: {},
    globalScores: {},
    totalGlobalVotes: 0,
    history: []
  };

  // Generate or retrieve anonymous session ID
  function getSessionId() {
    let sid = localStorage.getItem("academic_session_id");
    if (!sid) {
      sid = "acad_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now().toString(36);
      localStorage.setItem("academic_session_id", sid);
    }
    return sid;
  }

  // Initialize state from localStorage and attempt cloud sync
  async function loadStoredData() {
    state.sessionId = getSessionId();
    initGlobalScores();

    try {
      const storedUserScores = localStorage.getItem("academic_user_scores");
      if (storedUserScores) {
        state.userScores = JSON.parse(storedUserScores) || {};
      }

      window.MISCONDUCT_DATA.forEach(item => {
        if (!state.userScores[item.id] || typeof state.userScores[item.id].elo !== "number") {
          const baseElo = 1000 + (item.harmAnalysis.harmScore * 8);
          state.userScores[item.id] = {
            elo: baseElo,
            wins: 0,
            matches: 0
          };
        }
      });
      saveStoredUserScores();

      const storedStats = localStorage.getItem("academic_user_stats");
      if (storedStats) {
        const stats = JSON.parse(storedStats);
        state.totalDilemmasAnswered = stats.total || 0;
        state.agreedWithPolicyCount = stats.agreedPolicy || 0;
        state.agreedWithSanctionsCount = stats.agreedSanctions || 0;
      }
    } catch (e) {
      console.error("Error loading localStorage data:", e);
    }

    await syncWithCloudDatabase();
  }

  function initGlobalScores() {
    window.MISCONDUCT_DATA.forEach(item => {
      const baseElo = 1000 + (item.harmAnalysis.harmScore * 8);
      state.globalScores[item.id] = {
        elo: baseElo,
        wins: 0,
        matches: 0
      };
    });
  }

  function getUserScore(id) {
    if (!state.userScores[id] || typeof state.userScores[id].elo !== "number") {
      const item = window.MISCONDUCT_DATA.find(c => c.id === id);
      const baseElo = item ? (1000 + (item.harmAnalysis.harmScore * 8)) : 1000;
      state.userScores[id] = { elo: baseElo, wins: 0, matches: 0 };
    }
    return state.userScores[id];
  }

  function getGlobalScore(id) {
    if (!state.globalScores[id] || typeof state.globalScores[id].elo !== "number") {
      const item = window.MISCONDUCT_DATA.find(c => c.id === id);
      const baseElo = item ? (1000 + (item.harmAnalysis.harmScore * 8)) : 1000;
      state.globalScores[id] = { elo: baseElo, wins: 0, matches: 0 };
    }
    return state.globalScores[id];
  }

  function getActiveScore(id) {
    return state.rankingSortMode === "userVotes" ? getUserScore(id) : getGlobalScore(id);
  }

  function saveStoredUserScores() {
    try {
      localStorage.setItem("academic_user_scores", JSON.stringify(state.userScores));
    } catch (e) {
      console.error("Unable to save user scores:", e);
    }
  }

  function saveStoredStats() {
    try {
      localStorage.setItem("academic_user_stats", JSON.stringify({
        total: state.totalDilemmasAnswered,
        agreedPolicy: state.agreedWithPolicyCount,
        agreedSanctions: state.agreedWithSanctionsCount
      }));
    } catch (e) {
      console.error("Unable to save statistics:", e);
    }
  }

  // =========================================================================
  // CLOUD SYNCHRONIZATION (SUPABASE REST API)
  // =========================================================================

  async function syncWithCloudDatabase() {
    const config = window.ACADEMIC_CONFIG;
    if (!config || !config.supabaseUrl || !config.supabaseAnonKey || config.supabaseUrl.includes("project-ref") || config.supabaseUrl.includes("vase-id")) {
      console.info("ℹ️ Supabase not configured. Running in Local Storage Mode.");
      state.isCloudConnected = false;
      updateCloudStatusBadge();
      return;
    }

    const tableName = "academic_votes";

    try {
      initGlobalScores();
      let allVotes = [];
      let page = 0;
      const pageSize = 1000;

      while (true) {
        const from = page * pageSize;
        const to = from + pageSize - 1;
        const response = await fetch(`${config.supabaseUrl}/rest/v1/${tableName}?select=winner_id,loser_id&order=created_at.asc`, {
          method: "GET",
          headers: {
            "apikey": config.supabaseAnonKey,
            "Authorization": `Bearer ${config.supabaseAnonKey}`,
            "Range": `${from}-${to}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${await response.text()}`);
        }

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) break;
        allVotes = allVotes.concat(data);
        if (data.length < pageSize) break;
        page++;
      }

      state.totalGlobalVotes = allVotes.length;
      state.isCloudConnected = true;

      // Calculate global Elo ratings from recorded community duels
      const kFactor = 24;
      allVotes.forEach(v => {
        const wId = v.winner_id;
        const lId = v.loser_id;
        if (state.globalScores[wId] && state.globalScores[lId]) {
          const scoreW = state.globalScores[wId];
          const scoreL = state.globalScores[lId];
          const expectedW = 1 / (1 + Math.pow(10, (scoreL.elo - scoreW.elo) / 400));
          scoreW.elo += Math.round(kFactor * (1 - expectedW));
          scoreL.elo += Math.round(kFactor * (0 - (1 - expectedW)));
          scoreW.wins++;
          scoreW.matches++;
          scoreL.matches++;
        }
      });

      console.log(`✅ Loaded and recalculated ${allVotes.length} community duels from Supabase.`);

      const activeSec = document.querySelector(".view-section.active");
      if (activeSec && activeSec.id === "view-ranking") {
        renderRankingView();
      }
    } catch (err) {
      console.warn("⚠️ Supabase sync failed:", err.message);
      state.isCloudConnected = false;
    }

    updateCloudStatusBadge();
  }

  async function recordVoteToCloud(winnerId, loserId) {
    const config = window.ACADEMIC_CONFIG;
    if (!config || !config.supabaseUrl || !config.supabaseAnonKey || !state.isCloudConnected) return;

    const tableName = "academic_votes";

    try {
      await fetch(`${config.supabaseUrl}/rest/v1/${tableName}`, {
        method: "POST",
        headers: {
          "apikey": config.supabaseAnonKey,
          "Authorization": `Bearer ${config.supabaseAnonKey}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          winner_id: winnerId,
          loser_id: loserId,
          session_id: state.sessionId,
          created_at: new Date().toISOString()
        })
      });
    } catch (e) {
      console.warn("Error sending vote to cloud:", e.message);
    }
  }

  function updateCloudStatusBadge() {
    const badge = document.getElementById("cloud-status-badge");
    if (!badge) return;
    if (state.isCloudConnected) {
      badge.innerHTML = `🟢 Community: ${state.totalGlobalVotes} duels`;
      badge.title = "Connected to Supabase cloud database";
      badge.style.color = "#34d399";
    } else {
      badge.innerHTML = `💾 Local Mode`;
      badge.title = "Votes stored locally in browser";
      badge.style.color = "#94a3b8";
    }
  }

  // =========================================================================
  // SMART MATCHMAKING (Elo Proximity Sampling)
  // =========================================================================

  function getSmartPair() {
    const data = window.MISCONDUCT_DATA;
    if (data.length < 2) return [data[0], data[0]];

    const config = window.ACADEMIC_CONFIG?.matchmaking || { eloProximitySigma: 220, broadExplorationRate: 0.08 };
    const sigma = config.eloProximitySigma || 220;
    const epsilon = config.broadExplorationRate || 0.08;

    const idxA = Math.floor(Math.random() * data.length);
    const itemA = data[idxA];
    const scoreA = getGlobalScore(itemA.id).elo;

    const candidates = [];
    let totalWeight = 0;

    for (let i = 0; i < data.length; i++) {
      if (i === idxA) continue;
      const candidate = data[i];
      const scoreB = getActiveScore(candidate.id).elo;
      const diff = Math.abs(scoreA - scoreB);
      const weight = Math.exp(-Math.pow(diff, 2) / (2 * Math.pow(sigma, 2))) + epsilon;
      candidates.push({ item: candidate, weight: weight });
      totalWeight += weight;
    }

    let r = Math.random() * totalWeight;
    let itemB = candidates[0].item;
    for (const c of candidates) {
      r -= c.weight;
      if (r <= 0) {
        itemB = c.item;
        break;
      }
    }

    return Math.random() > 0.5 ? [itemA, itemB] : [itemB, itemA];
  }

  // =========================================================================
  // DUEL RENDERING
  // =========================================================================

  function renderMisconductCard(item, sideLetter, kbdKey) {
    const tierColors = {
      catastrophic: "#f43f5e",
      severe: "#fb923c",
      moderate: "#facc15",
      minor: "#34d399"
    };
    const tierColor = tierColors[item.severityTier] || "#38bdf8";

    return `
      <div class="misconduct-card" id="card-${item.id}" data-item-id="${item.id}" onclick="window.App.handleVote('${item.id}')">
        <div class="card-header-meta">
          <span class="card-option-tag">Case ${sideLetter} (${kbdKey})</span>
        </div>

        <div class="card-scenario-box">
          <div class="scenario-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Case Allegation
          </div>
          <p class="scenario-text">${item.scenario}</p>
        </div>

        <button class="card-cta-btn" type="button">
          <span>This Offense is More Severe</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        <div class="reveal-container" id="reveal-${item.id}">
          <div class="verdict-tag-placeholder" id="verdict-tag-${item.id}"></div>

          <!-- Revealed Offense Details -->
          <div style="background: var(--bg-surface-raised); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 0.75rem;">
            <div style="display:flex; gap:0.4rem; align-items:center; flex-wrap:wrap; margin-bottom: 0.4rem;">
              <span class="card-category-badge" style="border-color:${tierColor}; color:${tierColor};">⚡ ${item.severityTier.toUpperCase()}</span>
              <span class="card-category-badge">${item.categoryLabel}</span>
            </div>
            <h3 class="card-title">${item.name}</h3>
            <div class="card-standard-ref">📋 ${item.standardCitation}</div>
          </div>

          <div class="detail-section-title">Institutional Standard & Policy Rule</div>
          <div class="standard-box">
            <div class="standard-benchmark">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ${item.statutoryBenchmark}
            </div>
            <div class="standard-quote">“${item.standardText}”</div>
          </div>

          <div class="sanction-stats-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
              <span class="detail-section-title" style="margin:0;">Disciplinary & Retraction Pattern</span>
              <span style="font-size:0.7rem; color:var(--text-muted); font-family:var(--font-mono);">ORI / COPE / RWDB</span>
            </div>

            <div class="stats-bars">
              <div class="stat-bar-severe" style="width: ${item.sanctionStats.severeSanctionsPct}%;" title="Permanent Debarment/Dismissal: ${item.sanctionStats.severeSanctionsPct}%"></div>
              <div class="stat-bar-moderate" style="width: ${item.sanctionStats.moderateSanctionsPct}%;" title="Retraction / Lab Closure: ${item.sanctionStats.moderateSanctionsPct}%"></div>
              <div class="stat-bar-minor" style="width: ${item.sanctionStats.minorSanctionsPct}%;" title="Reprimand / Correction: ${item.sanctionStats.minorSanctionsPct}%"></div>
            </div>

            <div class="stats-legend">
              <div class="legend-item"><span class="legend-dot" style="background:#f43f5e"></span> Debarred/Fired <span style="font-weight:700;">${item.sanctionStats.severeSanctionsPct}%</span></div>
              <div class="legend-item"><span class="legend-dot" style="background:#fb923c"></span> Retracted/Suspended <span style="font-weight:700;">${item.sanctionStats.moderateSanctionsPct}%</span></div>
              <div class="legend-item"><span class="legend-dot" style="background:#34d399"></span> Reprimand <span style="font-weight:700;">${item.sanctionStats.minorSanctionsPct}%</span></div>
            </div>

            <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">
              ${item.sanctionStats.avgSentenceDescription}
            </p>
          </div>

          <!-- Real-world landmark case -->
          <div class="case-study-badge">
            <div class="case-study-title">
              <span>🏛️ Benchmark Case: ${item.caseStudy.name}</span>
              ${item.caseStudy.retractionCount > 0 ? `<span style="color:#f43f5e; font-weight:800;">${item.caseStudy.retractionCount} retractions</span>` : ''}
            </div>
            <div style="font-size:0.75rem; color:var(--text-secondary); line-height:1.4;">
              ${item.caseStudy.summary}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function loadNewDuel() {
    state.isRevealed = false;
    state.userChoiceId = null;
    state.currentPair = getSmartPair();

    const [itemA, itemB] = state.currentPair;
    const arenaEl = document.getElementById("duel-arena");
    if (!arenaEl) return;

    arenaEl.innerHTML = `
      <div class="matchup-grid">
        ${renderMisconductCard(itemA, "A", "← / 1")}
        <div class="versus-divider">
          <div class="vs-line"></div>
          <div class="vs-badge">VS</div>
          <div class="vs-line"></div>
        </div>
        ${renderMisconductCard(itemB, "B", "→ / 2")}
      </div>
    `;

    const resultPanel = document.getElementById("matchup-result-panel");
    if (resultPanel) {
      resultPanel.classList.remove("visible");
    }

    updateDuelCounter();
  }

  function updateDuelCounter() {
    const counterEl = document.getElementById("duel-counter-val");
    if (counterEl) {
      counterEl.textContent = state.totalDilemmasAnswered;
    }
  }

  // =========================================================================
  // VOTING & SEVERITY EVALUATION
  // =========================================================================

  function handleVote(selectedId) {
    if (state.isRevealed) return;

    state.isRevealed = true;
    state.userChoiceId = selectedId;
    state.totalDilemmasAnswered++;

    const [itemA, itemB] = state.currentPair;
    const selectedItem = itemA.id === selectedId ? itemA : itemB;
    const otherItem = itemA.id === selectedId ? itemB : itemA;

    // 1. Update user's local Elo
    const kFactor = 24;
    const userScoreA = getUserScore(selectedItem.id);
    const userScoreB = getUserScore(otherItem.id);
    const expUserA = 1 / (1 + Math.pow(10, (userScoreB.elo - userScoreA.elo) / 400));
    userScoreA.elo += Math.round(kFactor * (1 - expUserA));
    userScoreB.elo += Math.round(kFactor * (0 - (1 - expUserA)));
    userScoreA.wins++;
    userScoreA.matches++;
    userScoreB.matches++;
    saveStoredUserScores();

    // 2. Update global community Elo
    const globScoreA = getGlobalScore(selectedItem.id);
    const globScoreB = getGlobalScore(otherItem.id);
    const expGlobA = 1 / (1 + Math.pow(10, (globScoreB.elo - globScoreA.elo) / 400));
    globScoreA.elo += Math.round(kFactor * (1 - expGlobA));
    globScoreB.elo += Math.round(kFactor * (0 - (1 - expGlobA)));
    globScoreA.wins++;
    globScoreA.matches++;
    globScoreB.matches++;
    state.totalGlobalVotes++;
    updateCloudStatusBadge();

    // 3. Persist to Supabase
    recordVoteToCloud(selectedItem.id, otherItem.id);

    // Evaluate Policy Severity
    let policyStrictId = null;
    if (itemA.harmAnalysis.harmScore > itemB.harmAnalysis.harmScore + 4) {
      policyStrictId = itemA.id;
    } else if (itemB.harmAnalysis.harmScore > itemA.harmAnalysis.harmScore + 4) {
      policyStrictId = itemB.id;
    }

    if (policyStrictId === selectedId || policyStrictId === null) {
      state.agreedWithPolicyCount++;
    }
    saveStoredStats();

    // Visual Updates
    const cardA = document.getElementById(`card-${itemA.id}`);
    const cardB = document.getElementById(`card-${itemB.id}`);

    if (cardA && cardB) {
      cardA.classList.add("revealed");
      cardB.classList.add("revealed");
      if (selectedId === itemA.id) cardA.classList.add("selected-user");
      if (selectedId === itemB.id) cardB.classList.add("selected-user");
    }

    updateVerdictTag(itemA, itemB, policyStrictId);
    updateVerdictTag(itemB, itemA, policyStrictId);

    showResultPanel(selectedItem, otherItem, policyStrictId);
  }

  function updateVerdictTag(target, opponent, policyStrictId) {
    const el = document.getElementById(`verdict-tag-${target.id}`);
    if (!el) return;

    if (policyStrictId === null) {
      el.innerHTML = `<span class="verdict-tag equal">⚖️ Comparable Institutional Harm Tier (Score: ${target.harmAnalysis.harmScore} vs ${opponent.harmAnalysis.harmScore})</span>`;
    } else if (policyStrictId === target.id) {
      el.innerHTML = `<span class="verdict-tag stricter">⚖️ Higher Policy Severity (Harm Score: ${target.harmAnalysis.harmScore}/100)</span>`;
    } else {
      el.innerHTML = `<span class="verdict-tag milder">⚖️ Lower Policy Severity (Harm Score: ${target.harmAnalysis.harmScore}/100)</span>`;
    }
  }

  function showResultPanel(selected, other, policyStrictId) {
    const panel = document.getElementById("matchup-result-panel");
    const headingEl = document.getElementById("verdict-heading-text");
    const explEl = document.getElementById("verdict-explanation-text");
    if (!panel || !headingEl || !explEl) return;

    if (policyStrictId === null) {
      headingEl.innerHTML = `⚖️ Balanced Dilemma: Offenses Share Similar Institutional Severity`;
      explEl.innerHTML = `Both offenses carry critical ethical weight according to ORI/COPE benchmarks. Your choice of <strong>${selected.name}</strong> emphasizes specific operational hazards in the scientific ecosystem.`;
    } else if (policyStrictId === selected.id) {
      headingEl.innerHTML = `⚖️ Alignment with Research Integrity Standards`;
      explEl.innerHTML = `You chose <strong>${selected.name}</strong>, which aligns with higher regulatory and statutory severity thresholds (Harm Index: ${selected.harmAnalysis.harmScore}/100) compared to <strong>${other.name}</strong> (${other.harmAnalysis.harmScore}/100).`;
    } else {
      headingEl.innerHTML = `⚖️ Divergence from Standard Regulatory Sanction Tier`;
      explEl.innerHTML = `You chose <strong>${selected.name}</strong> (Harm Index: ${selected.harmAnalysis.harmScore}/100). Institutional benchmarks (ORI/COPE) typically impose higher structural penalties on <strong>${other.name}</strong> (${other.harmAnalysis.harmScore}/100).`;
    }

    panel.classList.add("visible");
  }

  // =========================================================================
  // VIEW 2: RANKINGS & SVG ALLUVIAL FLOW DIAGRAM
  // =========================================================================

  function renderRankingView() {
    if (state.rankingViewMode === "flow") {
      renderFlowView();
    } else {
      renderListView();
    }
  }

  function renderListView() {
    const container = document.getElementById("rankings-container");
    if (!container) return;

    let items = [...window.MISCONDUCT_DATA];

    if (state.rankingSortMode === "globalPublic") {
      items.sort((a, b) => getGlobalScore(b.id).elo - getGlobalScore(a.id).elo);
    } else if (state.rankingSortMode === "userVotes") {
      items.sort((a, b) => getUserScore(b.id).elo - getUserScore(a.id).elo);
    } else if (state.rankingSortMode === "policyBenchmark") {
      items.sort((a, b) => b.harmAnalysis.harmScore - a.harmAnalysis.harmScore);
    } else if (state.rankingSortMode === "careerImpact") {
      items.sort((a, b) => b.sanctionStats.severeSanctionsPct - a.sanctionStats.severeSanctionsPct);
    }

    container.innerHTML = `
      <div class="rankings-list">
        ${items.map((item, idx) => {
          const score = getActiveScore(item.id);
          const posClass = idx < 3 ? "top-3" : "";
          return `
            <div class="ranking-item">
              <div class="ranking-pos ${posClass}">#${idx + 1}</div>
              <div>
                <div style="font-weight:700; font-size:1rem; color:var(--text-primary);">${item.name}</div>
                <div style="font-size:0.75rem; color:var(--text-muted);">${item.categoryLabel} &bull; ${item.standardCitation}</div>
              </div>
              <div style="font-family:var(--font-mono); font-size:0.9rem; font-weight:700; color:var(--accent-primary);">
                ${score.elo} Elo
              </div>
              <div>
                <span class="card-category-badge" style="font-size:0.75rem;">Harm: ${item.harmAnalysis.harmScore}/100</span>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderFlowView() {
    const container = document.getElementById("rankings-container");
    if (!container) return;

    const data = [...window.MISCONDUCT_DATA];
    
    // Sort columns
    const col1 = [...data].sort((a, b) => (state.flowFirstColumnMode === "user" ? getUserScore(b.id).elo : getGlobalScore(b.id).elo) - (state.flowFirstColumnMode === "user" ? getUserScore(a.id).elo : getGlobalScore(a.id).elo));
    const col2 = [...data].sort((a, b) => b.harmAnalysis.harmScore - a.harmAnalysis.harmScore);
    const col3 = [...data].sort((a, b) => b.sanctionStats.severeSanctionsPct - a.sanctionStats.severeSanctionsPct);

    const posMap1 = {};
    const posMap2 = {};
    const posMap3 = {};
    col1.forEach((item, idx) => posMap1[item.id] = idx);
    col2.forEach((item, idx) => posMap2[item.id] = idx);
    col3.forEach((item, idx) => posMap3[item.id] = idx);

    const itemHeight = 36;
    const gap = 8;
    const totalHeight = data.length * (itemHeight + gap) + 60;
    const width = 960;
    const colWidth = 240;
    const c1X = 30;
    const c2X = width / 2 - colWidth / 2;
    const c3X = width - colWidth - 30;

    let svgPaths = "";
    data.forEach(item => {
      const y1 = 40 + posMap1[item.id] * (itemHeight + gap) + itemHeight / 2;
      const y2 = 40 + posMap2[item.id] * (itemHeight + gap) + itemHeight / 2;
      const y3 = 40 + posMap3[item.id] * (itemHeight + gap) + itemHeight / 2;

      const p1X = c1X + colWidth;
      const p2X_L = c2X;
      const p2X_R = c2X + colWidth;
      const p3X = c3X;

      const strokeColor = item.severityTier === "catastrophic" ? "rgba(244, 63, 94, 0.4)" :
                          item.severityTier === "severe" ? "rgba(251, 146, 60, 0.35)" :
                          item.severityTier === "moderate" ? "rgba(250, 204, 21, 0.3)" : "rgba(52, 211, 153, 0.3)";

      svgPaths += `
        <path d="M ${p1X} ${y1} C ${(p1X + p2X_L) / 2} ${y1}, ${(p1X + p2X_L) / 2} ${y2}, ${p2X_L} ${y2}" fill="none" stroke="${strokeColor}" stroke-width="2" class="flow-link" data-id="${item.id}" />
        <path d="M ${p2X_R} ${y2} C ${(p2X_R + p3X) / 2} ${y2}, ${(p2X_R + p3X) / 2} ${y3}, ${p3X} ${y3}" fill="none" stroke="${strokeColor}" stroke-width="2" class="flow-link" data-id="${item.id}" />
      `;
    });

    container.innerHTML = `
      <div class="flow-diagram-wrapper">
        <svg width="100%" height="${totalHeight}" viewBox="0 0 ${width} ${totalHeight}" style="min-width: 800px;">
          <text x="${c1X + colWidth/2}" y="22" fill="#94a3b8" font-size="12" font-weight="700" text-anchor="middle">
            ${state.flowFirstColumnMode === 'user' ? '👤 YOUR LOCAL RATINGS (ELO)' : '🌐 COMMUNITY OPINION (ELO)'}
          </text>
          <text x="${c2X + colWidth/2}" y="22" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">
            ⚖️ REGULATORY POLICY HARM (ORI/COPE)
          </text>
          <text x="${c3X + colWidth/2}" y="22" fill="#fb7185" font-size="12" font-weight="700" text-anchor="middle">
            🛑 SEVERE DISCIPLINARY SANCTION RATE
          </text>

          ${svgPaths}

          <!-- Column 1 Nodes -->
          ${col1.map((item, idx) => {
            const y = 40 + idx * (itemHeight + gap);
            return `
              <g transform="translate(${c1X}, ${y})">
                <rect width="${colWidth}" height="${itemHeight}" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
                <text x="10" y="22" fill="#f8fafc" font-size="11" font-weight="600">${idx + 1}. ${item.name.substring(0, 26)}...</text>
              </g>
            `;
          }).join("")}

          <!-- Column 2 Nodes -->
          ${col2.map((item, idx) => {
            const y = 40 + idx * (itemHeight + gap);
            return `
              <g transform="translate(${c2X}, ${y})">
                <rect width="${colWidth}" height="${itemHeight}" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
                <text x="10" y="22" fill="#f8fafc" font-size="11" font-weight="600">${idx + 1}. ${item.name.substring(0, 26)}...</text>
              </g>
            `;
          }).join("")}

          <!-- Column 3 Nodes -->
          ${col3.map((item, idx) => {
            const y = 40 + idx * (itemHeight + gap);
            return `
              <g transform="translate(${c3X}, ${y})">
                <rect width="${colWidth}" height="${itemHeight}" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
                <text x="10" y="22" fill="#f8fafc" font-size="11" font-weight="600">${idx + 1}. ${item.name.substring(0, 26)}...</text>
              </g>
            `;
          }).join("")}
        </svg>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 3: CATALOG & FILTERING
  // =========================================================================

  function renderCatalogView() {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;

    const query = (document.getElementById("catalog-search-input")?.value || "").toLowerCase();
    const filter = state.categoryFilter;

    const filtered = window.MISCONDUCT_DATA.filter(item => {
      const matchCat = filter === "all" || item.category === filter;
      const matchQuery = !query || 
        item.name.toLowerCase().includes(query) ||
        item.scenario.toLowerCase().includes(query) ||
        item.standardCitation.toLowerCase().includes(query) ||
        item.caseStudy.name.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    grid.innerHTML = filtered.map(item => `
      <div class="catalog-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span class="card-category-badge">${item.categoryLabel}</span>
          <span style="font-size:0.75rem; font-family:var(--font-mono); color:var(--accent-primary);">${item.severityTier.toUpperCase()}</span>
        </div>
        <h3 style="font-size:1.1rem; font-weight:800; margin-bottom:0.4rem;">${item.name}</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.75rem; flex:1;">
          ${item.scenario}
        </p>
        <div style="background:var(--bg-box-subtle); padding:0.6rem; border-radius:var(--radius-sm); font-size:0.75rem; color:var(--text-muted);">
          <strong>Standard:</strong> ${item.standardCitation}
        </div>
      </div>
    `).join("");
  }

  // =========================================================================
  // VIEW 4: ETHICS PROFILE
  // =========================================================================

  function renderProfileView() {
    const total = state.totalDilemmasAnswered;
    const policyPct = total > 0 ? Math.round((state.agreedWithPolicyCount / total) * 100) : 0;

    let personaTitle = "Novice Reviewer";
    let personaDesc = "Complete more duels to calibrate your research integrity assessment profile.";

    if (total >= 5) {
      if (policyPct >= 80) {
        personaTitle = "Strict Integrity Officer / ORI Auditor";
        personaDesc = "Your assessments align precisely with formal regulatory frameworks (ORI, COPE, Declaration of Helsinki), prioritizing the preservation of the scientific record above all.";
      } else if (policyPct >= 60) {
        personaTitle = "Balanced Ethics Committee Member";
        personaDesc = "You weigh direct human and societal harm alongside institutional guidelines, providing nuanced and pragmatic adjudications.";
      } else {
        personaTitle = "Pragmatic Science Advocate";
        personaDesc = "You place higher relative emphasis on immediate lab and trainee fallout, diverging from traditional legalistic codifications.";
      }
    }

    const container = document.getElementById("profile-content-wrapper");
    if (!container) return;

    container.innerHTML = `
      <div class="profile-grid">
        <div class="profile-card">
          <div class="profile-card-header">
            <div class="profile-card-icon">⚖️</div>
            <div>
              <div class="profile-card-title">Integrity Alignment</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">Consonance with ORI / COPE policy codes</div>
            </div>
          </div>
          <div class="stat-metric-large">${policyPct}%</div>
          <div class="stat-metric-label">${state.agreedWithPolicyCount} of ${total} decisions aligned with official policy severity</div>
        </div>

        <div class="profile-card">
          <div class="profile-card-header">
            <div class="profile-card-icon">🎓</div>
            <div>
              <div class="profile-card-title">Ethical Persona</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${personaTitle}</div>
            </div>
          </div>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
            ${personaDesc}
          </p>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // TAB NAVIGATION & EVENT LISTENERS
  // =========================================================================

  function switchTab(targetTabId) {
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.target === targetTabId);
    });

    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === targetTabId);
    });

    if (targetTabId === "view-duel") {
      if (!state.currentPair[0]) loadNewDuel();
    } else if (targetTabId === "view-ranking") {
      renderRankingView();
    } else if (targetTabId === "view-catalog") {
      renderCatalogView();
    } else if (targetTabId === "view-profile") {
      renderProfileView();
    }
  }

  function setupEventListeners() {
    // Nav tabs
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.addEventListener("click", () => switchTab(tab.dataset.target));
    });

    // Next duel button
    document.getElementById("next-duel-btn")?.addEventListener("click", loadNewDuel);

    // Keyboard shortcuts
    window.addEventListener("keydown", (e) => {
      const activeTab = document.querySelector(".view-section.active");
      if (!activeTab || activeTab.id !== "view-duel") return;

      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      if (!state.isRevealed) {
        if (e.key === "ArrowLeft" || e.key === "1") {
          if (state.currentPair[0]) handleVote(state.currentPair[0].id);
        } else if (e.key === "ArrowRight" || e.key === "2") {
          if (state.currentPair[1]) handleVote(state.currentPair[1].id);
        }
      } else {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          loadNewDuel();
        }
      }
    });

    // Catalog filtering
    document.getElementById("catalog-search-input")?.addEventListener("input", renderCatalogView);
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        state.categoryFilter = chip.dataset.category;
        renderCatalogView();
      });
    });

    // Ranking view toggles
    document.getElementById("toggle-view-flow")?.addEventListener("click", () => {
      state.rankingViewMode = "flow";
      document.getElementById("toggle-view-flow").classList.add("active");
      document.getElementById("toggle-view-list").classList.remove("active");
      renderRankingView();
    });

    document.getElementById("toggle-view-list")?.addEventListener("click", () => {
      state.rankingViewMode = "list";
      document.getElementById("toggle-view-list").classList.add("active");
      document.getElementById("toggle-view-flow").classList.remove("active");
      renderRankingView();
    });

    document.getElementById("sort-mode-select")?.addEventListener("change", (e) => {
      state.rankingSortMode = e.target.value;
      renderRankingView();
    });
  }

  // Application Startup
  window.App = {
    handleVote,
    loadNewDuel,
    switchTab
  };

  document.addEventListener("DOMContentLoaded", async () => {
    await loadStoredData();
    setupEventListeners();
    loadNewDuel();
  });

})();
