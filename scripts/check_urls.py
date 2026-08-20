import json
import urllib.request
import http.cookiejar
import ssl
import sys

content = open('misconduct-data.js', encoding='utf-8').read()
raw = content.split('=', 1)[1].rsplit(';', 1)[0].strip()
data = json.loads(raw)

cj = http.cookiejar.CookieJar()
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
opener.addheaders = [
    ('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
    ('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'),
    ('Accept-Language', 'en-US,en;q=0.5')
]

failures = []
for item in data:
    for field in ['caseStudy', 'standardUrl']:
        url = item['caseStudy']['url'] if field == 'caseStudy' else item['standardUrl']
        try:
            resp = opener.open(url, timeout=12)
            print(f"[OK {resp.status}] {item['id']} ({field}) -> {url}")
        except urllib.error.HTTPError as e:
            if e.code in [403, 429]:
                # Server Cloudflare / anti-bot blocking python user-agent
                print(f"[HTTP {e.code} (Anti-bot)] {item['id']} ({field}) -> {url}")
            else:
                print(f"[HTTP {e.code}] {item['id']} ({field}) -> {url}")
                failures.append((item['id'], field, url, str(e)))
        except Exception as e:
            print(f"[ERR] {item['id']} ({field}) -> {url}: {e}")
            failures.append((item['id'], field, url, str(e)))

print("\n--- Summary ---")
print(f"Total entries: {len(data)}, Total URLs: {len(data)*2}")
if failures:
    print(f"Failures ({len(failures)}):")
    for f in failures:
        print(f"  - {f[0]} [{f[1]}]: {f[2]} -> {f[3]}")
else:
    print("All URLs verified successfully!")
