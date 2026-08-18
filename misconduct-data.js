/**
 * Database of Academic Misconduct Offenses
 * Based on Retraction Watch Database (RWDB), US ORI, COPE, and institutional codes.
 */

window.MISCONDUCT_DATA = [
  {
    id: "lethal-clinical-trial-fabrication",
    name: "Lethal Clinical Trial Data Fabrication",
    category: "ResearchEthics",
    categoryLabel: "Human & Animal Research Ethics",
    severityTier: "catastrophic",
    delictType: "criminal_academic",
    scenario: "A prominent surgeon fabricated post-operative recovery data and concealed severe tissue necrosis in clinical trials for synthetic bioengineered organ implants, leading to the agonizing deaths of multiple patients while falsely claiming clinical breakthrough in top medical journals.",
    standardCitation: "Declaration of Helsinki Art. 12, 23 & Criminal Negligence",
    standardText: "Medical research involving human subjects must conform to generally accepted scientific principles and ethical standards. Under no circumstances may patient safety and truthful adverse event reporting be compromised for research promotion.",
    statutoryBenchmark: "Criminal Indictment, Permanent Revocation of Medical License & Scientific Debarment",
    sanctionStats: {
      severeSanctionsPct: 98,
      moderateSanctionsPct: 2,
      minorSanctionsPct: 0,
      avgDebarmentYears: 15,
      avgSentenceDescription: "Institutional bodies universally refer cases to criminal prosecutors for involuntary manslaughter or gross bodily harm; immediate license revocation and lifetime research debarment."
    },
    harmAnalysis: {
      scientificHarm: "Misled entire surgical and tissue engineering fields, causing other medical teams to attempt dangerous replicate procedures on terminal patients.",
      societalImpact: "Catastrophic loss of human life, profound betrayal of patient vulnerability, and generational collapse of institutional trust in clinical trials.",
      harmScore: 100
    },
    caseStudy: {
      name: "Paolo Macchiarini (Karolinska Institute)",
      retractionCount: 11,
      summary: "Macchiarini implanted synthetic polymer tracheas seeded with stem cells into patients, fabricating success in The Lancet while patients died from severe complications. Convicted of gross bodily harm in Sweden.",
      retractionWatchTag: "macchiarini-trachea-scandal"
    }
  },
  {
    id: "unapproved-germline-gene-editing",
    name: "Unapproved Human Germline Genome Editing",
    category: "ResearchEthics",
    categoryLabel: "Human & Animal Research Ethics",
    severityTier: "catastrophic",
    delictType: "criminal_academic",
    scenario: "A biophysicist secretly recruited couples from an HIV support group and used CRISPR-Cas9 to edit embryos to disable the CCR5 gene, implanting them without legitimate institutional ethics approval, resulting in the birth of genetically altered twins with uncharacterized off-target mutations.",
    standardCitation: "UNESCO Universal Declaration on Human Genome & National Biosafety Acts",
    standardText: "Human germline modifications carry irreversible hereditary risks for future generations. All research involving human embryos must obtain rigorous independent ethical oversight and comply with strict statutory bans on clinical implantation.",
    statutoryBenchmark: "Criminal Imprisonment, Permanent Institutional Dismissal & Global Debarment",
    sanctionStats: {
      severeSanctionsPct: 95,
      moderateSanctionsPct: 5,
      minorSanctionsPct: 0,
      avgDebarmentYears: 12,
      avgSentenceDescription: "Criminal prosecution under statutory biosafety laws resulting in multi-year prison sentences and lifelong disqualification from biological research."
    },
    harmAnalysis: {
      scientificHarm: "Introduced unverified off-target genomic alterations into the human germline, setting back legitimate therapeutic gene editing oversight by decades.",
      societalImpact: "Crossed a foundational international bioethical red line without societal consent or clinical justification.",
      harmScore: 98
    },
    caseStudy: {
      name: "He Jiankui (Southern University of Science and Technology)",
      retractionCount: 3,
      summary: "Created the world's first gene-edited babies (Lulu and Nana). Sentenced to 3 years in prison by a Chinese court for illegal medical practice and fined 3 million RMB.",
      retractionWatchTag: "crispr-babies-he-jiankui"
    }
  },
  {
    id: "systemic-western-blot-fabrication",
    name: "Systematic Biomedical Image & Blot Falsification",
    category: "FFP",
    categoryLabel: "Data Fabrication & Falsification",
    severityTier: "catastrophic",
    delictType: "research_misconduct",
    scenario: "A lead neuroscientist systematically copy-pasted, spliced, and contrast-enhanced Western blot protein bands across dozens of high-impact papers to manufacture artificial evidence that a specific amyloid oligomer (Aβ*56) directly caused Alzheimer's memory impairment.",
    standardCitation: "US ORI 42 CFR § 93.103 & NIH Scientific Integrity Policy",
    standardText: "Falsification is manipulating research materials, equipment, or processes, or changing or omitting data or results such that the research is not accurately represented in the research record.",
    statutoryBenchmark: "Retraction of High-Impact Papers, Loss of NIH Grants, Tenured Chair Termination",
    sanctionStats: {
      severeSanctionsPct: 88,
      moderateSanctionsPct: 10,
      minorSanctionsPct: 2,
      avgDebarmentYears: 8,
      avgSentenceDescription: "ORI debarment from federal funding (5-10 years), mandatory retraction of all tainted publications, termination of tenured appointments, and closure of the research laboratory."
    },
    harmAnalysis: {
      scientificHarm: "Wasted hundreds of millions of research dollars and 16 years of international drug discovery efforts chasing a non-existent biological target.",
      societalImpact: "Delayed genuine Alzheimer's therapeutics for millions of suffering patients while consuming hundreds of PhD student-years on false premises.",
      harmScore: 95
    },
    caseStudy: {
      name: "Sylvain Lesné / Karen Ashe (Nature 2006 Aβ*56 Paper)",
      retractionCount: 8,
      summary: "Investigation by Science revealed dozens of manipulated image panels in seminal Alzheimer's papers cited over 2,500 times, sparking international re-evaluations by NIH and journals.",
      retractionWatchTag: "alzheimers-image-manipulation"
    }
  },
  {
    id: "complete-synthetic-dataset-fabrication",
    name: "Total Synthetic Dataset & Experiment Invention",
    category: "FFP",
    categoryLabel: "Data Fabrication & Falsification",
    severityTier: "catastrophic",
    delictType: "research_misconduct",
    scenario: "A social psychology dean never conducted his alleged field experiments; instead, he spent years sitting in his office typing fictional numbers into SPSS spreadsheets, inventing surveys of thousands of fictitious high school students and consumers to produce dozens of headline-grabbing papers.",
    standardCitation: "ALLEA European Code of Conduct § 3.1 & DFG Research Integrity Guidelines",
    standardText: "Fabrication is making up results and recording them as if they were real. It constitutes the most egregious violation of the social contract between science and society.",
    statutoryBenchmark: "Revocation of Doctorate Degree, Immediate Termination & Criminal Fraud Settlement",
    sanctionStats: {
      severeSanctionsPct: 92,
      moderateSanctionsPct: 8,
      minorSanctionsPct: 0,
      avgDebarmentYears: 10,
      avgSentenceDescription: "Total career termination: revocation of PhD degree by the granting university, mass retraction of 58+ papers, and voluntary return of academic honors."
    },
    harmAnalysis: {
      scientificHarm: "Poisoned the foundational literature on social psychology, stereotyping, and behavioral decision-making for over a decade.",
      societalImpact: "Devastated the careers of dozens of innocent PhD students and postdocs whose dissertations were based on fabricated data provided by the dean.",
      harmScore: 93
    },
    caseStudy: {
      name: "Diederik Stapel (Tilburg University)",
      retractionCount: 58,
      summary: "Stapel admitted to fabricating data for at least 55 publications and book chapters. He surrendered his PhD degree to the University of Amsterdam and completed 120 hours of community service.",
      retractionWatchTag: "diederik-stapel-fabrication"
    }
  },
  {
    id: "cardiac-stem-cell-fabrication",
    name: "Mass Fabrication of Regenerative Cell Lineage",
    category: "FFP",
    categoryLabel: "Data Fabrication & Falsification",
    severityTier: "catastrophic",
    delictType: "research_misconduct",
    scenario: "A Harvard medical professor claimed that c-kit+ cardiac stem cells could regenerate damaged human heart tissue, fabricating laboratory assays and animal survival metrics across 31 papers, prompting government-funded human clinical trials based on nonexistent cellular biology.",
    standardCitation: "US False Claims Act 31 U.S.C. § 3729 & HHS Misconduct Findings",
    standardText: "Falsifying data in applications for federal research grants violates the False Claims Act, exposing institutions to multi-million dollar treble damage civil liability.",
    statutoryBenchmark: "10-Million Dollar Institutional Settlement, 31 Retractions & Laboratory Dissolution",
    sanctionStats: {
      severeSanctionsPct: 90,
      moderateSanctionsPct: 8,
      minorSanctionsPct: 2,
      avgDebarmentYears: 7,
      avgSentenceDescription: "Harvard Medical School and Brigham and Women's Hospital agreed to pay $10 million to the US government to settle allegations of fraudulent NIH grant applications."
    },
    harmAnalysis: {
      scientificHarm: "Misdirected billions in cardiac regeneration funding worldwide and subjected heart failure patients to unnecessary bone marrow biopsies.",
      societalImpact: "Massive waste of federal taxpayer funds and severe reputational damage to premier biomedical research institutions.",
      harmScore: 94
    },
    caseStudy: {
      name: "Piero Anversa (Harvard / Brigham and Women's)",
      retractionCount: 31,
      summary: "Anversa's claims of cardiac stem cell regeneration collapsed after internal investigations found extensive data falsification across 31 papers and NIH grant filings.",
      retractionWatchTag: "anversa-cardiac-stem-cells"
    }
  },
  {
    id: "unauthorized-biosecurity-gain-of-function",
    name: "Unauthorized Biosafety & Gain-of-Function Breach",
    category: "ResearchEthics",
    categoryLabel: "Human & Animal Research Ethics",
    severityTier: "catastrophic",
    delictType: "criminal_academic",
    scenario: "A virology team performed gain-of-function genetic enhancements on an aerosolized avian influenza strain to increase human mammal transmissibility in a standard BSL-2 laboratory, completely evading institutional biosafety committee (IBC) review and dual-use oversight.",
    standardCitation: "US Dual Use Research of Concern (DURC) Framework & Biological Weapons Convention",
    standardText: "Enhancing the lethality or transmissibility of potential pandemic pathogens without strict biocontainment and federal oversight presents catastrophic global biological risks.",
    statutoryBenchmark: "Federal Biosecurity Injunction, Complete Laboratory Sealing & Criminal Investigation",
    sanctionStats: {
      severeSanctionsPct: 96,
      moderateSanctionsPct: 4,
      minorSanctionsPct: 0,
      avgDebarmentYears: 12,
      avgSentenceDescription: "FBI/homeland security investigation, immediate sealing of laboratory facilities, permanent revocation of biological permits, and criminal prosecution."
    },
    harmAnalysis: {
      scientificHarm: "Risk of accidental lab leak triggering an untreatable synthetic pathogen pandemic.",
      societalImpact: "Existential public health risk to global populations and severe disruption of legitimate virological surveillance.",
      harmScore: 99
    },
    caseStudy: {
      name: "Gain-of-Function & BSL-3 Safety Breaches (CDC / NIH Audits)",
      retractionCount: 1,
      summary: "Congressional investigations and federal audits have repeatedly halted high-risk pathogen research following unauthorized lab transfers and protocol evasions.",
      retractionWatchTag: "biosecurity-durc-breaches"
    }
  },
  {
    id: "active-lab-sample-sabotage",
    name: "Physical Laboratory & Sample Sabotage",
    category: "GrantGovernance",
    categoryLabel: "Grant Governance & Lab Sabotage",
    severityTier: "severe",
    delictType: "criminal_academic",
    scenario: "A postdoctoral fellow, jealous of a colleague's rapid progress on cancer drug screening, secretly poured toxic sodium dodecyl sulfate into her cell culture media and unplugged the laboratory's -80°C biobank freezer, destroying six years of irreplaceable patient biopsy specimens.",
    standardCitation: "Criminal Code (Malicious Destruction of Property) & University Disciplinary Code",
    standardText: "Intentional destruction or contamination of biological samples, research apparatus, or primary data constitutes criminal vandalism and reckless scientific sabotage.",
    statutoryBenchmark: "Criminal Conviction, Restitution Payment, Immediate Dismissal & Lifetime Lab Ban",
    sanctionStats: {
      severeSanctionsPct: 94,
      moderateSanctionsPct: 6,
      minorSanctionsPct: 0,
      avgDebarmentYears: 10,
      avgSentenceDescription: "Police arrest, criminal court conviction for malicious destruction of property, mandatory restitution for destroyed reagents ($50k-$200k), and expulsion/firing."
    },
    harmAnalysis: {
      scientificHarm: "Irrevocable destruction of unique patient tissues and longitudinal experimental time-series that took years to cultivate.",
      societalImpact: "Toxic and terrifying lab environment, severe psychological trauma for the victim researcher, and direct financial loss to the institution.",
      harmScore: 89
    },
    caseStudy: {
      name: "University of Michigan Cancer Lab Sabotage Case",
      retractionCount: 0,
      summary: "A researcher was caught on hidden surveillance camera poisoning a colleague's cell culture bottles with ethanol and detergent. Sentenced to probation and ordered to pay restitution.",
      retractionWatchTag: "laboratory-sabotage"
    }
  },
  {
    id: "commercial-paper-mill-purchasing",
    name: "Commercial Paper Mill Manuscript & Authorship Purchase",
    category: "PublicationFraud",
    categoryLabel: "Publication & Peer Review Fraud",
    severityTier: "severe",
    delictType: "research_misconduct",
    scenario: "A clinical department head seeking promotion paid $3,500 to an underground paper mill brokerage to secure first-author placement on a completely AI-generated, synthetic medical study with fabricated patient charts and bought acceptance in a special issue journal.",
    standardCitation: "COPE Guidelines on Systematic Manipulation of the Publication Process",
    standardText: "Paper mills are profit-oriented organizations producing and selling fraudulent manuscripts that resemble genuine research. Involvement in paper mill author slots constitutes deliberate scientific deception.",
    statutoryBenchmark: "Paper Retraction, Demotion / Contract Termination & Ineligibility for Promotion",
    sanctionStats: {
      severeSanctionsPct: 75,
      moderateSanctionsPct: 22,
      minorSanctionsPct: 3,
      avgDebarmentYears: 4,
      avgSentenceDescription: "Mass retractions (tens of thousands of papers across major publishers like Hindawi/Wiley/Springer), university disciplinary investigation, demotion, or dismissal."
    },
    harmAnalysis: {
      scientificHarm: "Floods the global literature with garbage synthetic claims that distort meta-analyses and downstream clinical syntheses.",
      societalImpact: "Unqualified clinicians obtaining senior medical promotions based on fake research, directly endangering hospital patients.",
      harmScore: 83
    },
    caseStudy: {
      name: "Hindawi / Wiley 11,000+ Paper Mill Retraction Wave",
      retractionCount: 11300,
      summary: "Publishers retracted over 11,000 papers and shut down 19 journals after uncovering coordinated paper mill operations selling authorship and manipulated peer reviews in special issues.",
      retractionWatchTag: "paper-mills-hindawi"
    }
  },
  {
    id: "fake-peer-review-ring",
    name: "Fabricated Peer Review Ring & Identity Fraud",
    category: "PublicationFraud",
    categoryLabel: "Publication & Peer Review Fraud",
    severityTier: "severe",
    delictType: "research_misconduct",
    scenario: "An author created dozens of bogus email accounts under the names of famous professors in his field. When submitting 28 manuscripts, he suggested these fabricated emails as 'expert independent reviewers' and logged into the accounts to write glowing peer review reports approving his own papers within 24 hours.",
    standardCitation: "COPE Ethical Guidelines for Peer Reviewers & Publisher Fraud Protocols",
    standardText: "Impersonating peer reviewers or manipulating editor recommendations through forged identities subverts the fundamental gatekeeping mechanism of modern science.",
    statutoryBenchmark: "Mass Paper Retraction, Publisher Blacklisting & Faculty Dismissal",
    sanctionStats: {
      severeSanctionsPct: 78,
      moderateSanctionsPct: 20,
      minorSanctionsPct: 2,
      avgDebarmentYears: 5,
      avgSentenceDescription: "Retraction of all accepted papers, permanent ban from publishing in or reviewing for the affected journal families, and formal institutional misconduct sanction."
    },
    harmAnalysis: {
      scientificHarm: "Completely bypassed independent peer evaluation, publishing flawed and unverified methodologies as peer-reviewed science.",
      societalImpact: "Subverted the integrity of the scientific validation process, wasting reviewer and editorial resources globally.",
      harmScore: 81
    },
    caseStudy: {
      name: "Hyung-In Moon (Dongguk University)",
      retractionCount: 35,
      summary: "Moon admitted to creating fake reviewer accounts with Yahoo and Gmail addresses to review his own manuscripts. Springer, Informa, and Elsevier retracted over 35 of his papers.",
      retractionWatchTag: "fake-peer-review-ring"
    }
  },
  {
    id: "federal-grant-fund-embezzlement",
    name: "Embezzlement & Kickbacks of Federal Research Grants",
    category: "GrantGovernance",
    categoryLabel: "Grant Governance & Lab Sabotage",
    severityTier: "severe",
    delictType: "criminal_academic",
    scenario: "A principal investigator diverted $1.2 million in NIH and EU Horizon research grant funds into personal shell companies by filing fictitious invoices for high-end spectrometers, using the funds for luxury family vacations and luxury real estate down-payments.",
    standardCitation: "US Federal False Claims Act & EU Anti-Fraud Office (OLAF) Regulations",
    standardText: "Grant funds are held in public trust exclusively for authorized direct and indirect scientific research expenditures. Misappropriation of grant funding constitutes federal criminal fraud.",
    statutoryBenchmark: "Federal Prison Sentence (1-5 Years), Full Restitution & Lifetime Grant Debarment",
    sanctionStats: {
      severeSanctionsPct: 94,
      moderateSanctionsPct: 6,
      minorSanctionsPct: 0,
      avgDebarmentYears: 10,
      avgSentenceDescription: "Criminal prosecution for wire fraud/theft of government funds, 18-36 months in federal prison, treble civil damages, and lifetime debarment from receiving public grants."
    },
    harmAnalysis: {
      scientificHarm: "Starved legitimate lab research of resources, leaving promising experimental leads abandoned and trainees unpaid.",
      societalImpact: "Direct theft of public taxpayer dollars allocated for combating life-threatening diseases.",
      harmScore: 87
    },
    caseStudy: {
      name: "Columbia University / NIH Grant Fraud Prosecutions",
      retractionCount: 2,
      summary: "Multiple PIs across major universities have faced federal prison sentences and millions in restitution after federal audits uncovered bogus subcontracting and personal kickbacks.",
      retractionWatchTag: "grant-fraud-prosecution"
    }
  },
  {
    id: "undisclosed-pharma-financial-coi",
    name: "High-Stakes Undisclosed Pharmaceutical Conflict of Interest",
    category: "GrantGovernance",
    categoryLabel: "Grant Governance & Lab Sabotage",
    severityTier: "severe",
    delictType: "ethics_violation",
    scenario: "A world-renowned oncology leader published glowing clinical trial results and authored clinical practice guidelines endorsing a $150,000/year cancer drug in NEJM and Lancet, hiding that he had received over $3.5 million in personal consulting fees and equity options from the manufacturer.",
    standardCitation: "ICMJE Disclosure of Financial and Non-Financial Relationships and Activities",
    standardText: "Authors must disclose all relationships and activities that could be viewed as potential conflicts of interest. Financial ties to commercial sponsors of tested therapies must be fully and transparently declared.",
    statutoryBenchmark: "Forced Resignation from Hospital / Institute Directorship & Mandatory Corrections",
    sanctionStats: {
      severeSanctionsPct: 68,
      moderateSanctionsPct: 28,
      minorSanctionsPct: 4,
      avgDebarmentYears: 3,
      avgSentenceDescription: "Immediate forced resignation from institutional leadership and clinical directorships; public corrections in dozens of medical journals."
    },
    harmAnalysis: {
      scientificHarm: "Skewed clinical perception of therapeutic efficacy and minimized dangerous drug toxicity profiles in widely adopted guidelines.",
      societalImpact: "Cancer patients prescribed excessively costly or suboptimal regimens due to commercially biased clinical recommendations.",
      harmScore: 78
    },
    caseStudy: {
      name: "José Baselga (Memorial Sloan Kettering Cancer Center)",
      retractionCount: 0,
      summary: "The chief medical officer of MSKCC resigned after a ProPublica / NYT investigation revealed he failed to disclose millions in payments from pharma companies in dozens of articles in NEJM and Lancet.",
      retractionWatchTag: "undisclosed-conflict-of-interest"
    }
  },
  {
    id: "reviewer-idea-theft-scoop",
    name: "Reviewer Idea Theft & Proposal Scooping",
    category: "PlagiarismAuthorship",
    categoryLabel: "Plagiarism & Authorship Ethics",
    severityTier: "severe",
    delictType: "research_misconduct",
    scenario: "An expert peer reviewer evaluating an unpublished breakthrough grant proposal rejected the application with unjustified harsh criticism, while secretly handing the novel catalytic reaction design to his own PhD students, rushing their own identical paper into print six months later.",
    standardCitation: "NIH Confidentiality Agreement for Reviewers & ORI Reviewer Integrity Standards",
    standardText: "Reviewers must treat manuscripts and grant proposals as privileged, strictly confidential communications. Appropriating ideas, experimental designs, or unpublished findings from a reviewed proposal is grave intellectual theft.",
    statutoryBenchmark: "Permanent Debarment from Grant Review Panels, Retraction of Scooped Paper & Reprimand",
    sanctionStats: {
      severeSanctionsPct: 72,
      moderateSanctionsPct: 24,
      minorSanctionsPct: 4,
      avgDebarmentYears: 5,
      avgSentenceDescription: "ORI finding of research misconduct, retraction of the stolen publication, permanent exclusion from government review panels, and institutional disciplinary censure."
    },
    harmAnalysis: {
      scientificHarm: "Destroys the foundational trust required for confidential peer review and grant evaluation systems.",
      societalImpact: "Victimized junior researchers who originated the concept lose funding, career momentum, and priority credit.",
      harmScore: 76
    },
    caseStudy: {
      name: "ORI Findings of Confidential Reviewer Proposal Theft",
      retractionCount: 4,
      summary: "ORI documented cases where senior scientists reviewed NIH R01 applications and directly copied hypotheses and methodologies into their own subsequent grant submissions and lab papers.",
      retractionWatchTag: "reviewer-misconduct-scooping"
    }
  },
  {
    id: "severe-animal-welfare-protocol-breach",
    name: "Severe Animal Welfare & Surgical Protocol Violations",
    category: "ResearchEthics",
    categoryLabel: "Human & Animal Research Ethics",
    severityTier: "severe",
    delictType: "regulatory_breach",
    scenario: "A neuroscience laboratory performed craniotomies and spinal cord transections on hundreds of primates and dogs without administering required post-surgical analgesia to cut costs, hiding the extreme distress and doubling animal mortality numbers from the university IACUC oversight committee.",
    standardCitation: "US Animal Welfare Act 7 U.S.C. § 2131 & Guide for Care and Use of Laboratory Animals",
    standardText: "Research involving animals must minimize distress and pain through mandated anesthesia and humane endpoints. Falsifying welfare records or bypassing IACUC approved limits constitutes severe federal violation.",
    statutoryBenchmark: "Suspension of Animal Facility Accreditation, Federal USDA Fines & Protocol Termination",
    sanctionStats: {
      severeSanctionsPct: 70,
      moderateSanctionsPct: 26,
      minorSanctionsPct: 4,
      avgDebarmentYears: 4,
      avgSentenceDescription: "Revocation of animal research protocols, USDA civil penalties ($100k+), mandatory retraining, and institutional suspension of lab operations."
    },
    harmAnalysis: {
      scientificHarm: "Uncontrolled pain and systemic distress introduce confounding stress hormones that invalidate neurophysiological findings.",
      societalImpact: "Extreme, gratuitous suffering of sentient animals and violation of the ethical social license granted to biomedical research.",
      harmScore: 75
    },
    caseStudy: {
      name: "USDA / NIH Enforcement Against University Primate Facilities",
      retractionCount: 2,
      summary: "Major research universities have faced six-figure federal fines and mandatory shutdowns of primate facilities following undercover documentation of unapproved surgical suffering.",
      retractionWatchTag: "animal-welfare-violations"
    }
  },
  {
    id: "unconsented-indigenous-genomic-harvesting",
    name: "Unconsented Indigenous Genomic & Biopiracy Harvesting",
    category: "ResearchEthics",
    categoryLabel: "Human & Animal Research Ethics",
    severityTier: "severe",
    delictType: "ethics_violation",
    scenario: "Geneticists collected blood samples from an isolated indigenous tribe under the pretext of diabetes health screenings, but subsequently sequenced and commercialized the complete tribal genome without tribal council consent or benefit-sharing agreements.",
    standardCitation: "Nagoya Protocol on Access and Benefit-Sharing & UN Declaration on the Rights of Indigenous Peoples",
    standardText: "Genomic research with indigenous communities requires collective free, prior, and informed consent (FPIC), cultural sensitivity, and equitable benefit sharing.",
    statutoryBenchmark: "Federal Injunction, Return of Biological Samples, Financial Settlement & Ban",
    sanctionStats: {
      severeSanctionsPct: 60,
      moderateSanctionsPct: 35,
      minorSanctionsPct: 5,
      avgDebarmentYears: 3,
      avgSentenceDescription: "Court injunction mandating destruction/return of DNA samples, multi-million dollar institutional settlement, and formal ethics sanctions."
    },
    harmAnalysis: {
      scientificHarm: "Destroys trust in biomedical research among vulnerable populations, resulting in boycott of critical genetic epidemiology initiatives.",
      societalImpact: "Exploitation and biopiracy targeting marginalized historical communities.",
      harmScore: 74
    },
    caseStudy: {
      name: "Havasupai Tribe vs. Arizona Board of Regents",
      retractionCount: 0,
      summary: "The Havasupai Tribe sued Arizona State University after blood samples donated for diabetes research were used for unauthorized schizophrenia, inbreeding, and migration studies.",
      retractionWatchTag: "biopiracy-indigenous-genomics"
    }
  },
  {
    id: "whistleblower-retaliation-extortion",
    name: "Whistleblower Retaliation & Mentorship Extortion",
    category: "GrantGovernance",
    categoryLabel: "Grant Governance & Lab Sabotage",
    severityTier: "severe",
    delictType: "ethics_violation",
    scenario: "When a PhD student uncovered fabricated calibration curves in the lab's primary paper and refused to co-sign the manuscript, the lab director threatened to cancel the student's F-1 visa sponsorship, stripped her authorship on prior legitimate papers, and expelled her from the department.",
    standardCitation: "US Office of Research Integrity Whistleblower Protection Standards & Title IX / Labor Law",
    standardText: "Institutions and PIs are strictly prohibited from retaliating against individuals who make good faith allegations of research misconduct. Protecting the reporting pipeline is critical to scientific self-correction.",
    statutoryBenchmark: "Stripping of Mentorship Rights, Departmental Removal & Civil Liability",
    sanctionStats: {
      severeSanctionsPct: 65,
      moderateSanctionsPct: 30,
      minorSanctionsPct: 5,
      avgDebarmentYears: 3,
      avgSentenceDescription: "PI stripped of supervisory privileges over graduate students and postdocs, formal university reprimand, and substantial confidential financial settlement for retaliatory harm."
    },
    harmAnalysis: {
      scientificHarm: "Enforces a culture of silence where fraudulent research propagates unchecked because junior researchers fear career destruction.",
      societalImpact: "Abuse of extreme power imbalances, mental health breakdown of trainees, and wrongful deportation threats against international scholars.",
      harmScore: 73
    },
    caseStudy: {
      name: "Salk Institute & UC Whistleblower Retaliation Cases",
      retractionCount: 1,
      summary: "Independent audits repeatedly reveal severe retaliation against graduate students reporting data manipulation, leading to major university policy reforms and financial damages.",
      retractionWatchTag: "whistleblower-retaliation"
    }
  },
  {
    id: "cv-credential-fabrication-grants",
    name: "CV Credential & Publication Record Falsification",
    category: "GrantGovernance",
    categoryLabel: "Grant Governance & Lab Sabotage",
    severityTier: "severe",
    delictType: "research_misconduct",
    scenario: "An applicant for a $2.5 million senior ERC/NIH research grant falsely listed five non-existent first-author publications in Nature and Science on his biosketch, forging DOIs that redirected to completely unrelated articles to pass administrative screening.",
    standardCitation: "US ORI & ERC Scientific Integrity Policy on Grant Applications",
    standardText: "Falsifying curriculum vitae, publications, or credentials in grant applications or employment dossiers constitutes fraudulent misrepresentation.",
    statutoryBenchmark: "Grant Application Disqualification, Multi-Year Debarment & Employment Termination",
    sanctionStats: {
      severeSanctionsPct: 82,
      moderateSanctionsPct: 15,
      minorSanctionsPct: 3,
      avgDebarmentYears: 5,
      avgSentenceDescription: "Immediate disqualification of the application, 3-5 year federal grant debarment, and termination of academic employment for gross dishonesty."
    },
    harmAnalysis: {
      scientificHarm: "Diverts scarce scientific resources away from legitimate, accomplished researchers.",
      societalImpact: "Rewards brazen fraud and damages the meritocratic integrity of competitive peer-reviewed funding.",
      harmScore: 77
    },
    caseStudy: {
      name: "ORI Findings of Fabricated Grant Biosketches and Fake DOIs",
      retractionCount: 1,
      summary: "Federal oversight bodies have formally debarred multiple PIs after automated cross-checks caught fabricated publication lists in R01 and career development grant filings.",
      retractionWatchTag: "grant-cv-fabrication"
    }
  },
  {
    id: "verbatim-dissertation-plagiarism",
    name: "Systematic Verbatim Ph.D. Dissertation Plagiarism",
    category: "PlagiarismAuthorship",
    categoryLabel: "Plagiarism & Authorship Ethics",
    severityTier: "moderate",
    delictType: "academic_plagiarism",
    scenario: "A prominent government official and researcher copy-pasted over 70% of his doctoral dissertation verbatim from existing journal articles, think-tank reports, and Wikipedia without quotation marks or attribution, submitting it as original scholarly contribution.",
    standardCitation: "University Academic Integrity Code & Higher Education Disciplinary Acts",
    standardText: "Plagiarism is the appropriation of another person's ideas, processes, results, or words without giving appropriate credit. Academic degrees require authentic, original scholarship.",
    statutoryBenchmark: "Retroactive Revocation of Doctoral Degree & Resignation from Public Office",
    sanctionStats: {
      severeSanctionsPct: 62,
      moderateSanctionsPct: 33,
      minorSanctionsPct: 5,
      avgDebarmentYears: 0,
      avgSentenceDescription: "Formal university investigation leading to the permanent revocation of the awarded Ph.D. or Master's degree, loss of academic titles, and resignation from high office."
    },
    harmAnalysis: {
      scientificHarm: "Contributes zero original knowledge while devaluing the integrity of the university's highest academic credential.",
      societalImpact: "Erosion of meritocracy; undeserved career advancement in political, academic, and industrial leadership.",
      harmScore: 68
    },
    caseStudy: {
      name: "Karl-Theodor zu Guttenberg / Annette Schavan Scandals",
      retractionCount: 1,
      summary: "The German Defense Minister and later the Education Minister were both stripped of their doctoral titles by the Universities of Bayreuth and Düsseldorf after VroniPlag crowd-sourced proof of massive plagiarism.",
      retractionWatchTag: "vroniplag-dissertation-plagiarism"
    }
  },
  {
    id: "ghost-authorship-commercial-influence",
    name: "Pharma Ghost Authorship & Commercial Narrative Control",
    category: "PlagiarismAuthorship",
    categoryLabel: "Plagiarism & Authorship Ethics",
    severityTier: "moderate",
    delictType: "authorship_misconduct",
    scenario: "A pharmaceutical manufacturer's marketing writers drafted a full clinical review downplaying cardiovascular risks of an anti-inflammatory drug, paid $25,000 to two prominent academic rheumatologists who performed no writing, and submitted the paper without disclosing commercial authorship.",
    standardCitation: "Good Publication Practice (GPP3) & WAME Policy on Ghost Authorship",
    standardText: "Ghostwriting by industry sponsors violates transparency. All professional medical writers and financial support must be acknowledged, and academic authors must have full access to raw study data.",
    statutoryBenchmark: "Public Congressional Inquiries, Institutional Sanction & Mandatory Retractions",
    sanctionStats: {
      severeSanctionsPct: 52,
      moderateSanctionsPct: 40,
      minorSanctionsPct: 8,
      avgDebarmentYears: 2,
      avgSentenceDescription: "Senate and congressional investigative hearings, journal corrections/retractions, and institutional ethics review for participating faculty."
    },
    harmAnalysis: {
      scientificHarm: "Disguises commercial marketing brochures as objective, peer-reviewed medical consensus literature.",
      societalImpact: "Patients exposed to underreported fatal cardiac events (e.g. Vioxx scandal) due to whitewashed clinical literature.",
      harmScore: 66
    },
    caseStudy: {
      name: "Merck Vioxx / Wyeth HRT Ghostwriting Scandals",
      retractionCount: 6,
      summary: "Legal discovery in class-action lawsuits revealed that over 50% of published trial reviews were ghostwritten by medical communication agencies hired by pharmaceutical companies.",
      retractionWatchTag: "ghostwriting-vioxx"
    }
  },
  {
    id: "citation-cartel-coercive-citation",
    name: "Citation Cartel & Coercive Journal Editor Citation",
    category: "PublicationFraud",
    categoryLabel: "Publication & Peer Review Fraud",
    severityTier: "moderate",
    delictType: "publication_manipulation",
    scenario: "A journal editor-in-chief and a network of 12 allied professors conditioned manuscript acceptance on authors adding at least 25 irrelevant citations to the editor's personal papers and the cartel's journal, artificially skyrocketing the journal's Impact Factor from 1.8 to 9.2.",
    standardCitation: "Clarivate Web of Science Journal Evaluation Criteria & COPE Editor Guidelines",
    standardText: "Coercive citation by editors or reviewers is unethical manipulation of citation metrics. Editors must not condition acceptance on self-citations that are not academically warranted.",
    statutoryBenchmark: "Journal Suppressed from Journal Citation Reports (JCR) / Scopus & Editor Firing",
    sanctionStats: {
      severeSanctionsPct: 55,
      moderateSanctionsPct: 38,
      minorSanctionsPct: 7,
      avgDebarmentYears: 2,
      avgSentenceDescription: "Clarivate suppresses the journal from Web of Science (losing its Impact Factor); publisher terminates the editor-in-chief's contract."
    },
    harmAnalysis: {
      scientificHarm: "Severely corrupts citation bibliometrics, algorithmic search indices, and literature discovery algorithms.",
      societalImpact: "Distorts institutional hiring and grant funding decisions that rely on inflated citation counts and fake high-impact journal metrics.",
      harmScore: 64
    },
    caseStudy: {
      name: "Clarivate Annual JCR Metric Suppression Wave",
      retractionCount: 0,
      summary: "Every year, Clarivate suppresses 20-30 prominent journals from the Journal Citation Reports due to extreme anomalous citation stacking and cartel behaviors.",
      retractionWatchTag: "citation-cartels-suppression"
    }
  },
  {
    id: "coercive-gift-authorship-extortion",
    name: "Coercive Gift & Parasitic Departmental Authorship",
    category: "PlagiarismAuthorship",
    categoryLabel: "Plagiarism & Authorship Ethics",
    severityTier: "moderate",
    delictType: "authorship_misconduct",
    scenario: "A powerful institute director mandated an internal lab policy requiring his name to be listed as senior corresponding author on every single paper published by junior faculty and postdocs, despite having never read the manuscripts or participated in the experimental designs.",
    standardCitation: "ICMJE Criteria for Authorship & COPE Authorship Disputes Protocol",
    standardText: "Authorship requires substantial contributions to conception/design or data acquisition, drafting/revising the article, final approval, and accountability for all aspects of the work. Holding an administrative position or providing lab space does not justify authorship.",
    statutoryBenchmark: "Ethical Censure, Removal from Institute Directorship & Forced Authorship Corrections",
    sanctionStats: {
      severeSanctionsPct: 42,
      moderateSanctionsPct: 48,
      minorSanctionsPct: 10,
      avgDebarmentYears: 1,
      avgSentenceDescription: "Institutional ethics reprimand, requirement to publish formal authorship corrections (corrigenda), and loss of executive lab leadership roles."
    },
    harmAnalysis: {
      scientificHarm: "Obscures actual scientific accountability; if errors occur, the nominal senior author has no genuine understanding of the underlying data.",
      societalImpact: "Feudalistic academic exploitation where early-career researchers do the intellectual heavy lifting while administrators hoard scientific capital.",
      harmScore: 61
    },
    caseStudy: {
      name: "Hyperprolific Authors / Paper-a-Week Scandals",
      retractionCount: 5,
      summary: "Studies in Nature revealed dozens of department heads publishing a paper every 5 to 10 days by coercing honorary authorship on all department output.",
      retractionWatchTag: "hyperprolific-gift-authorship"
    }
  },
  {
    id: "aggressive-p-hacking-harking",
    name: "Aggressive P-Hacking & Selective Outcome Reporting",
    category: "FFP",
    categoryLabel: "Data Fabrication & Falsification",
    severityTier: "moderate",
    delictType: "questionable_research_practice",
    scenario: "A behavioral nutrition researcher tested 84 different post-hoc food variables across a small cohort until finding two random spurious correlations (p = 0.041), framed these as pre-planned confirmatory hypotheses in a sensational paper ('eating apples cures depression'), and buried the 82 null results.",
    standardCitation: "American Statistical Association (ASA) Statement on P-Values & Open Science Standards",
    standardText: "P-hacking, data dredging, and HARKing (Hypothesizing After Results are Known) without preregistration or multiplicity correction produce false-positive artifacts masquerading as robust scientific findings.",
    statutoryBenchmark: "Multiple Paper Retractions, Loss of Faculty Directorship & Mandatory Audit",
    sanctionStats: {
      severeSanctionsPct: 48,
      moderateSanctionsPct: 42,
      minorSanctionsPct: 10,
      avgDebarmentYears: 2,
      avgSentenceDescription: "Retraction of numerous papers (15+), university committee finding of questionable research practices, and resignation from tenured directorship."
    },
    harmAnalysis: {
      scientificHarm: "Creates sensational, irreproducible 'headline science' that clutters dietary and psychological literature with statistical noise.",
      societalImpact: "Misleads public health guidelines, consumer dietary choices, and causes deep public cynicism toward nutrition and social sciences.",
      harmScore: 59
    },
    caseStudy: {
      name: "Brian Wansink (Cornell Food and Brand Lab)",
      retractionCount: 18,
      summary: "Cornell University found Wansink guilty of scientific misconduct for extensive p-hacking, data dredging, and dubious statistical methods across 18 retracted papers.",
      retractionWatchTag: "brian-wansink-p-hacking"
    }
  },
  {
    id: "predatory-journal-hijacking-fraud",
    name: "Hijacked Journal & Clone Website Publication Fraud",
    category: "PublicationFraud",
    categoryLabel: "Publication & Peer Review Fraud",
    severityTier: "moderate",
    delictType: "publication_manipulation",
    scenario: "Fraudsters registered an expired domain name of a legitimate Swiss academic journal indexed in Scopus, cloned the editorial board layout, and charged authors $800 each to publish 1,500 unreviewed papers per month while deceiving university promotion committees.",
    standardCitation: "COPE Principles of Transparency and Best Practice in Scholarly Publishing",
    standardText: "Hijacked journals engage in fraudulent impersonation of established titles to solicit article processing charges without legitimate peer review.",
    statutoryBenchmark: "Domain Seizure, De-indexing from Scopus/Web of Science & Nullification of Credentials",
    sanctionStats: {
      severeSanctionsPct: 45,
      moderateSanctionsPct: 45,
      minorSanctionsPct: 10,
      avgDebarmentYears: 1,
      avgSentenceDescription: "Immediate delisting from major bibliographic databases, ICANN domain disputes, and refusal of academic institutions to recognize publications for graduation."
    },
    harmAnalysis: {
      scientificHarm: "Legitimizes pseudo-science by presenting unreviewed papers under the guise of an established indexed journal.",
      societalImpact: "Extorts money from desperate early-career researchers and degrades the reliability of citation databases.",
      harmScore: 56
    },
    caseStudy: {
      name: "Retraction Watch Hijacked Journal Checker",
      retractionCount: 0,
      summary: "Retraction Watch and the Cabells database maintain lists of hundreds of hijacked journals actively harvesting millions of dollars in fraudulent publication fees.",
      retractionWatchTag: "hijacked-journals"
    }
  },
  {
    id: "unconsented-forged-coauthorship",
    name: "Forged Signatures & Unconsented Co-Authorship",
    category: "PlagiarismAuthorship",
    categoryLabel: "Plagiarism & Authorship Ethics",
    severityTier: "moderate",
    delictType: "authorship_misconduct",
    scenario: "An author forged the digital signatures of two Nobel laureates and listed them as co-authors on an unvetted speculative manuscript without their knowledge or consent, aiming to exploit their prestige to secure fast-track journal acceptance.",
    standardCitation: "COPE Authorship Verification Standards & Publisher Submission Policies",
    standardText: "All authors must give explicit, verifiable consent prior to manuscript submission and share responsibility for the integrity of the published work.",
    statutoryBenchmark: "Immediate Paper Retraction & Institutional Disciplinary Reprimand",
    sanctionStats: {
      severeSanctionsPct: 40,
      moderateSanctionsPct: 52,
      minorSanctionsPct: 8,
      avgDebarmentYears: 1,
      avgSentenceDescription: "Immediate retraction for forged submission, formal apology requirement, and university ethics committee warning."
    },
    harmAnalysis: {
      scientificHarm: "Misattributes scientific authority to unverified claims, misleading editors and readers.",
      societalImpact: "Damages the hard-earned reputations of victimized senior scientists whose names are hijacked.",
      harmScore: 55
    },
    caseStudy: {
      name: "Unauthorized Co-Authorship Retractions in Physics & Chemistry",
      retractionCount: 6,
      summary: "Journals frequently retract articles after famous researchers discover their names were added to papers they never saw or approved.",
      retractionWatchTag: "unauthorized-authorship"
    }
  },
  {
    id: "commercial-contract-cheating-thesis",
    name: "Contract Cheating & Purchased Master's Thesis",
    category: "StudentIntegrity",
    categoryLabel: "Student & Classroom Integrity",
    severityTier: "moderate",
    delictType: "student_misconduct",
    scenario: "A graduate student paid $2,000 to an online essay mill website to write his entire Master of Science thesis in biotechnology, submitting the purchased document as his own independent graduation requirement.",
    standardCitation: "University Student Code of Conduct & Higher Education Integrity Acts",
    standardText: "Contract cheating (outsourcing assignments or dissertations to commercial third parties) is a severe breach of academic integrity warranting immediate degree denial or expulsion.",
    statutoryBenchmark: "Immediate Expulsion from University & Permanent Nullification of Academic Credits",
    sanctionStats: {
      severeSanctionsPct: 80,
      moderateSanctionsPct: 18,
      minorSanctionsPct: 2,
      avgDebarmentYears: 0,
      avgSentenceDescription: "Permanent expulsion from the university program, recording of academic disciplinary notation on official transcripts, and total credit forfeiture."
    },
    harmAnalysis: {
      scientificHarm: "Credentials an incompetent individual who lacks basic technical and analytical research qualifications.",
      societalImpact: "Commercial essay mills fuel academic corruption and undermine the credibility of higher education degrees worldwide.",
      harmScore: 54
    },
    caseStudy: {
      name: "International Essay Mill Crackdowns (EduBirdie / EssayShark)",
      retractionCount: 0,
      summary: "Governments in the UK, Australia, and New Zealand have enacted criminal legislation banning commercial cheating services targeting university students.",
      retractionWatchTag: "contract-cheating"
    }
  },
  {
    id: "tortured-phrases-ai-paraphrasing-fraud",
    name: "Tortured Phrases & AI-Hallucinated Paper Generation",
    category: "PublicationFraud",
    categoryLabel: "Publication & Peer Review Fraud",
    severityTier: "moderate",
    delictType: "publication_manipulation",
    scenario: "To evade plagiarism detection software, an author ran stolen engineering papers through automated synonym spinners and generative AI, publishing unreadable gibberish terms like 'counterfeit consciousness' for artificial intelligence and 'colossal information' for big data.",
    standardCitation: "COPE Standards on Misleading Content & Problematic Paper Screening",
    standardText: "Publishing automated, nonsensical, or paraphrased literature devoid of genuine peer oversight corrupts scientific discourse and constitutes systematic publishing malpractice.",
    statutoryBenchmark: "Automated Paper Retraction & Re-evaluation of Journal Indexing",
    sanctionStats: {
      severeSanctionsPct: 30,
      moderateSanctionsPct: 60,
      minorSanctionsPct: 10,
      avgDebarmentYears: 1,
      avgSentenceDescription: "Batch retractions by publishers (thousands of papers flagged by the Problematic Paper Screener) and institutional review."
    },
    harmAnalysis: {
      scientificHarm: "Pollutes automated scientific databases and search indexes with meaningless, hallucinated terminology.",
      societalImpact: "Exposes systemic vulnerabilities in commercial open-access publishing models that prioritize volume over quality.",
      harmScore: 50
    },
    caseStudy: {
      name: "Guillaume Cabanac & Problematic Paper Screener Discoveries",
      retractionCount: 2500,
      summary: "Computer scientist Guillaume Cabanac identified tens of thousands of papers riddled with 'tortured phrases' produced by automated spinners to evade plagiarism detection.",
      retractionWatchTag: "tortured-phrases"
    }
  },
  {
    id: "substantial-self-plagiarism-salami",
    name: "Substantial Self-Plagiarism & Salami Publication",
    category: "PublicationFraud",
    categoryLabel: "Publication & Peer Review Fraud",
    severityTier: "minor",
    delictType: "publication_manipulation",
    scenario: "A researcher took a single 120-patient clinical dataset and fragmented it into six distinct, minimally differentiated papers submitted simultaneously to six different niche journals without cross-citation, recycling 60% of the methods and introduction text word-for-word.",
    standardCitation: "COPE Guidelines on Redundant Publication / Dual Submission",
    standardText: "Redundant publication (salami slicing) distorts the scientific record by presenting identical patient cohorts as independent replication studies and artificially inflating author bibliometrics.",
    statutoryBenchmark: "Retraction of Redundant Papers & Formal Departmental Warning",
    sanctionStats: {
      severeSanctionsPct: 15,
      moderateSanctionsPct: 65,
      minorSanctionsPct: 20,
      avgDebarmentYears: 0,
      avgSentenceDescription: "Retraction of duplicate papers, formal reprimand from university ethics boards, and temporary submission bans from targeted journals."
    },
    harmAnalysis: {
      scientificHarm: "Causes meta-analysts and systematic reviewers to double-count patient cohorts, leading to artificially narrow confidence intervals in clinical syntheses.",
      societalImpact: "Wastes hundreds of hours of voluntary peer reviewer time and clutters the academic search landscape.",
      harmScore: 45
    },
    caseStudy: {
      name: "Dual Submission & Redundant Clinical Cohort Retractions",
      retractionCount: 8,
      summary: "Journals routinely issue joint retractions when cross-checks reveal authors published the same experimental outcomes across multiple open-access venues.",
      retractionWatchTag: "redundant-publication-salami"
    }
  },
  {
    id: "unauthorized-exam-collusion-ring",
    name: "Coordinated Digital Exam Collusion & Exam Leak Ring",
    category: "StudentIntegrity",
    categoryLabel: "Student & Classroom Integrity",
    severityTier: "minor",
    delictType: "student_misconduct",
    scenario: "A group of 30 medical students organized a private encrypted Discord group during a remote proctored pharmacology board exam, sharing live screenshots of multiple-choice questions and crowdsourcing answers in real time.",
    standardCitation: "Institutional Honor Code & Examination Regulations",
    standardText: "Collaborating with peers or utilizing unauthorized external communications during examinations violates basic academic fairness and professional certification standards.",
    statutoryBenchmark: "Failing Grade in Course ('F'), One-Year Academic Suspension & Transcript Notation",
    sanctionStats: {
      severeSanctionsPct: 35,
      moderateSanctionsPct: 55,
      minorSanctionsPct: 10,
      avgDebarmentYears: 0,
      avgSentenceDescription: "Failing grade ('XF' for academic dishonesty), suspension for 1-2 semesters, and mandatory ethics rehabilitation coursework."
    },
    harmAnalysis: {
      scientificHarm: "No direct scientific record damage, but enables academically incompetent candidates to enter licensed professions.",
      societalImpact: "Compromises public safety when unqualified candidates cheat their way into medical, engineering, or legal licensing.",
      harmScore: 38
    },
    caseStudy: {
      name: "Dartmouth Geisel / Medical School Remote Cheating Scandals",
      retractionCount: 0,
      summary: "Universities launched disciplinary proceedings against scores of students after automated Canvas server log analyses revealed coordinated remote exam cheating rings.",
      retractionWatchTag: "exam-cheating-rings"
    }
  },
  {
    id: "failure-to-share-raw-data-code",
    name: "Refusal to Share Primary Data & Open Science Non-Compliance",
    category: "FFP",
    categoryLabel: "Data Fabrication & Falsification",
    severityTier: "minor",
    delictType: "open_science_breach",
    scenario: "Despite publishing under a mandatory journal open data policy ('data available upon reasonable request'), an author repeatedly ignored 14 formal requests from replication teams over two years, claiming the hard drives were 'lost in an office move' when asked for raw code.",
    standardCitation: "FAIR Guiding Principles & Journal Open Science Mandates (Nature/PLOS)",
    standardText: "Authors are required to make raw materials, data, and analytical scripts promptly available to readers upon reasonable request to enable scientific verification.",
    statutoryBenchmark: "Editorial Expression of Concern or Potential Paper Retraction for Unverifiability",
    sanctionStats: {
      severeSanctionsPct: 10,
      moderateSanctionsPct: 50,
      minorSanctionsPct: 40,
      avgDebarmentYears: 0,
      avgSentenceDescription: "Issuance of Editorial Expression of Concern by the journal; potential paper retraction if underlying claims cannot be verified."
    },
    harmAnalysis: {
      scientificHarm: "Prevents independent reproduction of scientific claims and shields potential errors or fraud from community scrutiny.",
      societalImpact: "Undermines the open science paradigm and slows down cumulative computational research.",
      harmScore: 32
    },
    caseStudy: {
      name: "Nature / Molecular Brain Open Data Compliance Retractions",
      retractionCount: 12,
      summary: "Molecular Brain documented that in over 40% of papers where raw blot data was requested following suspicious findings, authors chose to retract rather than supply raw files.",
      retractionWatchTag: "data-availability-retractions"
    }
  }
];
