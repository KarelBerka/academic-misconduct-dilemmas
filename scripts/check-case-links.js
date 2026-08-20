#!/usr/bin/env node
/**
 * Regression guard for the Academic Misconduct Dilemma App's source links.
 *
 * Root cause this guards against: caseStudy.url / standardUrl fields that
 * point to a generic search-results or index page (e.g.
 * "https://retractionwatch.com/?s=Some+Name" or
 * "https://ori.hhs.gov/case_summary") instead of a specific, direct article
 * about the case. Those render as a working hyperlink in the UI, so the bug
 * is invisible to a quick smoke test -- clicking through is the only way to
 * notice the link doesn't land on the actual case.
 *
 * This script loads misconduct-data.js exactly the way the app does (it sets
 * window.MISCONDUCT_DATA) and flags any entry whose caseStudy.url or
 * standardUrl matches a known "not a specific case" pattern, or is missing.
 *
 * Usage: node scripts/check-case-links.js
 * Exit code 0 = pass, 1 = fail (with a list of offending entries).
 */

const path = require("path");

global.window = global.window || {};
require(path.join(__dirname, "..", "misconduct-data.js"));

const data = global.window.MISCONDUCT_DATA;

if (!Array.isArray(data) || data.length === 0) {
  console.error("FAIL: window.MISCONDUCT_DATA did not load or is empty.");
  process.exit(1);
}

// Patterns that indicate a link goes "somewhere" (a search box or a generic
// index) rather than to the specific case/article.
const BAD_PATTERNS = [
  {
    re: /\?s=/i,
    reason:
      "generic search-query URL (returns a results page whose content can change or come up empty, not a specific case)",
  },
  {
    re: /^https?:\/\/(www\.)?retractionwatch\.com\/?$/i,
    reason: "links to the RetractionWatch homepage, not a case",
  },
  {
    re: /^https?:\/\/ori\.hhs\.gov\/case_summary\/?$/i,
    reason: "links to the generic ORI case-summary index, not a specific finding",
  },
  {
    re: /^https?:\/\/(www\.)?google\.[a-z.]+\/search/i,
    reason: "links to a search engine results page",
  },
];

const failures = [];

for (const item of data) {
  const fields = [
    ["caseStudy.url", item.caseStudy && item.caseStudy.url],
    ["standardUrl", item.standardUrl],
  ];

  for (const [field, url] of fields) {
    if (!url) {
      failures.push(`${item.id}: ${field} is missing`);
      continue;
    }
    for (const { re, reason } of BAD_PATTERNS) {
      if (re.test(url)) {
        failures.push(`${item.id}: ${field} = "${url}" -> ${reason}`);
      }
    }
  }
}

if (failures.length) {
  console.error(`FAIL: ${failures.length} link-quality issue(s) found in misconduct-data.js:\n`);
  failures.forEach((f) => console.error(" - " + f));
  process.exit(1);
}

console.log(
  `OK: all ${data.length} entries have a specific caseStudy.url and standardUrl (no generic search or index pages).`
);
