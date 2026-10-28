/**
 * Cloud storage and matchmaking configuration for Academic Misconduct Dilemmas
 */

window.ACADEMIC_CONFIG = {
  // Your Google Apps Script Web App URL (e.g. 'https://script.google.com/macros/s/AKfycb.../exec')
  // Set to empty string "" to run purely in local mode
  googleAppScriptUrl: "https://script.google.com/macros/s/AKfycbyfCn-F0i0Khy1UeenwGt7cRYTNSqfzai-ez9PFtREBW_bBjwaYjfEvM2mnXVKu-j692A/exec",

  // Smart matchmaking settings (Elo proximity matching)
  matchmaking: {
    // Sigma in Elo points (lower value = closer offense severity pairings)
    // 220 ensures ~85% of duels are between offenses of comparable gravity
    eloProximitySigma: 220,

    // Exploration probability (0.0 to 1.0) for occasional broad pairings across tiers
    broadExplorationRate: 0.08
  }
};
