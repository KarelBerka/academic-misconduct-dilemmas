/**
 * Academic Misconduct Dilemmas - Core Application Logic
 * Featuring Elo matchmaking, Supabase Cloud synchronization,
 * Interactive SVG Alluvial Flow Diagram, Catalog filtering, Research Integrity Profiler,
 * and Full Multilingual Support (EN / CS) with hashtag URL routing.
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
    currentLang: "en", // 'en' or 'cs'
    userScores: {},
    globalScores: {},
    totalGlobalVotes: 0,
    history: []
  };

  // =========================================================================
  // INTERNATIONALIZATION (I18N DICTIONARY)
  // =========================================================================

  const I18N = {
    en: {
      brandTitle: "Academic Dilemmas",
      brandSubtitle: "Research Integrity Comparator",
      navDuel: "Dilemma & Duel",
      navRanking: "Severity Rankings",
      navCatalog: "Misconduct Catalog",
      navProfile: "Integrity Profile",
      langButtonText: "🇨🇿 Čeština",
      langButtonTitle: "Přepnout do češtiny",
      themeDark: "Dark",
      themeLight: "Light",
      arenaTitle: "Which Academic Offense is More Severe?",
      arenaSubtitle: "Compare two concrete research integrity violations and select the one that represents a more dangerous breach of scientific ethics.",
      duelCounterLabel: "Evaluated Dilemmas:",
      localModeBadge: "💾 Local Mode",
      cloudBadge: (count) => `🟢 Community: ${count} duels`,
      caseOptionTag: (letter, key) => `Case ${letter} (${key})`,
      caseAllegation: "Case Allegation",
      offenseMoreSevere: "This Offense is More Severe",
      standardTitle: "Institutional Standard & Policy Rule",
      sanctionTitle: "Disciplinary & Retraction Pattern",
      debarredLabel: "Debarred/Fired",
      retractedLabel: "Retracted/Suspended",
      reprimandLabel: "Reprimand",
      benchmarkCase: "Benchmark Case:",
      retractionsCount: (n) => `${n} retractions`,
      nextDuelBtn: "Next Dilemma (Space / Enter)",
      evaluatingDilemma: "⚖️ Evaluating Dilemma...",
      verdictEqual: "⚖️ Comparable Institutional Harm Tier",
      verdictHigher: "⚖️ Higher Policy Severity",
      verdictLower: "⚖️ Lower Policy Severity",
      explEqual: (name) => `Both offenses carry critical ethical weight according to ORI/COPE benchmarks. Your choice of <strong>${name}</strong> emphasizes specific operational hazards in the scientific ecosystem.`,
      explHigher: (name, sScore, oName, oScore) => `You chose <strong>${name}</strong>, which aligns with higher regulatory and statutory severity thresholds (Harm Index: ${sScore}/100) compared to <strong>${oName}</strong> (${oScore}/100).`,
      explLower: (name, sScore, oName, oScore) => `You chose <strong>${name}</strong> (Harm Index: ${sScore}/100). Institutional benchmarks (ORI/COPE) typically impose higher structural penalties on <strong>${oName}</strong> (${oScore}/100).`,
      rankingTitle: "Academic Misconduct Severity Rankings",
      rankingSubtitle: "Compare public community perception (Elo rating) against regulatory policy standards (ORI/COPE) and real-world disciplinary sanctions.",
      toggleFlow: "🌊 Alluvial Flow Graph",
      toggleList: "📋 Standard List",
      rankBy: "Rank by:",
      sortGlobalPublic: "🌐 Community Opinion (Global Elo)",
      sortUserVotes: "👤 Your Personal Voting (Local Elo)",
      sortPolicyBenchmark: "⚖️ Institutional Harm Benchmark (ORI/COPE)",
      sortCareerImpact: "🛑 Disciplinary Debarment & Dismissal Rate",
      col1Public: "🌐 COMMUNITY OPINION (ELO)",
      col1User: "👤 YOUR LOCAL RATINGS (ELO)",
      col2Header: "⚖️ REGULATORY POLICY HARM (ORI/COPE)",
      col3Header: "🛑 SEVERE DISCIPLINARY SANCTION RATE",
      catalogTitle: "Research Integrity & Misconduct Catalog",
      catalogSubtitle: "Browse comprehensive definitions, institutional guidelines, and Retraction Watch landmark cases.",
      searchPlaceholder: "Search offenses, landmark cases (e.g. Macchiarini, Stapel, Lesné), or policies...",
      filterAll: "All Categories",
      filterFFP: "🧪 Data Fabrication & Falsification (FFP)",
      filterEthics: "🧬 Human, Animal & Biosafety",
      filterPub: "📰 Paper Mills & Peer Review Fraud",
      filterPlag: "📝 Plagiarism & Authorship Ethics",
      filterGrant: "💼 Grant Governance & Sabotage",
      filterStudent: "🎓 Student & Classroom Integrity",
      standardPrefix: "Standard:",
      profileTitle: "Your Research Integrity Profile",
      profileSubtitle: "Analyze how your ethical judgements compare to international codes of conduct and university disciplinary practices.",
      integrityAlignTitle: "Integrity Alignment",
      integrityAlignSub: "Consonance with ORI / COPE policy codes",
      decisionsAligned: (agreed, total) => `${agreed} of ${total} decisions aligned with official policy severity`,
      ethicalPersonaTitle: "Ethical Persona",
      personaNovice: "Novice Reviewer",
      personaNoviceDesc: "Complete more duels to calibrate your research integrity assessment profile.",
      personaStrict: "Strict Integrity Officer / ORI Auditor",
      personaStrictDesc: "Your assessments align precisely with formal regulatory frameworks (ORI, COPE, Declaration of Helsinki), prioritizing the preservation of the scientific record above all.",
      personaBalanced: "Balanced Ethics Committee Member",
      personaBalancedDesc: "You weigh direct human and societal harm alongside institutional guidelines, providing nuanced and pragmatic adjudications.",
      personaPragmatic: "Pragmatic Science Advocate",
      personaPragmaticDesc: "You place higher relative emphasis on immediate lab and trainee fallout, diverging from traditional legalistic codifications.",
      footerText: "<strong>Academic Misconduct Dilemmas</strong> &bull; An open-source research integrity comparator.",
      footerMethodology: "Methodology & Data Provenance",
      modalHeading: "Methodology & Data Provenance",
      sanctionMethodologyTooltip: "Estimated institutional response distribution synthesized from US ORI case findings, Retraction Watch Database (RWDB) retraction analyses (Fang et al., PNAS 2012), and COPE sanction workflows.",
      perspPublicBtn: "👥 Column 1: Community Consensus (Global Supabase Elo)",
      perspUserBtn: "👤 Column 1: Your Personal Choices (Local Session)",
      flowLegendDefault: "💡 Hover over any offense or line to highlight its path across all 3 ranking systems.",
      insightStricterPublicHeader: (who) => `${who} Stricter Than Policy Codes`,
      insightStricterLawHeader: (who) => `Policy Stricter Than ${who}`,
      insightConsensusHeader: "Highest Multi-System Consensus",
      insightStricterPublicDesc: (who, name, pRank, lRank, delta) => `${who} rank this offense at <strong>#${pRank}</strong>, whereas policy benchmarks rate it at <strong>#${lRank}</strong> (+${delta} ranks stricter).`,
      insightStricterLawDesc: (who, name, pRank, lRank, delta) => `Institutional codes assign high severity at <strong>#${lRank}</strong>, while ${who.toLowerCase()} consider it at <strong>#${pRank}</strong> (${delta} ranks milder).`,
      insightConsensusDesc: (name, pRank, lRank, cRank) => `High alignment: <strong>#${pRank} in community/user rating</strong>, <strong>#${lRank} in policy harm</strong>, and <strong>#${cRank} in real sanctions</strong>.`,
      flowHeaderCol1: (isUser) => isUser ? "👤 1. Your Judgements" : "👥 1. Community Voting",
      flowHeaderCol1Sub: (isUser, duels, global) => isUser ? `${duels} duels evaluated (this session)` : `Total ${global} duels (Supabase Elo)`,
      flowHeaderCol2: "⚖️ 2. Institutional Standards (ORI/COPE)",
      flowHeaderCol2Sub: "US ORI 42 CFR / COPE Codes ↗",
      flowHeaderCol3: "🛑 3. Disciplinary Sanction Rate",
      flowHeaderCol3Sub: "Retraction Watch DB / Case Findings ↗"
    },
    cs: {
      brandTitle: "Akademická Dilemata",
      brandSubtitle: "Srovnávač vědecké etiky a podvodů",
      navDuel: "Dilema & Duel",
      navRanking: "Žebříček závažnosti",
      navCatalog: "Katalog prohřešků",
      navProfile: "Etický profil",
      langButtonText: "🇬🇧 English",
      langButtonTitle: "Switch to English",
      themeDark: "Tmavý",
      themeLight: "Světlý",
      arenaTitle: "Který akademický prohřešek je závažnější?",
      arenaSubtitle: "Porovnejte dva konkrétní případy vědeckého pochybení a zvolte, který představuje nebezpečnější narušení vědecké etiky.",
      duelCounterLabel: "Vyřešená dilemata:",
      localModeBadge: "💾 Lokální režim",
      cloudBadge: (count) => `🟢 Komunita: ${count} duelů`,
      caseOptionTag: (letter, key) => `Případ ${letter} (${key})`,
      caseAllegation: "Popis skutku",
      offenseMoreSevere: "Tento prohřešek je závažnější",
      standardTitle: "Etický standard a institucionální pravidlo",
      sanctionTitle: "Disciplinární a publikační následky",
      debarredLabel: "Vyloučení/Vyhazov",
      retractedLabel: "Retrakce/Zákaz",
      reprimandLabel: "Napomenutí",
      benchmarkCase: "Referenční případ:",
      retractionsCount: (n) => `${n} retrakcí`,
      nextDuelBtn: "Další dilema (Mezerník / Enter)",
      evaluatingDilemma: "⚖️ Vyhodnocení dilematu...",
      verdictEqual: "⚖️ Srovnatelná institucionální závažnost",
      verdictHigher: "⚖️ Vyšší závažnost podle etických standardů",
      verdictLower: "⚖️ Nižší závažnost podle etických standardů",
      explEqual: (name) => `Oba delikty mají srovnatelnou závažnost podle standardů ORI/COPE. Vaše volba <strong>${name}</strong> zdůrazňuje specifická rizika pro vědecký ekosystém.`,
      explHigher: (name, sScore, oName, oScore) => `Zvolili jste <strong>${name}</strong>, což odpovídá vyšší závažnosti podle mezinárodních standardů (Skóre újmy: ${sScore}/100) oproti deliktu <strong>${oName}</strong> (${oScore}/100).`,
      explLower: (name, sScore, oName, oScore) => `Zvolili jste <strong>${name}</strong> (Skóre újmy: ${sScore}/100). Institucionální kodexy (ORI/COPE) obvykle ukládají přísnější postihy u srovnávaného činu <strong>${oName}</strong> (${oScore}/100).`,
      rankingTitle: "Žebříček závažnosti akademických prohřešků",
      rankingSubtitle: "Srovnání vnímání veřejnosti (Elo rating) s etickými standardy (ORI/COPE) a reálnou disciplinární praxí.",
      toggleFlow: "🌊 Alluvial Flow graf",
      toggleList: "📋 Klasický seznam",
      rankBy: "Řadit podle:",
      sortGlobalPublic: "🌐 Názor komunity (Globální Elo)",
      sortUserVotes: "👤 Vaše osobní hlasování (Lokální Elo)",
      sortPolicyBenchmark: "⚖️ Závažnost podle etických standardů (ORI/COPE)",
      sortCareerImpact: "🛑 Přísnost postihů (zákaz grantů a vyhazov)",
      col1Public: "🌐 NÁZOR KOMUNITY (ELO)",
      col1User: "👤 VAŠE HODNOCENÍ (ELO)",
      col2Header: "⚖️ ETICKÁ ZÁVAŽNOST (ORI/COPE)",
      col3Header: "🛑 NEJPŘÍSNĚJŠÍ SANKCE (%)",
      catalogTitle: "Katalog vědeckých prohřešků a integrity",
      catalogSubtitle: "Přehled definic, etických kodexů a kauz z databáze Retraction Watch.",
      searchPlaceholder: "Hledat prohřešky, kauzy (např. Macchiarini, Stapel, Lesné) nebo etická pravidla...",
      filterAll: "Všechny kategorie",
      filterFFP: "🧪 Fabrikace a falzifikace dat (FFP)",
      filterEthics: "🧬 Výzkum na lidech a zvířatech",
      filterPub: "📰 Publikační podvody a recenze",
      filterPlag: "📝 Plagiarism & Authorship Ethics",
      filterGrant: "💼 Grant Governance & Sabotage",
      filterStudent: "🎓 Studentská integrita",
      standardPrefix: "Standard:",
      profileTitle: "Váš profil etického posuzovatele",
      profileSubtitle: "Analýza vašeho etického úsudku ve srovnání s mezinárodními standardy a praxí univerzit.",
      integrityAlignTitle: "Shoda s etickými standardy",
      integrityAlignSub: "Shoda s kodexy ORI a COPE",
      decisionsAligned: (agreed, total) => `${agreed} z ${total} rozhodnutí ve shodě s oficiálními standardy`,
      ethicalPersonaTitle: "Etický profil",
      personaNovice: "Začínající hodnotitel",
      personaNoviceDesc: "Dokončete více duelů pro kalibraci vašeho profilu výzkumné integrity.",
      personaStrict: "Přísný inspektor etiky / Auditor ORI",
      personaStrictDesc: "Váš úsudek přesně odpovídá oficiálním kodexům (ORI, COPE, Helsinská deklarace) s důrazem na čistotu vědeckého poznání.",
      personaBalanced: "Vyvážený člen etické komise",
      personaBalancedDesc: "Vyvažujete přímé dopady na lidské životy a společnost s institucionálními pravidly a poskytujete realistická hodnocení.",
      personaPragmatic: "Pragmatický obhájce výzkumu",
      personaPragmaticDesc: "Kladete vyšší důraz na dopady na laboratorní tým a studenty, s odklonem od čistě formalistického posuzování.",
      footerText: "<strong>Akademická Dilemata</strong> &bull; Otevřený srovnávač vědecké etiky a akademické integrity.",
      footerMethodology: "Metodika a původ dat",
      modalHeading: "Metodika a původ dat",
      sanctionMethodologyTooltip: "Orientační rozpad institucionální praxe syntetizovaný z nálezů US ORI, analýz databáze Retraction Watch (Fang et al., PNAS 2012) a doporučených postupů COPE.",
      perspPublicBtn: "👥 Sloupec 1: Veřejnost (Globální data ze Supabase)",
      perspUserBtn: "👤 Sloupec 1: Vaše hlasy (Lokální hra)",
      flowLegendDefault: "💡 Najeďte kurzorem na delikt nebo linii pro zvýraznění jeho toku napříč všemi 3 žebříčky.",
      insightStricterPublicHeader: (who) => `${who} přísnější než etické standardy`,
      insightStricterLawHeader: (who) => `Standardy přísnější než ${who.toLowerCase()}`,
      insightConsensusHeader: "Nejvyšší vzájemná shoda",
      insightStricterPublicDesc: (who, name, pRank, lRank, delta) => `${who} tento delikt řadí na <strong>#${pRank}. místo</strong>, zatímco etické kodexy až na <strong>#${lRank}. místo</strong> (posun o +${delta} pozic přísněji).`,
      insightStricterLawDesc: (who, name, pRank, lRank, delta) => `Etické standardy stanovují vysokou závažnost na <strong>#${lRank}. místě</strong>, avšak ${who.toLowerCase()} čin vnímají na <strong>#${pRank}. místě</strong> (o ${delta} příček mírněji).`,
      insightConsensusDesc: (name, pRank, lRank, cRank) => `Vysoká shoda: <strong>#${pRank}. u lidí/vás</strong>, <strong>#${lRank}. v etických standardech</strong> a <strong>#${cRank}. v reálných sankcích</strong>.`,
      flowHeaderCol1: (isUser) => isUser ? "👤 1. Vaše hodnocení" : "👥 1. Hlasování komunity",
      flowHeaderCol1Sub: (isUser, duels, global) => isUser ? `Odehráno ${duels} duelů (tato hra)` : `Celkem ${global} duelů (Supabase Elo)`,
      flowHeaderCol2: "⚖️ 2. Etické standardy ORI / COPE",
      flowHeaderCol2Sub: "US ORI 42 CFR / COPE kodexy ↗",
      flowHeaderCol3: "🛑 3. Reálné disciplinární postihy",
      flowHeaderCol3Sub: "Retraction Watch DB / Šetření ↗"
    }
  };

  function t(key, ...args) {
    const langObj = I18N[state.currentLang] || I18N.en;
    const entry = langObj[key] || I18N.en[key] || "";
    if (typeof entry === "function") {
      return entry(...args);
    }
    return entry;
  }

  function getField(item, field) {
    if (!item) return "";
    if (state.currentLang === "cs") {
      const csVal = item[field + "_cs"];
      if (csVal) return csVal;
    }
    return item[field] || "";
  }

  // =========================================================================
  // LANGUAGE INITIALIZATION & HASH ROUTING
  // =========================================================================

  function getLanguageFromHashOrStorage() {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes("cs") || hash.includes("cz") || hash.includes("cesky")) {
      return "cs";
    }
    if (hash.includes("en") || hash.includes("english")) {
      return "en";
    }
    const stored = localStorage.getItem("academic_lang");
    if (stored === "cs" || stored === "en") return stored;
    return "en";
  }

  function setLanguage(lang, updateHash = true) {
    state.currentLang = (lang === "cs") ? "cs" : "en";
    try {
      localStorage.setItem("academic_lang", state.currentLang);
    } catch (e) {}

    document.documentElement.setAttribute("lang", state.currentLang);

    if (updateHash) {
      window.location.hash = state.currentLang === "cs" ? "#cs" : "#en";
    }

    updateStaticUI();

    // Re-render currently active view
    const activeSec = document.querySelector(".view-section.active");
    if (activeSec) {
      if (activeSec.id === "view-duel") {
        if (state.currentPair[0]) {
          const arenaEl = document.getElementById("duel-arena");
          if (arenaEl) {
            const [itemA, itemB] = state.currentPair;
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
          }
        }
      } else if (activeSec.id === "view-ranking") {
        renderRankingView();
      } else if (activeSec.id === "view-catalog") {
        renderCatalogView();
      } else if (activeSec.id === "view-profile") {
        renderProfileView();
      }
    }

    updateCloudStatusBadge();
  }

  function toggleLanguage() {
    const next = state.currentLang === "cs" ? "en" : "cs";
    setLanguage(next, true);
  }

  function updateStaticUI() {
    const setElem = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    const setHtml = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };

    setElem("brand-title-text", t("brandTitle"));
    setElem("brand-subtitle-text", t("brandSubtitle"));
    setElem("nav-duel-label", t("navDuel"));
    setElem("nav-ranking-label", t("navRanking"));
    setElem("nav-catalog-label", t("navCatalog"));
    setElem("nav-profile-label", t("navProfile"));

    const langBtn = document.getElementById("lang-toggle-btn");
    const langTxt = document.getElementById("lang-toggle-text");
    if (langTxt) langTxt.textContent = t("langButtonText");
    if (langBtn) {
      langBtn.setAttribute("title", t("langButtonTitle"));
      langBtn.setAttribute("aria-label", t("langButtonTitle"));
    }

    setElem("arena-title-text", t("arenaTitle"));
    setElem("arena-subtitle-text", t("arenaSubtitle"));
    setElem("duel-counter-label", t("duelCounterLabel"));
    setElem("next-duel-btn-text", t("nextDuelBtn"));

    setElem("ranking-title-text", t("rankingTitle"));
    setElem("ranking-subtitle-text", t("rankingSubtitle"));
    setElem("toggle-view-flow", t("toggleFlow"));
    setElem("toggle-view-list", t("toggleList"));
    setElem("rank-by-label", t("rankBy"));

    const sortSelect = document.getElementById("sort-mode-select");
    if (sortSelect) {
      sortSelect.options[0].text = t("sortGlobalPublic");
      sortSelect.options[1].text = t("sortUserVotes");
      sortSelect.options[2].text = t("sortPolicyBenchmark");
      sortSelect.options[3].text = t("sortCareerImpact");
    }

    setElem("catalog-title-text", t("catalogTitle"));
    setElem("catalog-subtitle-text", t("catalogSubtitle"));
    const searchInput = document.getElementById("catalog-search-input");
    if (searchInput) searchInput.setAttribute("placeholder", t("searchPlaceholder"));

    setElem("persp-public-text", t("perspPublicBtn"));
    setElem("persp-user-text", t("perspUserBtn"));
    setElem("flow-legend-default-text", t("flowLegendDefault"));

    setElem("filter-all-btn", t("filterAll"));
    setElem("filter-ffp-btn", t("filterFFP"));
    setElem("filter-ethics-btn", t("filterEthics"));
    setElem("filter-pub-btn", t("filterPub"));
    setElem("filter-plag-btn", t("filterPlag"));
    setElem("filter-grant-btn", t("filterGrant"));
    setElem("filter-student-btn", t("filterStudent"));

    setElem("profile-title-text", t("profileTitle"));
    setElem("profile-subtitle-text", t("profileSubtitle"));
    setElem("footer-methodology-text", t("footerMethodology"));
    setElem("modal-heading-text", t("modalHeading"));
    setHtml("footer-text", t("footerText"));
    renderMethodologyModalContent();
  }

  function renderMethodologyModalContent() {
    const el = document.getElementById("modal-body-content");
    if (!el) return;

    if (state.currentLang === "cs") {
      el.innerHTML = `
        <p><strong>Akademická Dilemata</strong> je otevřená srovnávací platforma navržená pro analýzu vnímání závažnosti vědeckých prohřešků a etických deliktů ve srovnání s reálnými mezinárodními standardy a disciplinární praxí.</p>

        <h4>1. Původ modelových scénářů (Scénáře)</h4>
        <p>Jedná se o anonymizované, modelové případy rekonstruující reálné vzorce pochybení. Byly syntetizovány na základě:</p>
        <ul>
          <li>Oficiálních vyšetřovacích protokolů <strong>US Office of Research Integrity (ORI Case Summaries)</strong>.</li>
          <li>Zpráv univerzitních vyšetřovacích komisí (např. <em>Tilburg University – Stapel Investigation</em>, <em>Karolinska Institutet – Macchiarini Report</em>, <em>Harvard Medical School – Anversa Review</em>).</li>
          <li>Retrakčních zpráv a kauz evidovaných v <strong>Retraction Watch Database (RWDB)</strong>.</li>
        </ul>

        <h4>2. Etické standardy a právní normy</h4>
        <p>Citace etických pravidel vycházejí přímo z mezinárodně závazných a uznávaných kodexů:</p>
        <ul>
          <li><strong>US Federal Policy on Research Misconduct (42 CFR Part 93)</strong> – definice FFP (Fabrication, Falsification, Plagiarism).</li>
          <li><strong>Helsinská deklarace WMA (Světová lékařská asociace)</strong> – etické principy pro lékařský výzkum na lidských subjektech.</li>
          <li><strong>COPE Guidelines (Committee on Publication Ethics)</strong> – standardy redakčních řízení, paper mills a recenzních řízení.</li>
          <li><strong>ICMJE Recommendations</strong> – kritéria autorství a deklarace střetů zájmů v biomedicínských časopisech.</li>
          <li><strong>ALLEA Code of Conduct</strong> – Evropský kodex integrity výzkumu.</li>
        </ul>

        <h4>3. Disciplinární a publikační následky (Kde se berou čísla?)</h4>
        <p>Protože akademické disciplinární komise nepodléhají jednomu globálnímu soudnímu registru, uvedená procenta představují <strong>empiricko-odhadový profil závažnosti (Severity Distribution Profile)</strong> vytvořený na základě:</p>
        <ul>
          <li><strong>30letých statistik šetření US ORI:</strong> cca 45–55 % prokázaných FFP u vedoucích výzkumníků vede k federálnímu zákazu grantů (<em>debarment</em> na 3–10 let či doživotně), zbytek k nucenému dohledu a retrakcím.</li>
          <li><strong>Bibliometrických studií retrakcí:</strong> Fang, Steen, & Casadevall (PNAS, 2012) – analýza 2 047 retrakcí; Steen et al. (PLOS ONE, 2013).</li>
        </ul>
        <div class="citation-box">
          <strong>Kategorie následků v datech:</strong><br>
          🔴 <strong>Vyloučení / Vyhazov (Debarred/Fired):</strong> Zákaz grantů (ORI debarment), propuštění, odebrání titulu, soudní žaloby (False Claims Act).<br>
          🟠 <strong>Retrakce / Zákaz (Retracted/Suspended):</strong> Formální stažení publikace (RWDB), zákaz vedení studentů, práce pod dohledem.<br>
          🟢 <strong>Napomenutí (Reprimand):</strong> Děkanské napomenutí, publikované erratum/korekce, povinné školení etiky výzkumu (RCR).
        </div>

        <h4>4. Klíčová literatura a zdroje</h4>
        <ul>
          <li>Fang, F. C., Steen, R. G., & Casadevall, A. (2012). <em>Misconduct accounts for the majority of retracted scientific publications.</em> PNAS, 109(42), 17028-17033.</li>
          <li>Steen, R. G., et al. (2013). <em>Why has the number of scientific retractions increased?</em> PLOS ONE, 8(7), e68397.</li>
          <li>US Office of Research Integrity. <em>Case Summaries (1994–2024).</em> https://ori.hhs.gov</li>
          <li>The Retraction Watch Database (RWDB). Center for Scientific Integrity. https://retractionwatch.com</li>
        </ul>
      `;
    } else {
      el.innerHTML = `
        <p><strong>Academic Misconduct Dilemmas</strong> is an open-source comparative platform designed to evaluate and analyze community perceptions of scientific misconduct relative to formal institutional oversight codes and real-world disciplinary outcomes.</p>

        <h4>1. Provenance of Case Scenarios</h4>
        <p>All dilemma scenarios are model anonymized cases reconstructing authentic patterns of research fraud, synthesized from:</p>
        <ul>
          <li>Official investigation findings published by the <strong>US Office of Research Integrity (ORI Case Summaries)</strong>.</li>
          <li>University investigative committee reports (e.g. <em>Tilburg University – Stapel Investigation</em>, <em>Karolinska Institutet – Macchiarini Report</em>, <em>Harvard Medical School – Anversa Review</em>).</li>
          <li>Retraction notices and investigative reports indexed in the <strong>Retraction Watch Database (RWDB)</strong>.</li>
        </ul>

        <h4>2. Regulatory Standards & Policy Codes</h4>
        <p>Cited standards represent direct policy clauses from international regulatory and ethics bodies:</p>
        <ul>
          <li><strong>US Federal Policy on Research Misconduct (42 CFR Part 93)</strong> – statutory FFP definitions (Fabrication, Falsification, Plagiarism).</li>
          <li><strong>WMA Declaration of Helsinki</strong> – ethical principles for medical research involving human subjects.</li>
          <li><strong>COPE Guidelines (Committee on Publication Ethics)</strong> – international protocols for paper mills, reviewer ethics, and authorship.</li>
          <li><strong>ICMJE Recommendations</strong> – authorship qualifications and conflict-of-interest disclosures.</li>
          <li><strong>ALLEA European Code of Conduct for Research Integrity</strong>.</li>
        </ul>

        <h4>3. Disciplinary Sanctions Breakdown (% Values Explained)</h4>
        <p>Because university disciplinary proceedings lack a singular global public docket, the percentage distributions represent an <strong>empirically calibrated institutional severity profile</strong> derived from:</p>
        <ul>
          <li><strong>US ORI 30-Year Longitudinal Findings:</strong> ~45–55% of confirmed Principal Investigator FFP findings result in multi-year or lifetime federal debarment, while remainder result in mandatory supervision and retractions.</li>
          <li><strong>Retraction Watch Bibliometric Studies:</strong> Fang, Steen, & Casadevall (PNAS, 2012) analyzing 2,047 retracted biomedical articles; Steen et al. (PLOS ONE, 2013).</li>
        </ul>
        <div class="citation-box">
          <strong>Sanction Tiers:</strong><br>
          🔴 <strong>Debarred / Fired:</strong> Federal funding debarment (3–10 yrs / lifetime), university dismissal, Ph.D. degree revocation, False Claims Act litigation.<br>
          🟠 <strong>Retracted / Suspended:</strong> Formal journal retractions, mandatory supervision, exclusion from graduate mentorship or grant review panels.<br>
          🟢 <strong>Reprimand / Correction:</strong> Letters of reprimand, published errata/corrections, mandatory Responsible Conduct of Research (RCR) coursework.
        </div>

        <h4>4. Key References</h4>
        <ul>
          <li>Fang, F. C., Steen, R. G., & Casadevall, A. (2012). <em>Misconduct accounts for the majority of retracted scientific publications.</em> PNAS, 109(42), 17028-17033.</li>
          <li>Steen, R. G., et al. (2013). <em>Why has the number of scientific retractions increased?</em> PLOS ONE, 8(7), e68397.</li>
          <li>US Office of Research Integrity. <em>Case Summaries (1994–2024).</em> https://ori.hhs.gov</li>
          <li>The Retraction Watch Database (RWDB). Center for Scientific Integrity. https://retractionwatch.com</li>
        </ul>
      `;
    }
  }

  function openMethodologyModal() {
    renderMethodologyModalContent();
    const modal = document.getElementById("methodology-modal");
    if (modal) {
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
    }
  }

  function closeMethodologyModal() {
    const modal = document.getElementById("methodology-modal");
    if (modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  }

  function initLanguage() {
    state.currentLang = getLanguageFromHashOrStorage();
    setLanguage(state.currentLang, false);

    document.getElementById("lang-toggle-btn")?.addEventListener("click", toggleLanguage);

    window.addEventListener("hashchange", () => {
      const newLang = getLanguageFromHashOrStorage();
      if (newLang !== state.currentLang) {
        setLanguage(newLang, false);
      }
    });
  }

  // =========================================================================
  // STATE MANAGEMENT & LOCAL STORAGE
  // =========================================================================

  function getSessionId() {
    let sid = localStorage.getItem("academic_session_id");
    if (!sid) {
      sid = "acad_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now().toString(36);
      localStorage.setItem("academic_session_id", sid);
    }
    return sid;
  }

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
  // SUPABASE CLOUD SYNCHRONIZATION
  // =========================================================================

  async function syncWithCloudDatabase() {
    const config = window.ACADEMIC_CONFIG;
    if (!config || !config.supabaseUrl || !config.supabaseAnonKey || config.supabaseUrl.includes("project-ref") || config.supabaseUrl.includes("vase-id")) {
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
      badge.innerHTML = t("cloudBadge", state.totalGlobalVotes);
      badge.title = state.currentLang === "cs" ? "Připojeno k centrální Supabase databázi" : "Connected to Supabase cloud database";
      badge.style.color = "#34d399";
    } else {
      badge.innerHTML = t("localModeBadge");
      badge.title = state.currentLang === "cs" ? "Hlasy se ukládají lokálně v prohlížeči" : "Votes stored locally in browser";
      badge.style.color = "#94a3b8";
    }
  }

  // =========================================================================
  // MATCHMAKING & CARD RENDERING
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

  function renderMisconductCard(item, sideLetter, kbdKey) {
    const tierColors = {
      catastrophic: "#f43f5e",
      severe: "#fb923c",
      moderate: "#facc15",
      minor: "#34d399"
    };
    const tierColor = tierColors[item.severityTier] || "#38bdf8";

    const itemName = getField(item, "name");
    const itemScenario = getField(item, "scenario");
    const itemCategoryLabel = getField(item, "categoryLabel");
    const itemCitation = getField(item, "standardCitation");
    const itemStandardText = getField(item, "standardText");
    const itemBenchmark = getField(item, "statutoryBenchmark");
    const itemSentenceDesc = getField(item.sanctionStats, "avgSentenceDescription") || item.sanctionStats.avgSentenceDescription;
    const caseSummary = getField(item.caseStudy, "summary") || item.caseStudy.summary;

    return `
      <div class="misconduct-card" id="card-${item.id}" data-item-id="${item.id}" onclick="window.App.handleVote('${item.id}')">
        <div class="card-header-meta">
          <span class="card-option-tag">${t("caseOptionTag", sideLetter, kbdKey)}</span>
        </div>

        <div class="card-scenario-box">
          <div class="scenario-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            ${t("caseAllegation")}
          </div>
          <p class="scenario-text">${itemScenario}</p>
        </div>

        <button class="card-cta-btn" type="button">
          <span>${t("offenseMoreSevere")}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        <div class="reveal-container" id="reveal-${item.id}">
          <div class="verdict-tag-placeholder" id="verdict-tag-${item.id}"></div>

          <!-- Revealed Details -->
          <div style="background: var(--bg-surface-raised); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 0.75rem;">
            <div style="display:flex; gap:0.4rem; align-items:center; flex-wrap:wrap; margin-bottom: 0.4rem;">
              <span class="card-category-badge" style="border-color:${tierColor}; color:${tierColor};">⚡ ${item.severityTier.toUpperCase()}</span>
              <span class="card-category-badge">${itemCategoryLabel}</span>
            </div>
            <h3 class="card-title">${itemName}</h3>
            <div>
              <a href="${item.standardUrl || '#'}" target="_blank" rel="noopener noreferrer" class="reference-link" onclick="event.stopPropagation();" title="${state.currentLang === 'cs' ? 'Otevřít etický standard / směrnici v novém okně' : 'Open official guideline in new tab'}">
                <span>📋 ${itemCitation}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          <div class="detail-section-title">${t("standardTitle")}</div>
          <div class="standard-box">
            <div class="standard-benchmark">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ${itemBenchmark}
            </div>
            <div class="standard-quote">“${itemStandardText}”</div>
          </div>

          <div class="sanction-stats-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
              <span class="detail-section-title" style="margin:0;">${t("sanctionTitle")}</span>
              <button class="methodology-badge" type="button" onclick="event.stopPropagation(); window.App.openMethodologyModal();" title="${t('sanctionMethodologyTooltip')}">
                <span>ℹ️ ORI / COPE / RWDB</span>
              </button>
            </div>

            <div class="stats-bars">
              <div class="stat-bar-severe" style="width: ${item.sanctionStats.severeSanctionsPct}%;" title="${t('debarredLabel')}: ${item.sanctionStats.severeSanctionsPct}%"></div>
              <div class="stat-bar-moderate" style="width: ${item.sanctionStats.moderateSanctionsPct}%;" title="${t('retractedLabel')}: ${item.sanctionStats.moderateSanctionsPct}%"></div>
              <div class="stat-bar-minor" style="width: ${item.sanctionStats.minorSanctionsPct}%;" title="${t('reprimandLabel')}: ${item.sanctionStats.minorSanctionsPct}%"></div>
            </div>

            <div class="stats-legend">
              <div class="legend-item"><span class="legend-dot" style="background:#f43f5e"></span> ${t("debarredLabel")} <span style="font-weight:700;">${item.sanctionStats.severeSanctionsPct}%</span></div>
              <div class="legend-item"><span class="legend-dot" style="background:#fb923c"></span> ${t("retractedLabel")} <span style="font-weight:700;">${item.sanctionStats.moderateSanctionsPct}%</span></div>
              <div class="legend-item"><span class="legend-dot" style="background:#34d399"></span> ${t("reprimandLabel")} <span style="font-weight:700;">${item.sanctionStats.minorSanctionsPct}%</span></div>
            </div>

            <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">
              ${itemSentenceDesc}
            </p>
          </div>

          <!-- Benchmark Case -->
          <div class="case-study-badge">
            <div class="case-study-title">
              <a href="${item.caseStudy.url || '#'}" target="_blank" rel="noopener noreferrer" class="case-study-link" onclick="event.stopPropagation();" title="${state.currentLang === 'cs' ? 'Číst podrobnosti kauzy na Retraction Watch / zdrojovém webu' : 'Read case details on Retraction Watch / source'}">
                <span>🏛️ ${t("benchmarkCase")} ${item.caseStudy.name}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              ${item.caseStudy.retractionCount > 0 ? `<span style="color:#f43f5e; font-weight:800;">${t("retractionsCount", item.caseStudy.retractionCount)}</span>` : ''}
            </div>
            <div style="font-size:0.75rem; color:var(--text-secondary); line-height:1.4;">
              ${caseSummary}
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
  // VOTING & VERDICT EVALUATION
  // =========================================================================

  function handleVote(selectedId) {
    if (state.isRevealed) return;

    state.isRevealed = true;
    state.userChoiceId = selectedId;
    state.totalDilemmasAnswered++;

    const [itemA, itemB] = state.currentPair;
    const selectedItem = itemA.id === selectedId ? itemA : itemB;
    const otherItem = itemA.id === selectedId ? itemB : itemA;

    // 1. User local Elo update
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

    // 2. Global community Elo update
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

    // 3. Supabase persistence
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

    // Visual updates
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
      el.innerHTML = `<span class="verdict-tag equal">${t("verdictEqual")} (${target.harmAnalysis.harmScore} vs ${opponent.harmAnalysis.harmScore})</span>`;
    } else if (policyStrictId === target.id) {
      el.innerHTML = `<span class="verdict-tag stricter">${t("verdictHigher")} (${target.harmAnalysis.harmScore}/100)</span>`;
    } else {
      el.innerHTML = `<span class="verdict-tag milder">${t("verdictLower")} (${target.harmAnalysis.harmScore}/100)</span>`;
    }
  }

  function showResultPanel(selected, other, policyStrictId) {
    const panel = document.getElementById("matchup-result-panel");
    const headingEl = document.getElementById("verdict-heading-text");
    const explEl = document.getElementById("verdict-explanation-text");
    if (!panel || !headingEl || !explEl) return;

    const sName = getField(selected, "name");
    const oName = getField(other, "name");

    if (policyStrictId === null) {
      headingEl.innerHTML = t("verdictEqual");
      explEl.innerHTML = t("explEqual", sName);
    } else if (policyStrictId === selected.id) {
      headingEl.innerHTML = t("verdictHigher");
      explEl.innerHTML = t("explHigher", sName, selected.harmAnalysis.harmScore, oName, other.harmAnalysis.harmScore);
    } else {
      headingEl.innerHTML = t("verdictLower");
      explEl.innerHTML = t("explLower", sName, selected.harmAnalysis.harmScore, oName, other.harmAnalysis.harmScore);
    }

    panel.classList.add("visible");
  }

  // =========================================================================
  // VIEW 2: RANKINGS & FLOW BUMP CHART
  // =========================================================================

  function renderRankingView() {
    const flowWrapper = document.getElementById("ranking-flow-wrapper");
    const listContainer = document.getElementById("ranking-list-container");
    const sortWrap = document.getElementById("ranking-sort-wrap");

    if (state.rankingViewMode === "flow") {
      if (flowWrapper) flowWrapper.style.display = "block";
      if (listContainer) listContainer.style.display = "none";
      if (sortWrap) sortWrap.style.display = "none";
      renderFlowBumpChart();
    } else {
      if (flowWrapper) flowWrapper.style.display = "none";
      if (listContainer) listContainer.style.display = "flex";
      if (sortWrap) sortWrap.style.display = "flex";
      renderListView();
    }
  }

  function renderFlowBumpChart() {
    const svgContainer = document.getElementById("ranking-flow-svg-container");
    const insightsContainer = document.getElementById("ranking-insights-container");
    if (!svgContainer || !insightsContainer) return;

    const data = [...window.MISCONDUCT_DATA];
    const totalItems = data.length;
    const isUserPersp = state.flowFirstColumnMode === "user";

    // 1. Column 1 sorted: User Elo or Global Supabase Elo
    const firstColSorted = [...data].sort((a, b) => {
      const eloA = isUserPersp ? getUserScore(a.id).elo : getGlobalScore(a.id).elo;
      const eloB = isUserPersp ? getUserScore(b.id).elo : getGlobalScore(b.id).elo;
      return eloB - eloA;
    });
    const firstColRanks = {};
    firstColSorted.forEach((item, idx) => { firstColRanks[item.id] = idx + 1; });

    // 2. Column 2 sorted: Policy Benchmark (ORI / COPE Harm Index)
    const policySorted = [...data].sort((a, b) => b.harmAnalysis.harmScore - a.harmAnalysis.harmScore);
    const policyRanks = {};
    policySorted.forEach((item, idx) => { policyRanks[item.id] = idx + 1; });

    // 3. Column 3 sorted: Real Disciplinary Sanctions Rate (% Debarred / Fired)
    const sanctionsSorted = [...data].sort((a, b) => b.sanctionStats.severeSanctionsPct - a.sanctionStats.severeSanctionsPct);
    const sanctionsRanks = {};
    sanctionsSorted.forEach((item, idx) => { sanctionsRanks[item.id] = idx + 1; });

    // Sestavení srovnávacího seznamu
    const comparisonList = [...data].map(item => {
      const pRank = firstColRanks[item.id];
      const lRank = policyRanks[item.id];
      const cRank = sanctionsRanks[item.id];
      const delta = lRank - pRank; // Kladné = 1. sloupec trestá přísněji než kodexy/standardy
      return { item, pRank, lRank, cRank, delta };
    });

    // Insight Cards (Paradoxy)
    const maxStricterPublic = [...comparisonList].sort((a, b) => b.delta - a.delta)[0];
    const maxStricterLaw = [...comparisonList].sort((a, b) => a.delta - b.delta)[0];
    const bestConsensus = [...comparisonList].sort((a, b) => Math.abs(a.delta) - Math.abs(b.delta))[0];

    const labelWho = isUserPersp ? (state.currentLang === "cs" ? "Vy" : "You") : (state.currentLang === "cs" ? "Veřejnost" : "Community");
    const labelWho2 = isUserPersp ? (state.currentLang === "cs" ? "Váš výběr" : "Your choices") : (state.currentLang === "cs" ? "Lidé" : "People");

    insightsContainer.innerHTML = `
      <div class="insight-card" style="border-left: 4px solid #f43f5e;">
        <div class="insight-card-header" style="color: #f43f5e;">
          <span>🚨 ${t("insightStricterPublicHeader", labelWho)}</span>
        </div>
        <div class="insight-card-title">${getField(maxStricterPublic.item, "name")}</div>
        <div class="insight-card-desc">
          ${t("insightStricterPublicDesc", labelWho2, getField(maxStricterPublic.item, "name"), maxStricterPublic.pRank, maxStricterPublic.lRank, maxStricterPublic.delta)}
        </div>
      </div>

      <div class="insight-card" style="border-left: 4px solid #38bdf8;">
        <div class="insight-card-header" style="color: #38bdf8;">
          <span>🏛️ ${t("insightStricterLawHeader", labelWho)}</span>
        </div>
        <div class="insight-card-title">${getField(maxStricterLaw.item, "name")}</div>
        <div class="insight-card-desc">
          ${t("insightStricterLawDesc", labelWho2, getField(maxStricterLaw.item, "name"), maxStricterLaw.pRank, maxStricterLaw.lRank, Math.abs(maxStricterLaw.delta))}
        </div>
      </div>

      <div class="insight-card" style="border-left: 4px solid #34d399;">
        <div class="insight-card-header" style="color: #34d399;">
          <span>⚖️ ${t("insightConsensusHeader")}</span>
        </div>
        <div class="insight-card-title">${getField(bestConsensus.item, "name")}</div>
        <div class="insight-card-desc">
          ${t("insightConsensusDesc", getField(bestConsensus.item, "name"), bestConsensus.pRank, bestConsensus.lRank, bestConsensus.cRank)}
        </div>
      </div>
    `;

    // Rozměry pro SVG graf
    const rowH = 38;
    const topPadding = 105;
    const svgWidth = 1140;
    const svgHeight = topPadding + (totalItems * rowH) + 30;

    const xP_text = 240;
    const xP_dot = 260;
    const xL_dotIn = 410;
    const xL_text = 550;
    const xL_dotOut = 690;
    const xC_dot = 840;
    const xC_text = 860;

    const categoryColors = {
      FFP: "#f43f5e",
      ResearchEthics: "#c084fc",
      PublicationFraud: "#38bdf8",
      PlagiarismAuthorship: "#34d399",
      GrantGovernance: "#facc15",
      StudentIntegrity: "#fb923c"
    };

    function getColor(item) {
      return categoryColors[item.category] || "#38bdf8";
    }

    const firstColTitle = isUserPersp ? t("flowHeaderCol1", true) : t("flowHeaderCol1", false);
    const firstColSub = isUserPersp 
      ? t("flowHeaderCol1Sub", true, state.totalDilemmasAnswered, 0) 
      : t("flowHeaderCol1Sub", false, 0, state.totalGlobalVotes);

    let svgHtml = `
      <svg class="flow-svg-canvas" viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Sloupcové hlavičky s vysvětlivkami a odkazy -->
        <g class="flow-headers">
          <!-- 1. Veřejnost / Vaše hlasy -->
          <rect x="20" y="15" width="300" height="58" rx="8" fill="var(--bg-surface-raised)" stroke="var(--border-medium)" stroke-width="1"/>
          <text x="170" y="37" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${firstColTitle}</text>
          <text x="170" y="58" fill="var(--text-secondary)" font-size="12" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">${firstColSub}</text>

          <!-- 2. Etické standardy & Harm Index -->
          <a xlink:href="https://ori.hhs.gov/definition-research-misconduct" target="_blank">
            <rect x="390" y="15" width="320" height="58" rx="8" fill="var(--bg-surface-raised)" stroke="var(--border-medium)" stroke-width="1" style="cursor:pointer;"/>
            <text x="550" y="37" fill="#fbbf24" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif" style="cursor:pointer;">${t("flowHeaderCol2")}</text>
            <text x="550" y="58" fill="#facc15" font-size="12" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif" style="text-decoration:underline; cursor:pointer;">${t("flowHeaderCol2Sub")}</text>
          </a>

          <!-- 3. Reálné sankce & Retrakce -->
          <a xlink:href="https://retractionwatch.com" target="_blank">
            <rect x="780" y="15" width="340" height="58" rx="8" fill="var(--bg-surface-raised)" stroke="var(--border-medium)" stroke-width="1" style="cursor:pointer;"/>
            <text x="950" y="37" fill="#34d399" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif" style="cursor:pointer;">${t("flowHeaderCol3")}</text>
            <text x="950" y="58" fill="#34d399" font-size="12" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif" style="text-decoration:underline; cursor:pointer;">${t("flowHeaderCol3Sub")}</text>
          </a>
        </g>

        <!-- Vodící vertikální čáry pro přehlednost -->
        <line x1="${xP_dot}" y1="${topPadding - 10}" x2="${xP_dot}" y2="${svgHeight - 20}" stroke="var(--border-medium)" stroke-dasharray="3 3" opacity="0.35"/>
        <line x1="${xL_dotIn}" y1="${topPadding - 10}" x2="${xL_dotIn}" y2="${svgHeight - 20}" stroke="var(--border-medium)" stroke-dasharray="3 3" opacity="0.35"/>
        <line x1="${xL_dotOut}" y1="${topPadding - 10}" x2="${xL_dotOut}" y2="${svgHeight - 20}" stroke="var(--border-medium)" stroke-dasharray="3 3" opacity="0.35"/>
        <line x1="${xC_dot}" y1="${topPadding - 10}" x2="${xC_dot}" y2="${svgHeight - 20}" stroke="var(--border-medium)" stroke-dasharray="3 3" opacity="0.35"/>

        <!-- Flow křivky a skupiny deliktů -->
        <g id="flow-groups-container">
    `;

    comparisonList.forEach(cItem => {
      const { item, pRank, lRank, cRank } = cItem;
      const color = getColor(item);
      const itemName = getField(item, "name");

      const yP = topPadding + (pRank - 1) * rowH;
      const yL = topPadding + (lRank - 1) * rowH;
      const yC = topPadding + (cRank - 1) * rowH;

      // Bézier curve P -> L
      const c1x = xP_dot + 75;
      const c2x = xL_dotIn - 75;
      const path1 = `M ${xP_dot} ${yP} C ${c1x} ${yP}, ${c2x} ${yL}, ${xL_dotIn} ${yL}`;

      // Bézier curve L -> C
      const c3x = xL_dotOut + 75;
      const c4x = xC_dot - 75;
      const path2 = `M ${xL_dotOut} ${yL} C ${c3x} ${yL}, ${c4x} ${yC}, ${xC_dot} ${yC}`;

      const debarTxt = item.sanctionStats.severeSanctionsPct + ' % ' + t("debarredLabel").toLowerCase();
      const shortName = itemName.length > 24 ? (itemName.substring(0, 22) + '…') : itemName;

      svgHtml += `
        <g class="flow-crime-group" data-crime-id="${item.id}" onmouseenter="window.App.highlightCrimeFlow('${item.id}')" onmouseleave="window.App.resetCrimeFlow()" style="transition: opacity 0.2s ease;">
          <!-- Flow spojnice -->
          <path class="flow-path flow-path-1" d="${path1}" stroke="${color}" stroke-width="2.2" opacity="0.45"/>
          <path class="flow-path flow-path-2" d="${path2}" stroke="${color}" stroke-width="2.2" opacity="0.45"/>

          <!-- 1. Veřejnost / Vaše hlasy Sloupec -->
          <g class="flow-node-group">
            <text x="${xP_text}" y="${yP + 4}" fill="var(--text-primary)" font-size="12" font-family="system-ui, sans-serif" text-anchor="end">
              <tspan fill="#38bdf8" font-weight="700">#${pRank}</tspan> ${shortName}
            </text>
            <circle class="flow-node-circle" cx="${xP_dot}" cy="${yP}" r="4.5" fill="${color}" stroke="var(--bg-surface)" stroke-width="1.5"/>
          </g>

          <!-- 2. Standardy & Harm Sloupec -->
          <g class="flow-node-group">
            <circle class="flow-node-circle" cx="${xL_dotIn}" cy="${yL}" r="4.5" fill="${color}" stroke="var(--bg-surface)" stroke-width="1.5"/>
            <text x="${xL_text}" y="${yL + 4}" fill="var(--text-primary)" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle">
              <tspan fill="#fbbf24" font-weight="700">#${lRank}</tspan> ${shortName}
            </text>
            <circle class="flow-node-circle" cx="${xL_dotOut}" cy="${yL}" r="4.5" fill="${color}" stroke="var(--bg-surface)" stroke-width="1.5"/>
          </g>

          <!-- 3. Sankce Sloupec -->
          <g class="flow-node-group">
            <circle class="flow-node-circle" cx="${xC_dot}" cy="${yC}" r="4.5" fill="${color}" stroke="var(--bg-surface)" stroke-width="1.5"/>
            <text x="${xC_text}" y="${yC + 4}" fill="var(--text-primary)" font-size="12" font-family="system-ui, sans-serif" text-anchor="start">
              <tspan fill="#34d399" font-weight="700">#${cRank}</tspan> ${shortName} (${debarTxt})
            </text>
          </g>
        </g>
      `;
    });

    svgHtml += `
        </g>
      </svg>
    `;

    svgContainer.innerHTML = svgHtml;
    resetCrimeFlow();
  }

  function highlightCrimeFlow(crimeId) {
    const groups = document.querySelectorAll(".flow-crime-group");
    const item = window.MISCONDUCT_DATA.find(c => c.id === crimeId);
    if (!item) return;

    const isUserPersp = state.flowFirstColumnMode === "user";
    const labelWho = isUserPersp ? (state.currentLang === "cs" ? "Vy" : "You") : (state.currentLang === "cs" ? "Veřejnost" : "Community");

    const tooltipBox = document.getElementById("flow-hover-tooltip-box");

    // Zvýrazníme vybraný delikt a ztlumíme ostatní
    groups.forEach(g => {
      const isTarget = g.dataset.crimeId === crimeId;
      g.classList.toggle("flow-highlighted", isTarget);
      g.classList.toggle("flow-dimmed", !isTarget);
      
      const paths = g.querySelectorAll(".flow-path");
      paths.forEach(p => {
        if (isTarget) {
          p.setAttribute("stroke-width", "4.8");
          p.setAttribute("opacity", "1");
        } else {
          p.setAttribute("stroke-width", "1.5");
          p.setAttribute("opacity", "0.1");
        }
      });

      const circles = g.querySelectorAll(".flow-node-circle");
      circles.forEach(c => {
        if (isTarget) {
          c.setAttribute("r", "7");
          c.setAttribute("stroke-width", "2.5");
        } else {
          c.setAttribute("r", "4.5");
          c.setAttribute("stroke-width", "1.5");
        }
      });
    });

    if (tooltipBox) {
      const score = isUserPersp ? getUserScore(item.id) : getGlobalScore(item.id);
      const data = [...window.MISCONDUCT_DATA];
      
      const col1Sorted = [...data].sort((a, b) => (isUserPersp ? getUserScore(b.id).elo : getGlobalScore(b.id).elo) - (isUserPersp ? getUserScore(a.id).elo : getGlobalScore(a.id).elo));
      const col2Sorted = [...data].sort((a, b) => b.harmAnalysis.harmScore - a.harmAnalysis.harmScore);
      const col3Sorted = [...data].sort((a, b) => b.sanctionStats.severeSanctionsPct - a.sanctionStats.severeSanctionsPct);

      const pRank = col1Sorted.findIndex(c => c.id === crimeId) + 1;
      const lRank = col2Sorted.findIndex(c => c.id === crimeId) + 1;
      const cRank = col3Sorted.findIndex(c => c.id === crimeId) + 1;

      const itemName = getField(item, "name");
      const itemCat = getField(item, "categoryLabel");

      tooltipBox.innerHTML = `
        <span>🔎 <strong>${itemName}</strong> (${itemCat}) &bull; 👥 1. ${labelWho}: <strong>#${pRank} (${score.elo} Elo)</strong> &bull; ⚖️ 2. ${t("col2Header")}: <strong>#${lRank} (${item.harmAnalysis.harmScore}/100)</strong> &bull; 🛑 3. ${t("col3Header")}: <strong>#${cRank} (${item.sanctionStats.severeSanctionsPct}% ${t("debarredLabel").toLowerCase()})</strong></span>
      `;
      tooltipBox.style.borderColor = "var(--accent-primary)";
    }
  }

  function resetCrimeFlow() {
    const groups = document.querySelectorAll(".flow-crime-group");
    groups.forEach(g => {
      g.classList.remove("flow-highlighted", "flow-dimmed");
      const paths = g.querySelectorAll(".flow-path");
      paths.forEach(p => {
        p.setAttribute("stroke-width", "2.2");
        p.setAttribute("opacity", "0.45");
      });
      const circles = g.querySelectorAll(".flow-node-circle");
      circles.forEach(c => {
        c.setAttribute("r", "4.5");
        c.setAttribute("stroke-width", "1.5");
      });
    });

    const tooltipBox = document.getElementById("flow-hover-tooltip-box");
    if (tooltipBox) {
      tooltipBox.innerHTML = `<span>${t("flowLegendDefault")}</span>`;
      tooltipBox.style.borderColor = "var(--border-medium)";
    }
  }

  function renderListView() {
    const container = document.getElementById("ranking-list-container");
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

    container.innerHTML = items.map((item, idx) => {
      const score = getActiveScore(item.id);
      const posClass = idx < 3 ? "top-3" : "";
      const itemName = getField(item, "name");
      const itemCat = getField(item, "categoryLabel");
      const itemCit = getField(item, "standardCitation");
      return `
        <div class="ranking-item">
          <div class="ranking-pos ${posClass}">#${idx + 1}</div>
          <div>
            <div style="font-weight:700; font-size:1rem; color:var(--text-primary);">${itemName}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${itemCat} &bull; ${itemCit}</div>
          </div>
          <div style="font-family:var(--font-mono); font-size:0.9rem; font-weight:700; color:var(--accent-primary);">
            ${score.elo} Elo
          </div>
          <div>
            <span class="card-category-badge" style="font-size:0.75rem;">Harm: ${item.harmAnalysis.harmScore}/100</span>
          </div>
        </div>
      `;
    }).join("");
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
      const name = getField(item, "name").toLowerCase();
      const scenario = getField(item, "scenario").toLowerCase();
      const citation = getField(item, "standardCitation").toLowerCase();
      const caseName = item.caseStudy.name.toLowerCase();

      const matchQuery = !query || 
        name.includes(query) ||
        scenario.includes(query) ||
        citation.includes(query) ||
        caseName.includes(query);
      return matchCat && matchQuery;
    });

    grid.innerHTML = filtered.map(item => {
      const itemName = getField(item, "name");
      const itemScenario = getField(item, "scenario");
      const itemCat = getField(item, "categoryLabel");
      const itemCit = getField(item, "standardCitation");
      return `
        <div class="catalog-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="card-category-badge">${itemCat}</span>
            <span style="font-size:0.75rem; font-family:var(--font-mono); color:var(--accent-primary);">${item.severityTier.toUpperCase()}</span>
          </div>
          <h3 style="font-size:1.1rem; font-weight:800; margin-bottom:0.4rem;">${itemName}</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.75rem; flex:1;">
            ${itemScenario}
          </p>
          <div style="background:var(--bg-box-subtle); padding:0.6rem; border-radius:var(--radius-sm); font-size:0.75rem; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center; gap:0.5rem; flex-wrap:wrap;">
            <a href="${item.standardUrl || '#'}" target="_blank" rel="noopener noreferrer" class="case-study-link" style="font-size:0.75rem;" title="${state.currentLang === 'cs' ? 'Otevřít etický standard / směrnici' : 'Open official guideline'}">
              <span><strong>${t("standardPrefix")}</strong> ${itemCit}</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <a href="${item.caseStudy.url || '#'}" target="_blank" rel="noopener noreferrer" class="case-study-link" style="font-size:0.75rem; color:var(--accent-primary); white-space:nowrap;" title="${state.currentLang === 'cs' ? 'Kauza z Retraction Watch' : 'Retraction Watch Benchmark Case'}">
              <span>🏛️ ${item.caseStudy.name}</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  // =========================================================================
  // VIEW 4: ETHICS PROFILE
  // =========================================================================

  function renderProfileView() {
    const total = state.totalDilemmasAnswered;
    const policyPct = total > 0 ? Math.round((state.agreedWithPolicyCount / total) * 100) : 0;

    let personaTitle = t("personaNovice");
    let personaDesc = t("personaNoviceDesc");

    if (total >= 5) {
      if (policyPct >= 80) {
        personaTitle = t("personaStrict");
        personaDesc = t("personaStrictDesc");
      } else if (policyPct >= 60) {
        personaTitle = t("personaBalanced");
        personaDesc = t("personaBalancedDesc");
      } else {
        personaTitle = t("personaPragmatic");
        personaDesc = t("personaPragmaticDesc");
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
              <div class="profile-card-title">${t("integrityAlignTitle")}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${t("integrityAlignSub")}</div>
            </div>
          </div>
          <div class="stat-metric-large">${policyPct}%</div>
          <div class="stat-metric-label">${t("decisionsAligned", state.agreedWithPolicyCount, total)}</div>
        </div>

        <div class="profile-card">
          <div class="profile-card-header">
            <div class="profile-card-icon">🎓</div>
            <div>
              <div class="profile-card-title">${t("ethicalPersonaTitle")}</div>
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
  // THEME MANAGEMENT (LIGHT / DARK MODE)
  // =========================================================================

  function getCurrentTheme() {
    const docTheme = document.documentElement.getAttribute("data-theme");
    if (docTheme === "light" || docTheme === "dark") return docTheme;
    const stored = localStorage.getItem("academic_theme");
    if (stored === "light" || stored === "dark") return stored;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }

  function updateThemeToggleUI(theme) {
    const iconEl = document.getElementById("theme-toggle-icon");
    const textEl = document.getElementById("theme-toggle-text");
    const btnEl = document.getElementById("theme-toggle-btn");

    const isLight = theme === "light";
    if (iconEl) iconEl.textContent = isLight ? "☀️" : "🌙";
    if (textEl) textEl.textContent = isLight ? t("themeLight") : t("themeDark");
    if (btnEl) {
      btnEl.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
      btnEl.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
  }

  function setTheme(theme) {
    const validTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", validTheme);
    try {
      localStorage.setItem("academic_theme", validTheme);
    } catch (e) {}
    updateThemeToggleUI(validTheme);

    if (state.rankingViewMode === "flow") {
      const activeTab = document.querySelector(".view-section.active");
      if (activeTab && activeTab.id === "view-ranking") {
        renderRankingView();
      }
    }
  }

  function toggleTheme() {
    const current = getCurrentTheme();
    const nextTheme = current === "light" ? "dark" : "light";
    setTheme(nextTheme);
  }

  function initTheme() {
    const initialTheme = getCurrentTheme();
    setTheme(initialTheme);

    const btn = document.getElementById("theme-toggle-btn");
    btn?.addEventListener("click", toggleTheme);

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        if (!localStorage.getItem("academic_theme")) {
          setTheme(e.matches ? "dark" : "light");
        }
      });
    }
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
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.addEventListener("click", () => switchTab(tab.dataset.target));
    });

    document.getElementById("next-duel-btn")?.addEventListener("click", loadNewDuel);

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

    document.getElementById("catalog-search-input")?.addEventListener("input", renderCatalogView);
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        state.categoryFilter = chip.dataset.category;
        renderCatalogView();
      });
    });

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

    // Flow Perspective Toggle Listeners
    document.getElementById("btn-flow-persp-public")?.addEventListener("click", () => {
      state.flowFirstColumnMode = "public";
      document.getElementById("btn-flow-persp-public")?.classList.add("active");
      document.getElementById("btn-flow-persp-user")?.classList.remove("active");
      renderFlowBumpChart();
    });

    document.getElementById("btn-flow-persp-user")?.addEventListener("click", () => {
      state.flowFirstColumnMode = "user";
      document.getElementById("btn-flow-persp-user")?.classList.add("active");
      document.getElementById("btn-flow-persp-public")?.classList.remove("active");
      renderFlowBumpChart();
    });

    // Methodology Modal Listeners
    document.getElementById("open-methodology-btn")?.addEventListener("click", openMethodologyModal);
    document.getElementById("modal-close-btn")?.addEventListener("click", closeMethodologyModal);
    document.getElementById("methodology-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "methodology-modal") {
        closeMethodologyModal();
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMethodologyModal();
      }
    });
  }

  // Application Startup
  window.App = {
    handleVote,
    loadNewDuel,
    switchTab,
    setTheme,
    toggleTheme,
    setLanguage,
    toggleLanguage,
    highlightCrimeFlow,
    resetCrimeFlow,
    highlightOffenseFlow: highlightCrimeFlow,
    resetOffenseFlow: resetCrimeFlow,
    openMethodologyModal,
    closeMethodologyModal
  };

  document.addEventListener("DOMContentLoaded", async () => {
    initTheme();
    initLanguage();
    await loadStoredData();
    setupEventListeners();
    loadNewDuel();
  });

})();
