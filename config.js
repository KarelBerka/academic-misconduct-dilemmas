/**
 * Cloud storage and matchmaking configuration for Academic Misconduct Dilemmas
 */

window.ACADEMIC_CONFIG = {
  // Your Supabase Project URL (e.g. 'https://<project-ref>.supabase.co')
  supabaseUrl: "https://byvjqnbpltjwcluigkfj.supabase.co",

  // Your Supabase Publishable / Anon API Key
  supabaseAnonKey: "sb_publishable_IMAMxmi6B1ui_CposyQnGA_G_wZPVcd",

  // Table name for storing votes (default: 'academic_votes' or 'votes')
  votesTable: "academic_votes",

  // Smart matchmaking settings (Elo proximity matching)
  matchmaking: {
    // Sigma in Elo points (lower value = closer offense severity pairings)
    // 220 ensures ~85% of duels are between offenses of comparable gravity
    eloProximitySigma: 220,

    // Exploration probability (0.0 to 1.0) for occasional broad pairings across tiers
    broadExplorationRate: 0.08
  }
};
