#!/usr/bin/env python3
"""
Regression guard for the Academic Misconduct Dilemma App's source links.
Verifies that all caseStudy.url and standardUrl fields in misconduct-data.js
are present and point to specific direct sources rather than generic search/index pages.
"""

import json
import re
import sys
from pathlib import Path

data_path = Path(__file__).resolve().parent.parent / "misconduct-data.js"
if not data_path.exists():
    print(f"FAIL: {data_path} not found")
    sys.exit(1)

content = data_path.read_text(encoding="utf-8")
raw = content.split("=", 1)[1].rsplit(";", 1)[0].strip()

try:
    data = json.loads(raw)
except Exception as e:
    print(f"FAIL: could not parse misconduct-data.js: {e}")
    sys.exit(1)

BAD_PATTERNS = [
    (re.compile(r"\?s=", re.I), "generic search-query URL"),
    (re.compile(r"^https?://(www\.)?retractionwatch\.com/?$", re.I), "links to RetractionWatch homepage"),
    (re.compile(r"^https?://ori\.hhs\.gov/case_summary/?$", re.I), "links to generic ORI index"),
    (re.compile(r"^https?://(www\.)?google\.[a-z.]+/search", re.I), "links to search engine results page"),
    (re.compile(r"^http://blogs\.nature\.com/", re.I), "links to retired Nature blog domain (use nature.com/articles/ instead)")
]

failures = []

for item in data:
    fields = [
        ("caseStudy.url", item.get("caseStudy", {}).get("url")),
        ("standardUrl", item.get("standardUrl")),
    ]
    for field_name, url in fields:
        if not url:
            failures.append(f"{item['id']}: {field_name} is missing")
            continue
        for pat, reason in BAD_PATTERNS:
            if pat.search(url):
                failures.append(f"{item['id']}: {field_name} = \"{url}\" -> {reason}")

if failures:
    print(f"FAIL: {len(failures)} link-quality issue(s) found:")
    for f in failures:
        print(f" - {f}")
    sys.exit(1)

print(f"OK: all {len(data)} entries ({len(data)*2} URLs) have specific caseStudy.url and standardUrl.")
sys.exit(0)
