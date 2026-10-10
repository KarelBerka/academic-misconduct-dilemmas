# 🎓 Academic Misconduct Dilemmas

> An interactive, data-driven web platform for comparing and analyzing the severity of academic integrity violations, research fraud, and scientific misconduct. Built on benchmarks from the **Retraction Watch Database (RWDB)**, the **US Office of Research Integrity (ORI)**, the **Committee on Publication Ethics (COPE)**, and real-world institutional disciplinary cases.

🔗 **Live Version on GitHub Pages:** [https://karelberka.github.io/academic-misconduct-dilemmas/](https://karelberka.github.io/academic-misconduct-dilemmas/)

---

## 🎯 Core Features

- **⚔️ Misconduct Dilemma & Duel Arena**:
  - Presents realistic, anonymized case studies across biological, clinical, physical, social, and student domains.
  - Interactive voting with mouse or keyboard shortcuts (`← / 1` for left choice, `→ / 2` for right choice, `Space / Enter` for next dilemma).
  - **Instant Ethical & Disciplinary Confrontation**:
    - Citation of regulatory standards (*US ORI 42 CFR Part 93*, *Declaration of Helsinki*, *COPE Guidelines*, *ICMJE*, *False Claims Act*).
    - Statistical distribution of actual institutional sanctions (Permanent Debarment/Dismissal %, Retraction/Suspension %, Formal Reprimand %).
    - Harm analysis detailing contamination of the scientific record and damage to trainees/patients.
    - Landmark real-world Retraction Watch benchmark case study (e.g. *Paolo Macchiarini*, *Diederik Stapel*, *Sylvain Lesné*, *He Jiankui*, *Piero Anversa*, *Brian Wansink*).

- **🎯 Smart Matchmaking (Gaussian Elo Proximity Sampling)**:
  - Dynamically pairs offenses of comparable ethical gravity ($e^{-\frac{\Delta Elo^2}{2\sigma^2}}$).
  - Eliminates trivial pairings (*Lethal clinical trial fabrication vs. Unshared raw code*) and generates engaging, high-stakes moral dilemmas.

- **📊 Tri-Column Alluvial Flow Graph & Rankings**:
  - Interactive SVG Flow visualization showing rank shifts across:
    1. **Community Opinion** (Crowdsourced Elo rating)
    2. **Regulatory Policy Standards** (ORI/COPE Harm Index)
    3. **Severe Disciplinary Sanctions** (Rate of permanent debarment, firing, and degree revocation)
  - Sortable ranking table with instant multi-criteria sorting.

- **📖 Research Misconduct Catalog & Encyclopedia**:
  - Searchable database categorized by:
    - 🧪 **FFP** (Data Fabrication & Falsification)
    - 🧬 **Research Ethics** (Human, Animal & Biosafety Protocols)
    - 📰 **Publication Fraud** (Paper Mills, Fake Peer Review Rings, Citation Cartels)
    - 📝 **Plagiarism & Authorship** (Dissertation Plagiarism, Reviewer Scooping, Ghostwriting)
    - 💼 **Grant Governance** (Grant Embezzlement, Undisclosed Pharma COI, Lab Sabotage)
    - 🎓 **Student Integrity** (Contract Cheating, Remote Exam Rings)

- **👤 Research Integrity Persona Profile**:
  - Evaluates your ethical alignment against international oversight standards, assigning an ethical persona (*Strict Integrity Officer*, *Balanced Ethics Committee Member*, or *Pragmatic Science Advocate*).

- **🌐 Multilingual Support & Hashtag Linking (EN / CS)**:
  - Complete, professional bilingual localization in **English** and **Czech** (`#en` / `#cs`).
  - Seamless hashtag URL linking: append `#cs` (e.g. `https://karelberka.github.io/academic-misconduct-dilemmas/#cs) to open the app directly in Czech.

- **🌓 Dark & Light Theme**:
  - Full support for dark and light modes with anti-FOUT and reactive SVG Flow chart adjustments.

- **☁️ Cloud Synchronization (Google Sheets & Apps Script)**:
  - Pure zero-dependency client-side application running on GitHub Pages.
  - Seamlessly records and fetches global crowd votes from Google Sheets via Google Apps Script Web App with automatic fallback to `localStorage`.
  - Zero maintenance: never pauses or expires after inactivity.

---

## 🚀 Getting Started & Deployment

### Local Development
No build tools, bundlers, or package installations are required. Open `index.html` in any modern web browser.

### Link Quality Regression Check
Before deploying, run:

```bash
python scripts/check_case_links.py
# or
node scripts/check-case-links.js
```

This verifies that all `caseStudy.url` and `standardUrl` entries in `misconduct-data.js` point to direct, specific case studies and authoritative guidelines rather than generic search-query or index URLs.

### Deploying to GitHub Pages
1. Push this repository to GitHub at `https://github.com/KarelBerka/academic-misconduct-dilemmas`.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, select:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
4. The site will be live within a minute at `https://karelberka.github.io/academic-misconduct-dilemmas/`.

---

## 🗄️ Google Sheets Cloud Backend Setup

To enable shared community Elo scoring via Google Sheets:

1. Create a new Google Sheet at [sheets.new](https://sheets.new).
2. In the Google Sheets menu, open **Extensions** -> **Apps Script**.
3. Copy the script from [`google-apps-script.js`](file:///google-apps-script.js) and paste it into the Apps Script editor.
4. Click **Deploy** -> **New deployment**:
   - **Select type**: `Web app`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
5. Click **Deploy** and copy the **Web app URL** (`https://script.google.com/macros/s/.../exec`).
6. Paste your URL into [`config.js`](file:///config.js):
   ```javascript
   window.ACADEMIC_CONFIG = {
     googleAppScriptUrl: "https://script.google.com/macros/s/.../exec",
     ...
   };
   ```
7. Done! Votes and Elo ratings will now update live directly in your Google Sheet without any pausing or expiration.

---

---

## 🔬 Methodology & Data Provenance

### 1. Provenance of Dilemma Scenarios
All 29 dilemma scenarios are model anonymized cases reconstructing authentic patterns of scientific misconduct. They are synthesized from:
* Official investigation findings published by the **US Office of Research Integrity (ORI Case Summaries)**.
* University investigative committee reports (e.g. *Tilburg University – Stapel Investigation*, *Karolinska Institutet – Macchiarini Report*, *Harvard Medical School – Anversa Review*).
* Retraction notices and investigative reports indexed in the **Retraction Watch Database (RWDB)**.

### 2. Regulatory Standards & Policy Rules
Cited standards represent direct policy clauses from statutory frameworks and international ethics guidelines:
* **US Federal Policy on Research Misconduct (42 CFR Part 93)** — statutory FFP definitions (*Fabrication, Falsification, Plagiarism*).
* **WMA Declaration of Helsinki** — ethical principles for medical research involving human subjects.
* **COPE Guidelines (Committee on Publication Ethics)** — protocols for paper mills, reviewer ethics, and authorship.
* **ICMJE Recommendations** — authorship qualifications and conflict-of-interest disclosures.
* **ALLEA European Code of Conduct for Research Integrity**.

### 3. Disciplinary Sanctions Breakdown (% Values)
Because university disciplinary proceedings lack a singular global public docket, the percentage distributions represent an **empirically calibrated institutional severity profile** synthesized from:
* **US ORI 30-Year Longitudinal Findings**: ~45–55% of confirmed Principal Investigator FFP findings result in multi-year or lifetime federal debarment, with the remainder resulting in mandatory supervision and retractions.
* **Bibliometric Analyses of Retractions**:
  * Fang, F. C., Steen, R. G., & Casadevall, A. (2012). *Misconduct accounts for the majority of retracted scientific publications.* PNAS, 109(42), 17028-17033.
  * Steen, R. G., et al. (2013). *Why has the number of scientific retractions increased?* PLOS ONE, 8(7), e68397.
  * Fanelli, D. (2009). *How many scientists fabricate and falsify research? A systematic review and meta-analysis of survey data.* PLOS ONE, 4(5), e5738.

**Sanction Tiers in the Model**:
* 🔴 **Debarred / Fired (Severe)**: Federal funding debarment (3–10 yrs / lifetime), university dismissal, Ph.D. degree revocation, False Claims Act civil/criminal litigation.
* 🟠 **Retracted / Suspended (Moderate)**: Formal journal retractions, mandatory supervision, exclusion from graduate mentorship or grant review panels.
* 🟢 **Reprimand / Correction (Minor)**: Letters of reprimand, published errata/corrections, mandatory Responsible Conduct of Research (RCR) coursework.

---

## 📚 References & Data Sources

- **Retraction Watch Database (RWDB)** — Center for Scientific Integrity ([retractionwatch.com](https://retractionwatch.com))
- **US Office of Research Integrity (ORI)** — Public Health Service Policies on Research Misconduct (42 CFR Part 93) ([ori.hhs.gov](https://ori.hhs.gov))
- **Committee on Publication Ethics (COPE)** — Core Practices and Retraction Guidelines ([publicationethics.org](https://publicationethics.org))
- **ALLEA** — The European Code of Conduct for Research Integrity ([allea.org](https://allea.org))
- **World Medical Association (WMA)** — Declaration of Helsinki: Ethical Principles for Medical Research Involving Human Subjects ([wma.net](https://www.wma.net))
- **International Committee of Medical Journal Editors (ICMJE)** — Recommendations for Conduct, Reporting, Editing, and Publication ([icmje.org](https://www.icmje.org))

