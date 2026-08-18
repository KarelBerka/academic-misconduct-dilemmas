/**\n * Bilingual Database of Academic Misconduct Offenses (EN / CS)\n * Based on Retraction Watch Database (RWDB), US ORI, COPE, and institutional codes.\n */\n\nwindow.MISCONDUCT_DATA = [
  {
    "id": "lethal-clinical-trial-fabrication",
    "name": "Lethal Clinical Trial Data Fabrication",
    "name_cs": "Fabrikace dat ve fatálních klinických studiích",
    "category": "ResearchEthics",
    "categoryLabel": "Human & Animal Research Ethics",
    "categoryLabel_cs": "Etika výzkumu na lidech a zvířatech",
    "severityTier": "catastrophic",
    "delictType": "criminal_academic",
    "scenario": "A prominent surgeon fabricated post-operative recovery data and concealed severe tissue necrosis in clinical trials for synthetic bioengineered organ implants, leading to the agonizing deaths of multiple patients while falsely claiming clinical breakthrough in top medical journals.",
    "scenario_cs": "Přední chirurg zfalšoval pooperační data a zatajil těžkou tkáňovou nekrózu při klinických zkouškách syntetických orgánových implantátů, což vedlo k úmrtí několika pacientů, zatímco v prestižních lékařských časopisech vykazoval průlomový úspěch.",
    "standardCitation": "Declaration of Helsinki Art. 12, 23 & Criminal Negligence",
    "standardCitation_cs": "Helsinská deklarace čl. 12, 23 a Trestní zákoník (ublížení na zdraví z nedbalosti)",
    "standardText": "Medical research involving human subjects must conform to generally accepted scientific principles and ethical standards. Under no circumstances may patient safety and truthful adverse event reporting be compromised for research promotion.",
    "standardText_cs": "Lékařský výzkum na lidských subjektech musí striktně dodržovat etické standardy. Bezpečnost pacientů a pravdivé hlášení nežádoucích účinků nesmí být nikdy kompromitovány ve prospěch kariérního úspěchu.",
    "statutoryBenchmark": "Criminal Indictment, Permanent Revocation of Medical License & Scientific Debarment",
    "statutoryBenchmark_cs": "Trestní stíhání, trvalé odebrání lékařské licence a doživotní zákaz výzkumné činnosti",
    "sanctionStats": {
      "severeSanctionsPct": 98,
      "moderateSanctionsPct": 2,
      "minorSanctionsPct": 0,
      "avgDebarmentYears": 15,
      "avgSentenceDescription": "Institutional bodies universally refer cases to criminal prosecutors for involuntary manslaughter or gross bodily harm; immediate license revocation and lifetime research debarment.",
      "avgSentenceDescription_cs": "Případy jsou bez výjimky předávány policii a státnímu zastupitelství; okamžité odebrání lékařské licence a doživotní zákaz výzkumné činnosti."
    },
    "harmAnalysis": {
      "scientificHarm": "Misled entire surgical and tissue engineering fields, causing other medical teams to attempt dangerous replicate procedures on terminal patients.",
      "scientificHarm_cs": "Zavedlo celá odvětví chirurgie a tkáňového inženýrství do slepé uličky a vedlo k nebezpečným replikačním pokusům na dalších pacientech.",
      "societalImpact": "Catastrophic loss of human life, profound betrayal of patient vulnerability, and generational collapse of institutional trust in clinical trials.",
      "societalImpact_cs": "Tragické ztráty na lidských životech, zneužití bezbrannosti pacientů a generační otřesení důvěry veřejnosti v klinické studie.",
      "harmScore": 100
    },
    "caseStudy": {
      "name": "Paolo Macchiarini (Karolinska Institute)",
      "retractionCount": 11,
      "summary": "Macchiarini implanted synthetic polymer tracheas seeded with stem cells into patients, fabricating success in The Lancet while patients died from severe complications. Convicted of gross bodily harm in Sweden.",
      "summary_cs": "Macchiarini voperoval pacientům plastové průdušnice s kmenovými buňkami. V Lancetu publikoval falešný úspěch, zatímco pacienti umírali. Ve Švédsku byl pravomocně odsouzen za ublížení na zdraví.",
      "retractionWatchTag": "macchiarini-trachea-scandal"
    }
  },
  {
    "id": "unapproved-germline-gene-editing",
    "name": "Unapproved Human Germline Genome Editing",
    "name_cs": "Neoprávněná editace lidského zárodečného genomu (CRISPR děti)",
    "category": "ResearchEthics",
    "categoryLabel": "Human & Animal Research Ethics",
    "categoryLabel_cs": "Etika výzkumu na lidech a zvířatech",
    "severityTier": "catastrophic",
    "delictType": "criminal_academic",
    "scenario": "A biophysicist secretly recruited couples from an HIV support group and used CRISPR-Cas9 to edit embryos to disable the CCR5 gene, implanting them without legitimate institutional ethics approval, resulting in the birth of genetically altered twins with uncharacterized off-target mutations.",
    "scenario_cs": "Biofyzik tajně naverboval páry z pacientské skupiny a pomocí CRISPR-Cas9 editoval embrya za účelem vyřazení genu CCR5. Bez schválení etickou komisí je implantoval, což vedlo k narození geneticky modifikovaných dvojčat s neprozkoumanými mutacemi.",
    "standardCitation": "UNESCO Universal Declaration on Human Genome & National Biosafety Acts",
    "standardCitation_cs": "Všeobecná deklarace UNESCO o lidském genomu a Zákony o biologické bezpečnosti",
    "standardText": "Human germline modifications carry irreversible hereditary risks for future generations. All research involving human embryos must obtain rigorous independent ethical oversight and comply with strict statutory bans on clinical implantation.",
    "standardText_cs": "Zásahy do lidského zárodečného genomu nesou nevratná dědičná rizika pro budoucí generace. Klinická implantace editovaných embryí je mezinárodně zakázána.",
    "statutoryBenchmark": "Criminal Imprisonment, Permanent Institutional Dismissal & Global Debarment",
    "statutoryBenchmark_cs": "Trest odnětí svobody (vězení), okamžité propuštění a globální zákaz činnosti",
    "sanctionStats": {
      "severeSanctionsPct": 95,
      "moderateSanctionsPct": 5,
      "minorSanctionsPct": 0,
      "avgDebarmentYears": 12,
      "avgSentenceDescription": "Criminal prosecution under statutory biosafety laws resulting in multi-year prison sentences and lifelong disqualification from biological research.",
      "avgSentenceDescription_cs": "Trestní stíhání za nelegální lékařskou praxi s nepodmíněným trestem odnětí svobody na několik let a doživotní zákaz práce v biomedicíně."
    },
    "harmAnalysis": {
      "scientificHarm": "Introduced unverified off-target genomic alterations into the human germline, setting back legitimate therapeutic gene editing oversight by decades.",
      "scientificHarm_cs": "Vneslo neprověřené mimocílové mutace do lidského genomu a zbrzdilo legitimní výzkum genové terapie o celá desetiletí.",
      "societalImpact": "Crossed a foundational international bioethical red line without societal consent or clinical justification.",
      "societalImpact_cs": "Překročení fundamentální bioetické hranice bez společenského konsensu či klinického odůvodnění.",
      "harmScore": 98
    },
    "caseStudy": {
      "name": "He Jiankui (Southern University of Science and Technology)",
      "retractionCount": 3,
      "summary": "Created the world's first gene-edited babies (Lulu and Nana). Sentenced to 3 years in prison by a Chinese court for illegal medical practice and fined 3 million RMB.",
      "summary_cs": "Stvořil první geneticky editované děti na světě (Lulu a Nana). Čínským soudem odsouzen na 3 roky do vězení a k pokutě 3 miliony jüanů.",
      "retractionWatchTag": "crispr-babies-he-jiankui"
    }
  },
  {
    "id": "systemic-western-blot-fabrication",
    "name": "Systematic Biomedical Image & Blot Falsification",
    "name_cs": "Systematická manipulace a falšování obrazových dat a Western blotů",
    "category": "FFP",
    "categoryLabel": "Data Fabrication & Falsification",
    "categoryLabel_cs": "Fabrikace a falzifikace dat (FFP)",
    "severityTier": "catastrophic",
    "delictType": "research_misconduct",
    "scenario": "A lead neuroscientist systematically copy-pasted, spliced, and contrast-enhanced Western blot protein bands across dozens of high-impact papers to manufacture artificial evidence that a specific amyloid oligomer (Aβ*56) directly caused Alzheimer's memory impairment.",
    "scenario_cs": "Přední neurovědec systematicky kopíroval, slepoval a upravoval proteinové proužky na Western blotech v desítkách prestižních publikací, aby uměle vytvořil důkaz, že specifický oligomer amyloidu (Aβ*56) přímo způsobuje Alzheimerovu chorobu.",
    "standardCitation": "US ORI 42 CFR § 93.103 & NIH Scientific Integrity Policy",
    "standardCitation_cs": "Pravidla US ORI (42 CFR § 93.103) a Standardy vědecké integrity NIH",
    "standardText": "Falsification is manipulating research materials, equipment, or processes, or changing or omitting data or results such that the research is not accurately represented in the research record.",
    "standardText_cs": "Falzifikace je manipulace s výzkumnými materiály či procesy, nebo pozměňování dat tak, že neodpovídají skutečnému vědeckému záznamu.",
    "statutoryBenchmark": "Retraction of High-Impact Papers, Loss of NIH Grants, Tenured Chair Termination",
    "statutoryBenchmark_cs": "Retrakce vlivných publikací (Nature), ztráta grantů NIH a odebrání profesury",
    "sanctionStats": {
      "severeSanctionsPct": 88,
      "moderateSanctionsPct": 10,
      "minorSanctionsPct": 2,
      "avgDebarmentYears": 8,
      "avgSentenceDescription": "ORI debarment from federal funding (5-10 years), mandatory retraction of all tainted publications, termination of tenured appointments, and closure of the research laboratory.",
      "avgSentenceDescription_cs": "Zákaz čerpání federálních grantů ORI na 5-10 let, povinná retrakce všech zasažených článků, zrušení profesury a rozpuštění laboratoře."
    },
    "harmAnalysis": {
      "scientificHarm": "Wasted hundreds of millions of research dollars and 16 years of international drug discovery efforts chasing a non-existent biological target.",
      "scientificHarm_cs": "Promrhání stovek milionů dolarů a 16 let celosvětového výzkumu léků sledujícího neexistující biologický cíl.",
      "societalImpact": "Delayed genuine Alzheimer's therapeutics for millions of suffering patients while consuming hundreds of PhD student-years on false premises.",
      "societalImpact_cs": "Zpoždění vývoje skutečných léků pro miliony pacientů a promarnění let práce stovek doktorandů.",
      "harmScore": 95
    },
    "caseStudy": {
      "name": "Sylvain Lesné / Karen Ashe (Nature 2006 Aβ*56 Paper)",
      "retractionCount": 8,
      "summary": "Investigation by Science revealed dozens of manipulated image panels in seminal Alzheimer's papers cited over 2,500 times, sparking international re-evaluations by NIH and journals.",
      "summary_cs": "Vyšetřování časopisu Science odhalilo desítky zmanipulovaných gelů v klíčových článcích o Alzheimerově chorobě citovaných více než 2 500krát.",
      "retractionWatchTag": "alzheimers-image-manipulation"
    }
  },
  {
    "id": "complete-synthetic-dataset-fabrication",
    "name": "Total Synthetic Dataset & Experiment Invention",
    "name_cs": "Kompletní vymýšlení dat a fiktivní experimenty od stolu",
    "category": "FFP",
    "categoryLabel": "Data Fabrication & Falsification",
    "categoryLabel_cs": "Fabrikace a falzifikace dat (FFP)",
    "severityTier": "catastrophic",
    "delictType": "research_misconduct",
    "scenario": "A social psychology dean never conducted his alleged field experiments; instead, he spent years sitting in his office typing fictional numbers into SPSS spreadsheets, inventing surveys of thousands of fictitious high school students and consumers to produce dozens of headline-grabbing papers.",
    "scenario_cs": "Děkan sociální psychologie ve skutečnosti nikdy neprovedl své deklarované terénní experimenty; roky seděl v kanceláři a vymýšlel čísla do tabulek SPSS, generoval fiktivní dotazníky tisíců neexistujících studentů a publikoval desítky senzačních článků.",
    "standardCitation": "ALLEA European Code of Conduct § 3.1 & DFG Research Integrity Guidelines",
    "standardText": "Fabrication is making up results and recording them as if they were real. It constitutes the most egregious violation of the social contract between science and society.",
    "standardCitation_cs": "Evropský kodex ALLEA § 3.1 a Pravidla vědecké integrity DFG",
    "standardText_cs": "Fabrikace je vymýšlení výsledků a jejich zaznamenávání jako reálných. Představuje nejhrubší porušení smlouvy mezi vědou a společností.",
    "statutoryBenchmark": "Revocation of Doctorate Degree, Immediate Termination & Criminal Fraud Settlement",
    "statutoryBenchmark_cs": "Odebrání doktorského titulu (Ph.D.), okamžitý vyhazov a trestní vyrovnání za podvod",
    "sanctionStats": {
      "severeSanctionsPct": 92,
      "moderateSanctionsPct": 8,
      "minorSanctionsPct": 0,
      "avgDebarmentYears": 10,
      "avgSentenceDescription": "Total career termination: revocation of PhD degree by the granting university, mass retraction of 58+ papers, and voluntary return of academic honors.",
      "avgSentenceDescription_cs": "Úplný konec akademické kariéry: odebrání titulu Ph.D. univerzitou, hromadná retrakce 58+ prací a trest obecně prospěšných prací."
    },
    "harmAnalysis": {
      "scientificHarm": "Poisoned the foundational literature on social psychology, stereotyping, and behavioral decision-making for over a decade.",
      "scientificHarm_cs": "Zamořilo základní literaturu sociální psychologie a behaviorálního rozhodování na více než deset let.",
      "societalImpact": "Devastated the careers of dozens of innocent PhD students and postdocs whose dissertations were based on fabricated data provided by the dean.",
      "societalImpact_cs": "Zničilo kariéry desítkám nevinných doktorandů, jejichž disertace stavěly na fiktivních datech dodaných děkanem.",
      "harmScore": 93
    },
    "caseStudy": {
      "name": "Diederik Stapel (Tilburg University)",
      "retractionCount": 58,
      "summary": "Stapel admitted to fabricating data for at least 55 publications and book chapters. He surrendered his PhD degree to the University of Amsterdam and completed 120 hours of community service.",
      "summary_cs": "Stapel přiznal kompletní vymýšlení dat v 55+ publikacích. Vrátil titul Ph.D. Amsterodamské univerzitě a odpracoval 120 hodin veřejně prospěšných prací.",
      "retractionWatchTag": "diederik-stapel-fabrication"
    }
  },
  {
    "id": "cardiac-stem-cell-fabrication",
    "name": "Mass Fabrication of Regenerative Cell Lineage",
    "name_cs": "Hromadná fabrikace kmenových buněk pro regeneraci srdce",
    "category": "FFP",
    "categoryLabel": "Data Fabrication & Falsification",
    "categoryLabel_cs": "Fabrikace a falzifikace dat (FFP)",
    "severityTier": "catastrophic",
    "delictType": "research_misconduct",
    "scenario": "A Harvard medical professor claimed that c-kit+ cardiac stem cells could regenerate damaged human heart tissue, fabricating laboratory assays and animal survival metrics across 31 papers, prompting government-funded human clinical trials based on nonexistent cellular biology.",
    "scenario_cs": "Profesor medicíny na Harvardu tvrdil, že srdeční kmenové buňky c-kit+ dokážou regenerovat lidské srdce. Zfalšoval data ve 31 článcích, což vedlo k zahájení státem placených klinických zkoušek na lidech na základě neexistující biologie.",
    "standardCitation": "US False Claims Act 31 U.S.C. § 3729 & HHS Misconduct Findings",
    "standardCitation_cs": "Zákon o falešných nárocích (False Claims Act) a rozhodnutí HHS ORI",
    "standardText": "Falsifying data in applications for federal research grants violates the False Claims Act, exposing institutions to multi-million dollar treble damage civil liability.",
    "standardText_cs": "Falšování dat v žádostech o federální výzkumné granty zakládá odpovědnost za dotační podvod s povinností vrátit trojnásobek škody.",
    "statutoryBenchmark": "10-Million Dollar Institutional Settlement, 31 Retractions & Laboratory Dissolution",
    "statutoryBenchmark_cs": "Pokuta a mimosoudní vyrovnání 10 milionů USD, 31 retrakcí a zrušení ústavu",
    "sanctionStats": {
      "severeSanctionsPct": 90,
      "moderateSanctionsPct": 8,
      "minorSanctionsPct": 2,
      "avgDebarmentYears": 7,
      "avgSentenceDescription": "Harvard Medical School and Brigham and Women's Hospital agreed to pay $10 million to the US government to settle allegations of fraudulent NIH grant applications.",
      "avgSentenceDescription_cs": "Harvard a nemocnice Brigham and Women's musely zaplatit vládě USA pokutu 10 milionů USD za podvodné grantové žádosti."
    },
    "harmAnalysis": {
      "scientificHarm": "Misdirected billions in cardiac regeneration funding worldwide and subjected heart failure patients to unnecessary bone marrow biopsies.",
      "scientificHarm_cs": "Odvedlo miliardy dolarů celosvětového kardiovaskulárního výzkumu špatným směrem a vystavilo pacienty se selháním srdce zbytečným invazivním biopsiím.",
      "societalImpact": "Massive waste of federal taxpayer funds and severe reputational damage to premier biomedical research institutions.",
      "societalImpact_cs": "Obrovské plýtvání veřejnými prostředky a devastující poškození reputace špičkových výzkumných institucí.",
      "harmScore": 94
    },
    "caseStudy": {
      "name": "Piero Anversa (Harvard / Brigham and Women's)",
      "retractionCount": 31,
      "summary": "Anversa's claims of cardiac stem cell regeneration collapsed after internal investigations found extensive data falsification across 31 papers and NIH grant filings.",
      "summary_cs": "Anversovy teorie o regeneraci srdce zkolabovaly poté, co vyšetřování prokázalo falšování dat ve 31 článcích a desítkách grantových zpráv.",
      "retractionWatchTag": "anversa-cardiac-stem-cells"
    }
  },
  {
    "id": "unauthorized-biosecurity-gain-of-function",
    "name": "Unauthorized Biosafety & Gain-of-Function Breach",
    "name_cs": "Nelegální úpravy patogenů a porušení biologické bezpečnosti",
    "category": "ResearchEthics",
    "categoryLabel": "Human & Animal Research Ethics",
    "categoryLabel_cs": "Etika výzkumu na lidech a zvířatech",
    "severityTier": "catastrophic",
    "delictType": "criminal_academic",
    "scenario": "A virology team performed gain-of-function genetic enhancements on an aerosolized avian influenza strain to increase human mammal transmissibility in a standard BSL-2 laboratory, completely evading institutional biosafety committee (IBC) review and dual-use oversight.",
    "scenario_cs": "Virologický tým provedl genetické posílení viru ptačí chřipky pro snadný přenos mezi savci vzduchem v běžné laboratoři úrovně BSL-2, přičemž zcela obešel komisi pro biologickou bezpečnost a dohled nad nebezpečnými patogeny.",
    "standardCitation": "US Dual Use Research of Concern (DURC) Framework & Biological Weapons Convention",
    "standardCitation_cs": "Rámec pro výzkum dvojího užití (DURC) a Úmluva o biologických zbraních",
    "standardText": "Enhancing the lethality or transmissibility of potential pandemic pathogens without strict biocontainment and federal oversight presents catastrophic global biological risks.",
    "standardText_cs": "Umělé zvyšování přenosnosti či smrtnosti potenciálních pandemických patogenů bez maximálního zabezpečení představuje globální katastrofické riziko.",
    "statutoryBenchmark": "Federal Biosecurity Injunction, Complete Laboratory Sealing & Criminal Investigation",
    "statutoryBenchmark_cs": "Federální soudní zákaz, zapečetění laboratoře a trestní vyšetřování tajnými službami",
    "sanctionStats": {
      "severeSanctionsPct": 96,
      "moderateSanctionsPct": 4,
      "minorSanctionsPct": 0,
      "avgDebarmentYears": 12,
      "avgSentenceDescription": "FBI/homeland security investigation, immediate sealing of laboratory facilities, permanent revocation of biological permits, and criminal prosecution.",
      "avgSentenceDescription_cs": "Zapečetění laboratoří, okamžité odebrání licencí k práci s patogeny a federální stíhání pro ohrožení národní bezpečnosti."
    },
    "harmAnalysis": {
      "scientificHarm": "Risk of accidental lab leak triggering an untreatable synthetic pathogen pandemic.",
      "scientificHarm_cs": "Riziko laboratorního úniku a zažehnutí globální pandemie synteticky vylepšeného patogenu.",
      "societalImpact": "Existential public health risk to global populations and severe disruption of legitimate virological surveillance.",
      "societalImpact_cs": "Existenční ohrožení veřejného zdraví a uvalení drakonických restrikcí na legitimní virologický výzkum.",
      "harmScore": 99
    },
    "caseStudy": {
      "name": "Gain-of-Function & BSL-3 Safety Breaches (CDC / NIH Audits)",
      "retractionCount": 1,
      "summary": "Congressional investigations and federal audits have repeatedly halted high-risk pathogen research following unauthorized lab transfers and protocol evasions.",
      "summary_cs": "Kongresová vyšetřování a audity opakovaně zastavily rizikové virologické projekty kvůli neoprávněným manipulacím se vzorky antraxu a chřipky.",
      "retractionWatchTag": "biosecurity-durc-breaches"
    }
  },
  {
    "id": "active-lab-sample-sabotage",
    "name": "Physical Laboratory & Sample Sabotage",
    "name_cs": "Fyzická sabotáž vzorků a ničení výzkumu konkurence",
    "category": "GrantGovernance",
    "categoryLabel": "Grant Governance & Lab Sabotage",
    "categoryLabel_cs": "Správa grantů a laboratorní sabotáže",
    "severityTier": "severe",
    "delictType": "criminal_academic",
    "scenario": "A postdoctoral fellow, jealous of a colleague's rapid progress on cancer drug screening, secretly poured toxic sodium dodecyl sulfate into her cell culture media and unplugged the laboratory's -80°C biobank freezer, destroying six years of irreplaceable patient biopsy specimens.",
    "scenario_cs": "Postdoktorand ze žárlivosti na úspěchy kolegyně tajně nalil saponát (SDS) do jejích kultivačních médií a vypojil hlubokomrazicí box na -80 °C, čímž zničil šest let nenahraditelných biopsií onkologických pacientů.",
    "standardCitation": "Criminal Code (Malicious Destruction of Property) & University Disciplinary Code",
    "standardCitation_cs": "Trestní zákoník (poškození cizí věci) a Disciplinární řád univerzity",
    "standardText": "Intentional destruction or contamination of biological samples, research apparatus, or primary data constitutes criminal vandalism and reckless scientific sabotage.",
    "standardText_cs": "Úmyslné ničení či kontaminace biologických vzorků nebo aparatury představuje trestný čin vandalismu a hrubé vědecké sabotáže.",
    "statutoryBenchmark": "Criminal Conviction, Restitution Payment, Immediate Dismissal & Lifetime Lab Ban",
    "statutoryBenchmark_cs": "Trestní odsouzení, povinnost nahradit škodu, okamžitý vyhazov a doživotní zákaz vstupu",
    "sanctionStats": {
      "severeSanctionsPct": 94,
      "moderateSanctionsPct": 6,
      "minorSanctionsPct": 0,
      "avgDebarmentYears": 10,
      "avgSentenceDescription": "Police arrest, criminal court conviction for malicious destruction of property, mandatory restitution for destroyed reagents ($50k-$200k), and expulsion/firing.",
      "avgSentenceDescription_cs": "Zatčení policií, podmíněný či nepodmíněný trest, povinnost uhradit škodu ve výši milionů korun a okamžité propuštění."
    },
    "harmAnalysis": {
      "scientificHarm": "Irrevocable destruction of unique patient tissues and longitudinal experimental time-series that took years to cultivate.",
      "scientificHarm_cs": "Nevratné zničení unikátních tkání pacientů a mnohaletých experimentálních časových řad.",
      "societalImpact": "Toxic and terrifying lab environment, severe psychological trauma for the victim researcher, and direct financial loss to the institution.",
      "societalImpact_cs": "Vytvoření toxické atmosféry strachu, psychické trauma napadené vědkyně a přímá finanční ztráta instituce.",
      "harmScore": 89
    },
    "caseStudy": {
      "name": "University of Michigan Cancer Lab Sabotage Case",
      "retractionCount": 0,
      "summary": "A researcher was caught on hidden surveillance camera poisoning a colleague's cell culture bottles with ethanol and detergent. Sentenced to probation and ordered to pay restitution.",
      "summary_cs": "Vědec byl zachycen skrytou kamerou, jak otravuje média kolegyně ethanolem. Soud mu uložil podmíněný trest a povinnost uhradit škodu.",
      "retractionWatchTag": "laboratory-sabotage"
    }
  },
  {
    "id": "commercial-paper-mill-purchasing",
    "name": "Commercial Paper Mill Manuscript & Authorship Purchase",
    "name_cs": "Nákup falešných článků a autorství z „továren na články“ (Paper Mills)",
    "category": "PublicationFraud",
    "categoryLabel": "Publication & Peer Review Fraud",
    "categoryLabel_cs": "Publikační podvody a manipulace recenzí",
    "severityTier": "severe",
    "delictType": "research_misconduct",
    "scenario": "A clinical department head seeking promotion paid $3,500 to an underground paper mill brokerage to secure first-author placement on a completely AI-generated, synthetic medical study with fabricated patient charts and bought acceptance in a special issue journal.",
    "scenario_cs": "Přednosta kliniky usilující o habilitaci zaplatil 3 500 USD komerční brokerské agentuře za první autorství na plně vygenerovaném článku s fiktivními kartami pacientů a koupeným přijetím ve speciálním čísle časopisu.",
    "standardCitation": "COPE Guidelines on Systematic Manipulation of the Publication Process",
    "standardCitation_cs": "Směrnice COPE o systematické manipulaci publikačního procesu",
    "standardText": "Paper mills are profit-oriented organizations producing and selling fraudulent manuscripts that resemble genuine research. Involvement in paper mill author slots constitutes deliberate scientific deception.",
    "standardText_cs": "Továrny na články jsou komerční sítě prodávající podvodné rukopisy. Nákup autorství představuje úmyslný a organizovaný podvod.",
    "statutoryBenchmark": "Paper Retraction, Demotion / Contract Termination & Ineligibility for Promotion",
    "statutoryBenchmark_cs": "Retrakce článků, zrušení habilitačního řízení / propuštění a diskvalifikace",
    "sanctionStats": {
      "severeSanctionsPct": 75,
      "moderateSanctionsPct": 22,
      "minorSanctionsPct": 3,
      "avgDebarmentYears": 4,
      "avgSentenceDescription": "Mass retractions (tens of thousands of papers across major publishers like Hindawi/Wiley/Springer), university disciplinary investigation, demotion, or dismissal.",
      "avgSentenceDescription_cs": "Hromadné retrakce (desítky tisíc článků u vydavatelství Wiley/Hindawi/Springer), univerzitní vyšetřování a odvolání z funkcí."
    },
    "harmAnalysis": {
      "scientificHarm": "Floods the global literature with garbage synthetic claims that distort meta-analyses and downstream clinical syntheses.",
      "scientificHarm_cs": "Zamořuje vědeckou literaturu syntetickým balastem, který zkresluje metaanalýzy a klinická doporučení.",
      "societalImpact": "Unqualified clinicians obtaining senior medical promotions based on fake research, directly endangering hospital patients.",
      "societalImpact_cs": "Nekvalifikovaní lékaři získávají vedoucí pozice na základě podvodů, což ohrožuje bezpečnost pacientů v nemocnicích.",
      "harmScore": 83
    },
    "caseStudy": {
      "name": "Hindawi / Wiley 11,000+ Paper Mill Retraction Wave",
      "retractionCount": 11300,
      "summary": "Publishers retracted over 11,000 papers and shut down 19 journals after uncovering coordinated paper mill operations selling authorship and manipulated peer reviews in special issues.",
      "summary_cs": "Vydavatelství stáhla přes 11 000 článků a zrušila 19 časopisů po odhalení koordinovaných sítí prodávajících autorství ve zvláštních číslech.",
      "retractionWatchTag": "paper-mills-hindawi"
    }
  },
  {
    "id": "fake-peer-review-ring",
    "name": "Fabricated Peer Review Ring & Identity Fraud",
    "name_cs": "Falešné recenzní sítě a fiktivní identity recenzentů",
    "category": "PublicationFraud",
    "categoryLabel": "Publication & Peer Review Fraud",
    "categoryLabel_cs": "Publikační podvody a manipulace recenzí",
    "severityTier": "severe",
    "delictType": "research_misconduct",
    "scenario": "An author created dozens of bogus email accounts under the names of famous professors in his field. When submitting 28 manuscripts, he suggested these fabricated emails as 'expert independent reviewers' and logged into the accounts to write glowing peer review reports approving his own papers within 24 hours.",
    "scenario_cs": "Autor si vytvořil desítky falešných e-mailových schránek pod jmény světových profesorů. Při podání 28 článků tyto schránky navrhl jako „nezávislé recenzenty“ a následně si sám schválil vlastní práce pochvalnými posudky.",
    "standardCitation": "COPE Ethical Guidelines for Peer Reviewers & Publisher Fraud Protocols",
    "standardCitation_cs": "Etická pravidla COPE pro recenzenty a bezpečnostní protokoly vydavatelství",
    "standardText": "Impersonating peer reviewers or manipulating editor recommendations through forged identities subverts the fundamental gatekeeping mechanism of modern science.",
    "standardText_cs": "Vydávání se za recenzenty prostřednictvím falešných identit rozvrací základní kontrolní mechanismus vědeckého publikování.",
    "statutoryBenchmark": "Mass Paper Retraction, Publisher Blacklisting & Faculty Dismissal",
    "statutoryBenchmark_cs": "Hromadné stažení článků, zapsání na černou listinu vydavatelství a vyhazov",
    "sanctionStats": {
      "severeSanctionsPct": 78,
      "moderateSanctionsPct": 20,
      "minorSanctionsPct": 2,
      "avgDebarmentYears": 5,
      "avgSentenceDescription": "Retraction of all accepted papers, permanent ban from publishing in or reviewing for the affected journal families, and formal institutional misconduct sanction.",
      "avgSentenceDescription_cs": "Retrakce všech dotčených článků, doživotní zákaz publikování v daných nakladatelstvích a disciplinární propuštění."
    },
    "harmAnalysis": {
      "scientificHarm": "Completely bypassed independent peer evaluation, publishing flawed and unverified methodologies as peer-reviewed science.",
      "scientificHarm_cs": "Úplné vyřazení nezávislého posouzení; nekvalitní a chybné metodiky byly publikovány jako recenzovaná věda.",
      "societalImpact": "Subverted the integrity of the scientific validation process, wasting reviewer and editorial resources globally.",
      "societalImpact_cs": "Podrytí důvěryhodnosti vědeckého recenzního řízení a plýtvání časem redakcí.",
      "harmScore": 81
    },
    "caseStudy": {
      "name": "Hyung-In Moon (Dongguk University)",
      "retractionCount": 35,
      "summary": "Moon admitted to creating fake reviewer accounts with Yahoo and Gmail addresses to review his own manuscripts. Springer, Informa, and Elsevier retracted over 35 of his papers.",
      "summary_cs": "Moon přiznal zakládání falešných e-mailů, přes které recenzoval sám sebe. Vydavatelství Springer, Informa a Elsevier mu stáhla přes 35 publikací.",
      "retractionWatchTag": "fake-peer-review-ring"
    }
  },
  {
    "id": "federal-grant-fund-embezzlement",
    "name": "Embezzlement & Kickbacks of Federal Research Grants",
    "name_cs": "Zpronevěra vědeckých grantů a vyvádění veřejných peněz",
    "category": "GrantGovernance",
    "categoryLabel": "Grant Governance & Lab Sabotage",
    "categoryLabel_cs": "Správa grantů a laboratorní sabotáže",
    "severityTier": "severe",
    "delictType": "criminal_academic",
    "scenario": "A principal investigator diverted $1.2 million in NIH and EU Horizon research grant funds into personal shell companies by filing fictitious invoices for high-end spectrometers, using the funds for luxury family vacations and luxury real estate down-payments.",
    "scenario_cs": "Hlavní řešitel vyvedl 1,2 milionu dolarů z grantů NIH a EU Horizon do vlastních fiktivních firem pomocí falešných faktur za laboratorní spektrometry, přičemž peníze použil na nákup luxusních nemovitostí a dovolených.",
    "standardCitation": "US Federal False Claims Act & EU Anti-Fraud Office (OLAF) Regulations",
    "standardCitation_cs": "Zákon o dotačních podvodech (False Claims Act) a předpisy úřadu OLAF",
    "standardText": "Grant funds are held in public trust exclusively for authorized direct and indirect scientific research expenditures. Misappropriation of grant funding constitutes federal criminal fraud.",
    "standardText_cs": "Grantové prostředky jsou svěřeny vědcům výhradně pro oprávněné výzkumné výdaje. Jejich zpronevěra je trestným činem dotačního podvodu.",
    "statutoryBenchmark": "Federal Prison Sentence (1-5 Years), Full Restitution & Lifetime Grant Debarment",
    "statutoryBenchmark_cs": "Nepodmíněný trest odnětí svobody (1–5 let), plná náhrada škody a zákaz grantů",
    "sanctionStats": {
      "severeSanctionsPct": 94,
      "moderateSanctionsPct": 6,
      "minorSanctionsPct": 0,
      "avgDebarmentYears": 10,
      "avgSentenceDescription": "Criminal prosecution for wire fraud/theft of government funds, 18-36 months in federal prison, treble civil damages, and lifetime debarment from receiving public grants.",
      "avgSentenceDescription_cs": "Trestní stíhání pro podvod, trest 18-36 měsíců vězení, povinnost vrátit miliony a doživotní zákaz čerpání veřejných grantů."
    },
    "harmAnalysis": {
      "scientificHarm": "Starved legitimate lab research of resources, leaving promising experimental leads abandoned and trainees unpaid.",
      "scientificHarm_cs": "Ochuzení legitimního výzkumu o finanční zdroje; slibné experimentální směry zůstaly nedokončené a studenti bez stipendií.",
      "societalImpact": "Direct theft of public taxpayer dollars allocated for combating life-threatening diseases.",
      "societalImpact_cs": "Přímá krádež peněz daňových poplatníků určených na léčbu závažných onemocnění.",
      "harmScore": 87
    },
    "caseStudy": {
      "name": "Columbia University / NIH Grant Fraud Prosecutions",
      "retractionCount": 2,
      "summary": "Multiple PIs across major universities have faced federal prison sentences and millions in restitution after federal audits uncovered bogus subcontracting and personal kickbacks.",
      "summary_cs": "Řada hlavních řešitelů na předních univerzitách byla odsouzena k odnětí svobody po odhalení fiktivních faktur a úplatků v grantech.",
      "retractionWatchTag": "grant-fraud-prosecution"
    }
  },
  {
    "id": "undisclosed-pharma-financial-coi",
    "name": "High-Stakes Undisclosed Pharmaceutical Conflict of Interest",
    "name_cs": "Zatajení masivního finančního střetu zájmů s farmaceutickou firmou",
    "category": "GrantGovernance",
    "categoryLabel": "Grant Governance & Lab Sabotage",
    "categoryLabel_cs": "Správa grantů a laboratorní sabotáže",
    "severityTier": "severe",
    "delictType": "ethics_violation",
    "scenario": "A world-renowned oncology leader published glowing clinical trial results and authored clinical practice guidelines endorsing a $150,000/year cancer drug in NEJM and Lancet, hiding that he had received over $3.5 million in personal consulting fees and equity options from the manufacturer.",
    "scenario_cs": "Světově uznávaný onkolog publikoval pochvalné výsledky klinických zkoušek a doporučené postupy pro drahý lék na rakovinu v NEJM a Lancetu, přičemž zatajil, že od výrobce léku inkasoval 3,5 milionu USD na osobních odměnách a akciových opcích.",
    "standardCitation": "ICMJE Disclosure of Financial and Non-Financial Relationships and Activities",
    "standardCitation_cs": "Pravidla ICMJE o střetu zájmů a transparentnosti ve zdravotnictví",
    "standardText": "Authors must disclose all relationships and activities that could be viewed as potential conflicts of interest. Financial ties to commercial sponsors of tested therapies must be fully and transparently declared.",
    "standardText_cs": "Autoři musí transparentně přiznat veškeré finanční vazby ke komerčním sponzorům hodnocených terapií.",
    "statutoryBenchmark": "Forced Resignation from Hospital / Institute Directorship & Mandatory Corrections",
    "statutoryBenchmark_cs": "Vynucená rezignace z ředitelských funkcí v nemocnicích a povinná errata v časopisech",
    "sanctionStats": {
      "severeSanctionsPct": 68,
      "moderateSanctionsPct": 28,
      "minorSanctionsPct": 4,
      "avgDebarmentYears": 3,
      "avgSentenceDescription": "Immediate forced resignation from institutional leadership and clinical directorships; public corrections in dozens of medical journals.",
      "avgSentenceDescription_cs": "Okamžitá nucená rezignace z vedení onkologických center a povinné opravy v desítkách mezinárodních žurnálů."
    },
    "harmAnalysis": {
      "scientificHarm": "Skewed clinical perception of therapeutic efficacy and minimized dangerous drug toxicity profiles in widely adopted guidelines.",
      "scientificHarm_cs": "Zkreslení vnímání účinnosti léčiva a bagatelizace jeho toxicity v mezinárodních léčebných standardech.",
      "societalImpact": "Cancer patients prescribed excessively costly or suboptimal regimens due to commercially biased clinical recommendations.",
      "societalImpact_cs": "Onkologičtí pacienti dostávají předražené nebo méně vhodné léky kvůli komerčně motivovaným doporučením.",
      "harmScore": 78
    },
    "caseStudy": {
      "name": "José Baselga (Memorial Sloan Kettering Cancer Center)",
      "retractionCount": 0,
      "summary": "The chief medical officer of MSKCC resigned after a ProPublica / NYT investigation revealed he failed to disclose millions in payments from pharma companies in dozens of articles in NEJM and Lancet.",
      "summary_cs": "Hlavní lékař prestižního centra MSKCC musel odstoupit poté, co investigativci odhalili nepřiznané miliony od farmaceutických firem v článcích v Lancetu.",
      "retractionWatchTag": "undisclosed-conflict-of-interest"
    }
  },
  {
    "id": "reviewer-idea-theft-scoop",
    "name": "Reviewer Idea Theft & Proposal Scooping",
    "name_cs": "Krádež nápadu z recenzního řízení a předběhnutí autora (Scooping)",
    "category": "PlagiarismAuthorship",
    "categoryLabel": "Plagiarism & Authorship Ethics",
    "categoryLabel_cs": "Plagiátorství a etika autorství",
    "severityTier": "severe",
    "delictType": "research_misconduct",
    "scenario": "An expert peer reviewer evaluating an unpublished breakthrough grant proposal rejected the application with unjustified harsh criticism, while secretly handing the novel catalytic reaction design to his own PhD students, rushing their own identical paper into print six months later.",
    "scenario_cs": "Recenzent hodnotící dosud nepublikovaný průlomový grantový návrh projekt zamítl vykonstruovanou kritikou, zatímco tajně předal koncept nového katalyzátoru svým studentům a o půl roku později publikoval identický objev pod svým jménem.",
    "standardCitation": "NIH Confidentiality Agreement for Reviewers & ORI Reviewer Integrity Standards",
    "standardCitation_cs": "Dohoda NIH o důvěrnosti recenzního řízení a Etický kodex hodnotitele ORI",
    "standardText": "Reviewers must treat manuscripts and grant proposals as privileged, strictly confidential communications. Appropriating ideas, experimental designs, or unpublished findings from a reviewed proposal is grave intellectual theft.",
    "standardText_cs": "Recenzenti musí považovat hodnocené návrhy za přísně důvěrné. Přivlastnění si nápadů či metodik z posuzovaného projektu je závažnou krádeží duševního vlastnictví.",
    "statutoryBenchmark": "Permanent Debarment from Grant Review Panels, Retraction of Scooped Paper & Reprimand",
    "statutoryBenchmark_cs": "Doživotní zákaz působení v hodnoticích panelech, retrakce ukradené práce a napomenutí",
    "sanctionStats": {
      "severeSanctionsPct": 72,
      "moderateSanctionsPct": 24,
      "minorSanctionsPct": 4,
      "avgDebarmentYears": 5,
      "avgSentenceDescription": "ORI finding of research misconduct, retraction of the stolen publication, permanent exclusion from government review panels, and institutional disciplinary censure.",
      "avgSentenceDescription_cs": "Oficiální nález vědeckého pochybení ORI, stažení ukradené publikace a trvalé vyloučení z grantových komisí."
    },
    "harmAnalysis": {
      "scientificHarm": "Destroys the foundational trust required for confidential peer review and grant evaluation systems.",
      "scientificHarm_cs": "Destrukce důvěry v anonymní recenzní řízení a grantové soutěže.",
      "societalImpact": "Victimized junior researchers who originated the concept lose funding, career momentum, and priority credit.",
      "societalImpact_cs": "Poškození původní autoři (často mladí vědci) přicházejí o grantové financování, prvenství a kariérní budoucnost.",
      "harmScore": 76
    },
    "caseStudy": {
      "name": "ORI Findings of Confidential Reviewer Proposal Theft",
      "retractionCount": 4,
      "summary": "ORI documented cases where senior scientists reviewed NIH R01 applications and directly copied hypotheses and methodologies into their own subsequent grant submissions and lab papers.",
      "summary_cs": "ORI opakovaně trestala případy, kdy hodnotitelé zkopírovali hypotézy z hodnocených žádostí NIH přímo do svých vlastních publikací.",
      "retractionWatchTag": "reviewer-misconduct-scooping"
    }
  },
  {
    "id": "severe-animal-welfare-protocol-breach",
    "name": "Severe Animal Welfare & Surgical Protocol Violations",
    "name_cs": "Hrubé porušení etických protokolů a týrání laboratorních zvířat",
    "category": "ResearchEthics",
    "categoryLabel": "Human & Animal Research Ethics",
    "categoryLabel_cs": "Etika výzkumu na lidech a zvířatech",
    "severityTier": "severe",
    "delictType": "regulatory_breach",
    "scenario": "A neuroscience laboratory performed craniotomies and spinal cord transections on hundreds of primates and dogs without administering required post-surgical analgesia to cut costs, hiding the extreme distress and doubling animal mortality numbers from the university IACUC oversight committee.",
    "scenario_cs": "Neurovědná laboratoř prováděla operace mozku a míchy na stovkách primátů a psů bez podávání anestetik a analgetik kvůli úspoře nákladů, přičemž utrpení a dvojnásobnou úmrtnost zvířat zatajovala před etickou komisí.",
    "standardCitation": "US Animal Welfare Act 7 U.S.C. § 2131 & Guide for Care and Use of Laboratory Animals",
    "standardCitation_cs": "Zákon na ochranu zvířat proti týrání a Mezinárodní pravidla péče o laboratorní zvířata",
    "standardText": "Research involving animals must minimize distress and pain through mandated anesthesia and humane endpoints. Falsifying welfare records or bypassing IACUC approved limits constitutes severe federal violation.",
    "standardText_cs": "Výzkum na zvířatech musí minimalizovat bolest pomocí schválených anestetik. Zatajování utrpení zvířat je závažným porušením zákona.",
    "statutoryBenchmark": "Suspension of Animal Facility Accreditation, Federal USDA Fines & Protocol Termination",
    "statutoryBenchmark_cs": "Odebrání akreditace zvěřince, vysoké pokuty a zastavení všech výzkumných projektů",
    "sanctionStats": {
      "severeSanctionsPct": 70,
      "moderateSanctionsPct": 26,
      "minorSanctionsPct": 4,
      "avgDebarmentYears": 4,
      "avgSentenceDescription": "Revocation of animal research protocols, USDA civil penalties ($100k+), mandatory retraining, and institutional suspension of lab operations.",
      "avgSentenceDescription_cs": "Zrušení povolení k pokusům na zvířatech, statisícové pokuty v dolarech a pozastavení provozu ústavu."
    },
    "harmAnalysis": {
      "scientificHarm": "Uncontrolled pain and systemic distress introduce confounding stress hormones that invalidate neurophysiological findings.",
      "scientificHarm_cs": "Nekontrolovaná bolest a stresové hormony znehodnocují fyziologická měření a vedou k falešným vědeckým závěrům.",
      "societalImpact": "Extreme, gratuitous suffering of sentient animals and violation of the ethical social license granted to biomedical research.",
      "societalImpact_cs": "Zbytečné a extrémní utrpení zvířat a porušení etického mandátu uděleného společnosti vědcům.",
      "harmScore": 75
    },
    "caseStudy": {
      "name": "USDA / NIH Enforcement Against University Primate Facilities",
      "retractionCount": 2,
      "summary": "Major research universities have faced six-figure federal fines and mandatory shutdowns of primate facilities following undercover documentation of unapproved surgical suffering.",
      "summary_cs": "Špičkové univerzity čelily milionovým pokutám a uzavření chovů primátů po zdokumentování neschválených operací bez umrtvení.",
      "retractionWatchTag": "animal-welfare-violations"
    }
  },
  {
    "id": "unconsented-indigenous-genomic-harvesting",
    "name": "Unconsented Indigenous Genomic & Biopiracy Harvesting",
    "name_cs": "Biopirátství a zneužití genomických dat domorodých komunit",
    "category": "ResearchEthics",
    "categoryLabel": "Human & Animal Research Ethics",
    "categoryLabel_cs": "Etika výzkumu na lidech a zvířatech",
    "severityTier": "severe",
    "delictType": "ethics_violation",
    "scenario": "Geneticists collected blood samples from an isolated indigenous tribe under the pretext of diabetes health screenings, but subsequently sequenced and commercialized the complete tribal genome without tribal council consent or benefit-sharing agreements.",
    "scenario_cs": "Genetici odebrali vzorky krve izolovanému domorodému kmeni pod záminkou screeningu cukrovky, ale následně celý genom kmene osekvenovali a komerčně využili pro výzkum schizofrenie bez informovaného souhlasu rady kmene.",
    "standardCitation": "Nagoya Protocol on Access and Benefit-Sharing & UN Declaration on the Rights of Indigenous Peoples",
    "standardCitation_cs": "Nagojský protokol o přístupu ke genetickým zdrojům a Deklarace OSN o právech domorodého obyvatelstva",
    "standardText": "Genomic research with indigenous communities requires collective free, prior, and informed consent (FPIC), cultural sensitivity, and equitable benefit sharing.",
    "standardText_cs": "Genetický výzkum na původních komunitách vyžaduje svobodný, předchozí a informovaný souhlas a spravedlivé sdílení přínosů.",
    "statutoryBenchmark": "Federal Injunction, Return of Biological Samples, Financial Settlement & Ban",
    "statutoryBenchmark_cs": "Soudní zákaz, povinnost zničit/vrátit vzorky DNA a milionové odškodnění",
    "sanctionStats": {
      "severeSanctionsPct": 60,
      "moderateSanctionsPct": 35,
      "minorSanctionsPct": 5,
      "avgDebarmentYears": 3,
      "avgSentenceDescription": "Court injunction mandating destruction/return of DNA samples, multi-million dollar institutional settlement, and formal ethics sanctions.",
      "avgSentenceDescription_cs": "Soudní příkaz k navrácení vzorků, vyplacení odškodného a uvalení etických sankcí na výzkumníky."
    },
    "harmAnalysis": {
      "scientificHarm": "Destroys trust in biomedical research among vulnerable populations, resulting in boycott of critical genetic epidemiology initiatives.",
      "scientificHarm_cs": "Zničení důvěry zranitelných populací v biomedicínu, což vede k bojkotu důležitých epidemiologických projektů.",
      "societalImpact": "Exploitation and biopiracy targeting marginalized historical communities.",
      "societalImpact_cs": "Neetické kořistění z marginalizovaných historických komunit a porušení jejich suverenity.",
      "harmScore": 74
    },
    "caseStudy": {
      "name": "Havasupai Tribe vs. Arizona Board of Regents",
      "retractionCount": 0,
      "summary": "The Havasupai Tribe sued Arizona State University after blood samples donated for diabetes research were used for unauthorized schizophrenia, inbreeding, and migration studies.",
      "summary_cs": "Kmen Havasupai zažaloval univerzitu poté, co vzorky darované na výzkum diabetu byly bez souhlasu použity na genetické studie inbreedingu.",
      "retractionWatchTag": "biopiracy-indigenous-genomics"
    }
  },
  {
    "id": "whistleblower-retaliation-extortion",
    "name": "Whistleblower Retaliation & Mentorship Extortion",
    "name_cs": "Pronásledování whistleblowerů a zneužití závislosti doktorandů",
    "category": "GrantGovernance",
    "categoryLabel": "Grant Governance & Lab Sabotage",
    "categoryLabel_cs": "Správa grantů a laboratorní sabotáže",
    "severityTier": "severe",
    "delictType": "ethics_violation",
    "scenario": "When a PhD student uncovered fabricated calibration curves in the lab's primary paper and refused to co-sign the manuscript, the lab director threatened to cancel the student's F-1 visa sponsorship, stripped her authorship on prior legitimate papers, and expelled her from the department.",
    "scenario_cs": "Když doktorandka odhalila zfalšované kalibrační křivky a odmítla podepsat článek, vedoucí laboratoře jí pohrozil zrušením víz, vyškrtl ji z autorství jejích předchozích prací a nechal ji vyloučit z katedry.",
    "standardCitation": "US Office of Research Integrity Whistleblower Protection Standards & Title IX / Labor Law",
    "standardCitation_cs": "Směrnice US ORI na ochranu whistleblowerů a Zákoník práce (zákaz diskriminace a šikany)",
    "standardText": "Institutions and PIs are strictly prohibited from retaliating against individuals who make good faith allegations of research misconduct. Protecting the reporting pipeline is critical to scientific self-correction.",
    "standardText_cs": "Školitelé a instituce mají přísně zakázáno mstít se oznamovatelům vědeckého pochybení. Ochrana whistleblowerů je klíčem k samoopravné funkci vědy.",
    "statutoryBenchmark": "Stripping of Mentorship Rights, Departmental Removal & Civil Liability",
    "statutoryBenchmark_cs": "Odebrání školitelských práv, odvolání z vedení ústavu a finanční odškodnění",
    "sanctionStats": {
      "severeSanctionsPct": 65,
      "moderateSanctionsPct": 30,
      "minorSanctionsPct": 5,
      "avgDebarmentYears": 3,
      "avgSentenceDescription": "PI stripped of supervisory privileges over graduate students and postdocs, formal university reprimand, and substantial confidential financial settlement for retaliatory harm.",
      "avgSentenceDescription_cs": "Zákaz vedení studentů a postdoků, disciplinární důtka a povinnost univerzity vyplatit odškodné za způsobenou újmu."
    },
    "harmAnalysis": {
      "scientificHarm": "Enforces a culture of silence where fraudulent research propagates unchecked because junior researchers fear career destruction.",
      "scientificHarm_cs": "Vytváří kulturu strachu a mlčení, v níž se podvody nekontrolovaně šíří, protože mladí vědci se bojí zničení kariéry.",
      "societalImpact": "Abuse of extreme power imbalances, mental health breakdown of trainees, and wrongful deportation threats against international scholars.",
      "societalImpact_cs": "Hrubé zneužití moci nad podřízenými, psychická újma studentů a hrozby deportací zahraničních stipendistů.",
      "harmScore": 73
    },
    "caseStudy": {
      "name": "Salk Institute & UC Whistleblower Retaliation Cases",
      "retractionCount": 1,
      "summary": "Independent audits repeatedly reveal severe retaliation against graduate students reporting data manipulation, leading to major university policy reforms and financial damages.",
      "summary_cs": "Nezávislé audity opakovaně prokázaly tvrdé msty vedoucích vůči doktorandům, kteří nahlásili falšování dat, což vedlo k reformám ochrany studentů.",
      "retractionWatchTag": "whistleblower-retaliation"
    }
  },
  {
    "id": "cv-credential-fabrication-grants",
    "name": "CV Credential & Publication Record Falsification",
    "name_cs": "Padělání životopisu a fiktivní publikace v grantových žádostech",
    "category": "GrantGovernance",
    "categoryLabel": "Grant Governance & Lab Sabotage",
    "categoryLabel_cs": "Správa grantů a laboratorní sabotáže",
    "severityTier": "severe",
    "delictType": "research_misconduct",
    "scenario": "An applicant for a $2.5 million senior ERC/NIH research grant falsely listed five non-existent first-author publications in Nature and Science on his biosketch, forging DOIs that redirected to completely unrelated articles to pass administrative screening.",
    "scenario_cs": "Žadatel o grant ERC v hodnotě 2,5 milionu EUR ve svém životopise uvedl pět neexistujících prvoautorských článků v Nature a Science s falešnými kódy DOI, aby oklamal hodnoticí panel.",
    "standardCitation": "US ORI & ERC Scientific Integrity Policy on Grant Applications",
    "standardCitation_cs": "Etická pravidla ERC a ORI pro podávání grantových žádostí",
    "standardText": "Falsifying curriculum vitae, publications, or credentials in grant applications or employment dossiers constitutes fraudulent misrepresentation.",
    "standardText_cs": "Falšování publikační činnosti a titulů v grantových přihláškách je kvalifikováno jako pokus o podvod.",
    "statutoryBenchmark": "Grant Application Disqualification, Multi-Year Debarment & Employment Termination",
    "statutoryBenchmark_cs": "Okamžité vyřazení žádosti, víceletý zákaz podávání grantů a vyhazov z univerzity",
    "sanctionStats": {
      "severeSanctionsPct": 82,
      "moderateSanctionsPct": 15,
      "minorSanctionsPct": 3,
      "avgDebarmentYears": 5,
      "avgSentenceDescription": "Immediate disqualification of the application, 3-5 year federal grant debarment, and termination of academic employment for gross dishonesty.",
      "avgSentenceDescription_cs": "Diskvalifikace z grantových soutěží na 3-5 let a okamžité rozvázání pracovního poměru pro hrubé porušení integrity."
    },
    "harmAnalysis": {
      "scientificHarm": "Diverts scarce scientific resources away from legitimate, accomplished researchers.",
      "scientificHarm_cs": "Odčerpává omezené finanční prostředky poctivým vědeckým týmům a projektům.",
      "societalImpact": "Rewards brazen fraud and damages the meritocratic integrity of competitive peer-reviewed funding.",
      "societalImpact_cs": "Devalvuje férovou soutěž a poškozuje důvěru v transparentní rozdělování vědeckých dotací.",
      "harmScore": 77
    },
    "caseStudy": {
      "name": "ORI Findings of Fabricated Grant Biosketches and Fake DOIs",
      "retractionCount": 1,
      "summary": "Federal oversight bodies have formally debarred multiple PIs after automated cross-checks caught fabricated publication lists in R01 and career development grant filings.",
      "summary_cs": "Americký úřad ORI potrestal několik hlavních řešitelů za fiktivní články a falešné DOI kódy v žádostech o granty R01.",
      "retractionWatchTag": "grant-cv-fabrication"
    }
  },
  {
    "id": "verbatim-dissertation-plagiarism",
    "name": "Systematic Verbatim Ph.D. Dissertation Plagiarism",
    "name_cs": "Masivní doslovné plagiátorství v disertační práci",
    "category": "PlagiarismAuthorship",
    "categoryLabel": "Plagiarism & Authorship Ethics",
    "categoryLabel_cs": "Plagiátorství a etika autorství",
    "severityTier": "moderate",
    "delictType": "academic_plagiarism",
    "scenario": "A prominent government official and researcher copy-pasted over 70% of his doctoral dissertation verbatim from existing journal articles, think-tank reports, and Wikipedia without quotation marks or attribution, submitting it as original scholarly contribution.",
    "scenario_cs": "Vysoký vládní činitel a akademik doslovně opsal více než 70 % své disertační práce z cizích článků, analytických zpráv a Wikipedie bez uvozovek a citací a práci obhájil jako vlastní výzkum.",
    "standardCitation": "University Academic Integrity Code & Higher Education Disciplinary Acts",
    "standardCitation_cs": "Disciplinární řád univerzity a Zákon o vysokých školách",
    "standardText": "Plagiarism is the appropriation of another person's ideas, processes, results, or words without giving appropriate credit. Academic degrees require authentic, original scholarship.",
    "standardText_cs": "Plagiátorství je přivlastnění si cizích myšlenek, textů či výsledků bez řádného uvedení zdroje. Závěrečné práce musí být autentickým dílem autora.",
    "statutoryBenchmark": "Retroactive Revocation of Doctoral Degree & Resignation from Public Office",
    "statutoryBenchmark_cs": "Zpětné odebrání titulu Ph.D. a nucená rezignace z veřejných a akademických funkcí",
    "sanctionStats": {
      "severeSanctionsPct": 62,
      "moderateSanctionsPct": 33,
      "minorSanctionsPct": 5,
      "avgDebarmentYears": 0,
      "avgSentenceDescription": "Formal university investigation leading to the permanent revocation of the awarded Ph.D. or Master's degree, loss of academic titles, and resignation from high office.",
      "avgSentenceDescription_cs": "Univerzitní přezkumné řízení s následným zrušením platnosti diplomu, odebráním titulu a ztrátou veřejných postů."
    },
    "harmAnalysis": {
      "scientificHarm": "Contributes zero original knowledge while devaluing the integrity of the university's highest academic credential.",
      "scientificHarm_cs": "Nulový vědecký přínos a devalvace nejvyššího akademického titulu.",
      "societalImpact": "Erosion of meritocracy; undeserved career advancement in political, academic, and industrial leadership.",
      "societalImpact_cs": "Rozklad meritokracie a neoprávněný kariérní vzestup ve veřejné sféře na základě podvodu.",
      "harmScore": 68
    },
    "caseStudy": {
      "name": "Karl-Theodor zu Guttenberg / Annette Schavan Scandals",
      "retractionCount": 1,
      "summary": "The German Defense Minister and later the Education Minister were both stripped of their doctoral titles by the Universities of Bayreuth and Düsseldorf after VroniPlag crowd-sourced proof of massive plagiarism.",
      "summary_cs": "Německý ministr obrany a ministryně školství přišli o doktorské tituly po odhalení masivního plagiátorství platformou VroniPlag.",
      "retractionWatchTag": "vroniplag-dissertation-plagiarism"
    }
  },
  {
    "id": "ghost-authorship-commercial-influence",
    "name": "Pharma Ghost Authorship & Commercial Narrative Control",
    "name_cs": "Ghostwriting farmaceutických firem a nájemné autorství akademiků",
    "category": "PlagiarismAuthorship",
    "categoryLabel": "Plagiarism & Authorship Ethics",
    "categoryLabel_cs": "Plagiátorství a etika autorství",
    "severityTier": "moderate",
    "delictType": "authorship_misconduct",
    "scenario": "A pharmaceutical manufacturer's marketing writers drafted a full clinical review downplaying cardiovascular risks of an anti-inflammatory drug, paid $25,000 to two prominent academic rheumatologists who performed no writing, and submitted the paper without disclosing commercial authorship.",
    "scenario_cs": "Marketingoví autoři farmaceutické firmy sepsali přehledový článek zlehčující kardiovaskulární rizika léku, zaplatili 25 000 USD dvěma profesorům, kteří k textu nepřispěli ani řádkem, a publikovali studii bez přiznání skutečných autorů.",
    "standardCitation": "Good Publication Practice (GPP3) & WAME Policy on Ghost Authorship",
    "standardCitation_cs": "Směrnice správné publikační praxe (GPP3) a etická pravidla WAME",
    "standardText": "Ghostwriting by industry sponsors violates transparency. All professional medical writers and financial support must be acknowledged, and academic authors must have full access to raw study data.",
    "standardText_cs": "Ghostwriting komerčními firmami porušuje transparentnost. Všichni skuteční autoři musí být uvedeni a akademici musí mít plný přístup k primárním datům.",
    "statutoryBenchmark": "Public Congressional Inquiries, Institutional Sanction & Mandatory Retractions",
    "statutoryBenchmark_cs": "Veřejná parlamentní vyšetřování, etická řízení univerzit a stažení článků",
    "sanctionStats": {
      "severeSanctionsPct": 52,
      "moderateSanctionsPct": 40,
      "minorSanctionsPct": 8,
      "avgDebarmentYears": 2,
      "avgSentenceDescription": "Senate and congressional investigative hearings, journal corrections/retractions, and institutional ethics review for participating faculty.",
      "avgSentenceDescription_cs": "Vyšetřování senátními výbory, nucené retrakce a disciplinární tresty pro zúčastněné akademiky."
    },
    "harmAnalysis": {
      "scientificHarm": "Disguises commercial marketing brochures as objective, peer-reviewed medical consensus literature.",
      "scientificHarm_cs": "Převléká komerční marketingové brožury za objektivní recenzovaný vědecký konsenzus.",
      "societalImpact": "Patients exposed to underreported fatal cardiac events (e.g. Vioxx scandal) due to whitewashed clinical literature.",
      "societalImpact_cs": "Pacienti byli vystaveni fatálním srdečním zástavám (kauza Vioxx) kvůli zamlčení rizik v odborné literatuře.",
      "harmScore": 66
    },
    "caseStudy": {
      "name": "Merck Vioxx / Wyeth HRT Ghostwriting Scandals",
      "retractionCount": 6,
      "summary": "Legal discovery in class-action lawsuits revealed that over 50% of published trial reviews were ghostwritten by medical communication agencies hired by pharmaceutical companies.",
      "summary_cs": "Soudní spory odhalily, že více než polovina publikovaných přehledů byla sepsána najatými agenturami ve prospěch farmaceutických koncernů.",
      "retractionWatchTag": "ghostwriting-vioxx"
    }
  },
  {
    "id": "citation-cartel-coercive-citation",
    "name": "Citation Cartel & Coercive Journal Editor Citation",
    "name_cs": "Citační kartely a vynucování citací editory časopisů",
    "category": "PublicationFraud",
    "categoryLabel": "Publication & Peer Review Fraud",
    "categoryLabel_cs": "Publikační podvody a manipulace recenzí",
    "severityTier": "moderate",
    "delictType": "publication_manipulation",
    "scenario": "A journal editor-in-chief and a network of 12 allied professors conditioned manuscript acceptance on authors adding at least 25 irrelevant citations to the editor's personal papers and the cartel's journal, artificially skyrocketing the journal's Impact Factor from 1.8 to 9.2.",
    "scenario_cs": "Šéfredaktor časopisu a síť 12 spřízněných profesorů podmiňovali přijetí článků přidáním 25 nesouvisejících citací na své vlastní práce, čímž uměle vyšroubovali impakt faktor časopisu z 1,8 na 9,2.",
    "standardCitation": "Clarivate Web of Science Journal Evaluation Criteria & COPE Editor Guidelines",
    "standardCitation_cs": "Kritéria hodnocení časopisů Clarivate Web of Science a směrnice COPE pro editory",
    "standardText": "Coercive citation by editors or reviewers is unethical manipulation of citation metrics. Editors must not condition acceptance on self-citations that are not academically warranted.",
    "standardText_cs": "Vynucování citací editory je neetickou manipulací scientometrických metrik a zneužitím redakční moci.",
    "statutoryBenchmark": "Journal Suppressed from Journal Citation Reports (JCR) / Scopus & Editor Firing",
    "statutoryBenchmark_cs": "Vyřazení časopisu z Web of Science / Scopus (ztráta IF) a odvolání šéfredaktora",
    "sanctionStats": {
      "severeSanctionsPct": 55,
      "moderateSanctionsPct": 38,
      "minorSanctionsPct": 7,
      "avgDebarmentYears": 2,
      "avgSentenceDescription": "Clarivate suppresses the journal from Web of Science (losing its Impact Factor); publisher terminates the editor-in-chief's contract.",
      "avgSentenceDescription_cs": "Vyřazení časopisu z Journal Citation Reports (ztráta impakt faktoru) a vyhazov šéfredaktora vydavatelem."
    },
    "harmAnalysis": {
      "scientificHarm": "Severely corrupts citation bibliometrics, algorithmic search indices, and literature discovery algorithms.",
      "scientificHarm_cs": "Korumpuje citační bibliometrii, vyhledávací algoritmy a zkresluje relevanci vědeckých prací.",
      "societalImpact": "Distorts institutional hiring and grant funding decisions that rely on inflated citation counts and fake high-impact journal metrics.",
      "societalImpact_cs": "Zkresluje personální rozhodování a rozdělování peněz na univerzitách závislých na impakt faktorech.",
      "harmScore": 64
    },
    "caseStudy": {
      "name": "Clarivate Annual JCR Metric Suppression Wave",
      "retractionCount": 0,
      "summary": "Every year, Clarivate suppresses 20-30 prominent journals from the Journal Citation Reports due to extreme anomalous citation stacking and cartel behaviors.",
      "summary_cs": "Společnost Clarivate každoročně vyřazuje desítky časopisů z Web of Science kvůli masivnímu citačnímu kartelizování.",
      "retractionWatchTag": "citation-cartels-suppression"
    }
  },
  {
    "id": "coercive-gift-authorship-extortion",
    "name": "Coercive Gift & Parasitic Departmental Authorship",
    "name_cs": "Parazitické a nucené spoluautorství vedoucích ústavů (Gift Authorship)",
    "category": "PlagiarismAuthorship",
    "categoryLabel": "Plagiarism & Authorship Ethics",
    "categoryLabel_cs": "Plagiátorství a etika autorství",
    "severityTier": "moderate",
    "delictType": "authorship_misconduct",
    "scenario": "A powerful institute director mandated an internal lab policy requiring his name to be listed as senior corresponding author on every single paper published by junior faculty and postdocs, despite having never read the manuscripts or participated in the experimental designs.",
    "scenario_cs": "Vlivný ředitel ústavu nařídil interní pravidlo, že musí být uveden jako korespondenční autor na každém článku svých podřízených a doktorandů, ačkoli texty nikdy nečetl a na experimentech se nepodílel.",
    "standardCitation": "ICMJE Criteria for Authorship & COPE Authorship Disputes Protocol",
    "standardCitation_cs": "Kritéria autorství ICMJE a protokoly COPE pro řešení autorských sporů",
    "standardText": "Authorship requires substantial contributions to conception/design or data acquisition, drafting/revising the article, final approval, and accountability for all aspects of the work. Holding an administrative position or providing lab space does not justify authorship.",
    "standardText_cs": "Autorství vyžaduje zásadní tvůrčí podíl na designu studie, datech nebo sepsání. Administrativní pozice či poskytnutí laboratoře nezakládá právo na autorství.",
    "statutoryBenchmark": "Ethical Censure, Removal from Institute Directorship & Forced Authorship Corrections",
    "statutoryBenchmark_cs": "Etická důtka, odvolání z funkce ředitele a povinná errata s odstraněním jména",
    "sanctionStats": {
      "severeSanctionsPct": 42,
      "moderateSanctionsPct": 48,
      "minorSanctionsPct": 10,
      "avgDebarmentYears": 1,
      "avgSentenceDescription": "Institutional ethics reprimand, requirement to publish formal authorship corrections (corrigenda), and loss of executive lab leadership roles.",
      "avgSentenceDescription_cs": "Etické napomenutí etickou komisí, povinnost vydat autorské opravy (corrigenda) a odvolání z řídicích funkcí."
    },
    "harmAnalysis": {
      "scientificHarm": "Obscures actual scientific accountability; if errors occur, the nominal senior author has no genuine understanding of the underlying data.",
      "scientificHarm_cs": "Zastírá skutečnou odpovědnost; v případě chyb nominální vedoucí autor vůbec nerozumí podkladovým datům.",
      "societalImpact": "Feudalistic academic exploitation where early-career researchers do the intellectual heavy lifting while administrators hoard scientific capital.",
      "societalImpact_cs": "Feudální akademické vykořisťování, kdy mladí vědci odvádějí veškerou práci a vedoucí si přivlastňují zásluhy.",
      "harmScore": 61
    },
    "caseStudy": {
      "name": "Hyperprolific Authors / Paper-a-Week Scandals",
      "retractionCount": 5,
      "summary": "Studies in Nature revealed dozens of department heads publishing a paper every 5 to 10 days by coercing honorary authorship on all department output.",
      "summary_cs": "Analýzy v Nature odhalily desítky vedoucích publikujících článek každých 5 dní díky nucenému připisování na práce kolegů.",
      "retractionWatchTag": "hyperprolific-gift-authorship"
    }
  },
  {
    "id": "aggressive-p-hacking-harking",
    "name": "Aggressive P-Hacking & Selective Outcome Reporting",
    "name_cs": "P-hacking, lovení signifikance a formulace hypotéz až po sběru dat (HARKing)",
    "category": "FFP",
    "categoryLabel": "Data Fabrication & Falsification",
    "categoryLabel_cs": "Fabrikace a falzifikace dat (FFP)",
    "severityTier": "moderate",
    "delictType": "questionable_research_practice",
    "scenario": "A behavioral nutrition researcher tested 84 different post-hoc food variables across a small cohort until finding two random spurious correlations (p = 0.041), framed these as pre-planned confirmatory hypotheses in a sensational paper ('eating apples cures depression'), and buried the 82 null results.",
    "scenario_cs": "Výzkumník v oblasti výživy otestoval 84 různých potravinových proměnných, dokud nenarazil na dvě náhodné statistické fluktuace (p = 0,041). Ty v článku prezentoval jako předem stanovené hypotézy („jablka léčí depresi“), zatímco 82 nevýznamných výsledků zatajil.",
    "standardCitation": "American Statistical Association (ASA) Statement on P-Values & Open Science Standards",
    "standardCitation_cs": "Stanovisko ASA k p-hodnotám a standardy otevřené vědy (Open Science)",
    "standardText": "P-hacking, data dredging, and HARKing (Hypothesizing After Results are Known) without preregistration or multiplicity correction produce false-positive artifacts masquerading as robust scientific findings.",
    "standardText_cs": "P-hacking a vymýšlení hypotéz až po zhlédnutí dat (HARKing) bez preregistrace produkují falešně pozitivní artefakty namísto vědeckých objevů.",
    "statutoryBenchmark": "Multiple Paper Retractions, Loss of Faculty Directorship & Mandatory Audit",
    "statutoryBenchmark_cs": "Vícenásobné retrakce prací, rezignace na profesuru a metodologický audit",
    "sanctionStats": {
      "severeSanctionsPct": 48,
      "moderateSanctionsPct": 42,
      "minorSanctionsPct": 10,
      "avgDebarmentYears": 2,
      "avgSentenceDescription": "Retraction of numerous papers (15+), university committee finding of questionable research practices, and resignation from tenured directorship.",
      "avgSentenceDescription_cs": "Retrakce 15+ publikací, závěr vyšetřovací komise o hrubém vědeckém pochybení a rezignace z profesorského místa."
    },
    "harmAnalysis": {
      "scientificHarm": "Creates sensational, irreproducible 'headline science' that clutters dietary and psychological literature with statistical noise.",
      "scientificHarm_cs": "Vytváří nereprodukovatelnou „senzační vědu“, která zaplňuje literaturu statistickým šumem.",
      "societalImpact": "Misleads public health guidelines, consumer dietary choices, and causes deep public cynicism toward nutrition and social sciences.",
      "societalImpact_cs": "Mete veřejnost a způsobuje hlubokou skepsi vůči vědeckým doporučením v oblasti zdraví a stravování.",
      "harmScore": 59
    },
    "caseStudy": {
      "name": "Brian Wansink (Cornell Food and Brand Lab)",
      "retractionCount": 18,
      "summary": "Cornell University found Wansink guilty of scientific misconduct for extensive p-hacking, data dredging, and dubious statistical methods across 18 retracted papers.",
      "summary_cs": "Cornellova univerzita shledala Wansinka vinným z vědeckého pochybení kvůli systematickému p-hackingu v 18 stažených článcích.",
      "retractionWatchTag": "brian-wansink-p-hacking"
    }
  },
  {
    "id": "predatory-journal-hijacking-fraud",
    "name": "Hijacked Journal & Clone Website Publication Fraud",
    "name_cs": "Únosy časopisů a podvodné klonované weby (Hijacked Journals)",
    "category": "PublicationFraud",
    "categoryLabel": "Publication & Peer Review Fraud",
    "categoryLabel_cs": "Publikační podvody a manipulace recenzí",
    "severityTier": "moderate",
    "delictType": "publication_manipulation",
    "scenario": "Fraudsters registered an expired domain name of a legitimate Swiss academic journal indexed in Scopus, cloned the editorial board layout, and charged authors $800 each to publish 1,500 unreviewed papers per month while deceiving university promotion committees.",
    "scenario_cs": "Podvodníci zaregistrovali expirovanou doménu legitimního švýcarského časopisu indexovaného ve Scopusu, naklonovali web redakce a vybírali od autorů 800 USD za publikování 1 500 nerecenzovaných článků měsíčně.",
    "standardCitation": "COPE Principles of Transparency and Best Practice in Scholarly Publishing",
    "standardCitation_cs": "Principy transparentnosti COPE a standardy Cabells Predatory Reports",
    "standardText": "Hijacked journals engage in fraudulent impersonation of established titles to solicit article processing charges without legitimate peer review.",
    "standardText_cs": "Klonované časopisy se dopouštějí trestného činu vydávání se za cizí identitu s cílem vylákat publikační poplatky.",
    "statutoryBenchmark": "Domain Seizure, De-indexing from Scopus/Web of Science & Nullification of Credentials",
    "statutoryBenchmark_cs": "Zablokování domény, vyřazení z databází a neuznání publikací k obhajobám",
    "sanctionStats": {
      "severeSanctionsPct": 45,
      "moderateSanctionsPct": 45,
      "minorSanctionsPct": 10,
      "avgDebarmentYears": 1,
      "avgSentenceDescription": "Immediate delisting from major bibliographic databases, ICANN domain disputes, and refusal of academic institutions to recognize publications for graduation.",
      "avgSentenceDescription_cs": "Vyřazení z mezinárodních databází a odmítnutí univerzit uznat tyto publikace pro graduaci studentů."
    },
    "harmAnalysis": {
      "scientificHarm": "Legitimizes pseudo-science by presenting unreviewed papers under the guise of an established indexed journal.",
      "scientificHarm_cs": "Dodává zdání legitimity pseudovědě a neověřeným textům pod hlavičkou zavedeného časopisu.",
      "societalImpact": "Extorts money from desperate early-career researchers and degrades the reliability of citation databases.",
      "societalImpact_cs": "Finanční parazitování na začínajících vědcích a znehodnocení bibliografických databází.",
      "harmScore": 56
    },
    "caseStudy": {
      "name": "Retraction Watch Hijacked Journal Checker",
      "retractionCount": 0,
      "summary": "Retraction Watch and the Cabells database maintain lists of hundreds of hijacked journals actively harvesting millions of dollars in fraudulent publication fees.",
      "summary_cs": "Retraction Watch vede otevřený registr stovek ukradených časopisů, které ročně vyberou miliony dolarů na fiktivních poplatcích.",
      "retractionWatchTag": "hijacked-journals"
    }
  },
  {
    "id": "unconsented-forged-coauthorship",
    "name": "Forged Signatures & Unconsented Co-Authorship",
    "name_cs": "Falšování podpisů a uvedení spoluautorů bez jejich vědomí",
    "category": "PlagiarismAuthorship",
    "categoryLabel": "Plagiarism & Authorship Ethics",
    "categoryLabel_cs": "Plagiátorství a etika autorství",
    "severityTier": "moderate",
    "delictType": "authorship_misconduct",
    "scenario": "An author forged the digital signatures of two Nobel laureates and listed them as co-authors on an unvetted speculative manuscript without their knowledge or consent, aiming to exploit their prestige to secure fast-track journal acceptance.",
    "scenario_cs": "Autor zfalšoval podpisy dvou nositelů Nobelovy ceny a uvedl je jako spoluautory na spekulativním rukopisu bez jejich vědomí, aby zneužil jejich autoritu k hladkému přijetí v časopise.",
    "standardCitation": "COPE Authorship Verification Standards & Publisher Submission Policies",
    "standardCitation_cs": "Standardy ověřování autorství COPE a podmínky redakčních systémů",
    "standardText": "All authors must give explicit, verifiable consent prior to manuscript submission and share responsibility for the integrity of the published work.",
    "standardText_cs": "Všichni autoři musí udělit prokazatelný souhlas před odesláním rukopisu a nést odpovědnost za jeho obsah.",
    "statutoryBenchmark": "Immediate Paper Retraction & Institutional Disciplinary Reprimand",
    "statutoryBenchmark_cs": "Okamžitá retrakce článku a disciplinární napomenutí s omluvou",
    "sanctionStats": {
      "severeSanctionsPct": 40,
      "moderateSanctionsPct": 52,
      "minorSanctionsPct": 8,
      "avgDebarmentYears": 1,
      "avgSentenceDescription": "Immediate retraction for forged submission, formal apology requirement, and university ethics committee warning.",
      "avgSentenceDescription_cs": "Okamžité stažení článku redakcí, povinnost písemné omluvy a disciplinární řízení na domovské univerzitě."
    },
    "harmAnalysis": {
      "scientificHarm": "Misattributes scientific authority to unverified claims, misleading editors and readers.",
      "scientificHarm_cs": "Dodává falešnou vědeckou autoritu neověřeným tvrzením a klame editory i čtenáře.",
      "societalImpact": "Damages the hard-earned reputations of victimized senior scientists whose names are hijacked.",
      "societalImpact_cs": "Poškozuje pověst zneužitých vědců, jejichž jméno bylo neoprávněně spojeno s cizím textem.",
      "harmScore": 55
    },
    "caseStudy": {
      "name": "Unauthorized Co-Authorship Retractions in Physics & Chemistry",
      "retractionCount": 6,
      "summary": "Journals frequently retract articles after famous researchers discover their names were added to papers they never saw or approved.",
      "summary_cs": "Vydavatelství pravidelně stahují články poté, co přední vědci zjistí, že byli bez vědomí zapsáni mezi autory.",
      "retractionWatchTag": "unauthorized-authorship"
    }
  },
  {
    "id": "commercial-contract-cheating-thesis",
    "name": "Contract Cheating & Purchased Master's Thesis",
    "name_cs": "Nákup vysokoškolských kvalifikačních prací na zakázku (Contract Cheating)",
    "category": "StudentIntegrity",
    "categoryLabel": "Student & Classroom Integrity",
    "categoryLabel_cs": "Studentská etika a akademická integrita",
    "severityTier": "moderate",
    "delictType": "student_misconduct",
    "scenario": "A graduate student paid $2,000 to an online essay mill website to write his entire Master of Science thesis in biotechnology, submitting the purchased document as his own independent graduation requirement.",
    "scenario_cs": "Diplomant zaplatil 2 000 USD komerčnímu webu za kompletní sepsání diplomové práce v oboru biotechnologie a cizí práci odevzdal jako svůj samostatný výstup k obhajobě.",
    "standardCitation": "University Student Code of Conduct & Higher Education Integrity Acts",
    "standardCitation_cs": "Disciplinární řád pro studenty a Zákon o vysokých školách",
    "standardText": "Contract cheating (outsourcing assignments or dissertations to commercial third parties) is a severe breach of academic integrity warranting immediate degree denial or expulsion.",
    "standardText_cs": "Zadání sepsání práce na zakázku třetí straně je hrubým porušením studijních povinností s trestem vyloučení ze studia.",
    "statutoryBenchmark": "Immediate Expulsion from University & Permanent Nullification of Academic Credits",
    "statutoryBenchmark_cs": "Okamžité vyloučení ze studia a trvalé anulování získaných kreditů",
    "sanctionStats": {
      "severeSanctionsPct": 80,
      "moderateSanctionsPct": 18,
      "minorSanctionsPct": 2,
      "avgDebarmentYears": 0,
      "avgSentenceDescription": "Permanent expulsion from the university program, recording of academic disciplinary notation on official transcripts, and total credit forfeiture.",
      "avgSentenceDescription_cs": "Trvalé vyloučení z univerzity s disciplinárním zápisem v protokolu o studiu a neudělení diplomu."
    },
    "harmAnalysis": {
      "scientificHarm": "Credentials an incompetent individual who lacks basic technical and analytical research qualifications.",
      "scientificHarm_cs": "Uděluje diplom osobě bez potřebných odborných znalostí a experimentálních dovedností.",
      "societalImpact": "Commercial essay mills fuel academic corruption and undermine the credibility of higher education degrees worldwide.",
      "societalImpact_cs": "Komerční agentury podrývají důvěryhodnost vysokoškolského vzdělání a degradují hodnotu diplomů.",
      "harmScore": 54
    },
    "caseStudy": {
      "name": "International Essay Mill Crackdowns (EduBirdie / EssayShark)",
      "retractionCount": 0,
      "summary": "Governments in the UK, Australia, and New Zealand have enacted criminal legislation banning commercial cheating services targeting university students.",
      "summary_cs": "Vlády ve Velké Británii a Austrálii uzákonily trestní postihy a blokace komerčních agentur nabízejících psaní prací studentům.",
      "retractionWatchTag": "contract-cheating"
    }
  },
  {
    "id": "tortured-phrases-ai-paraphrasing-fraud",
    "name": "Tortured Phrases & AI-Hallucinated Paper Generation",
    "name_cs": "Zastírání plagiátorství nesmyslným jazykem a AI generátory (Tortured Phrases)",
    "category": "PublicationFraud",
    "categoryLabel": "Publication & Peer Review Fraud",
    "categoryLabel_cs": "Publikační podvody a manipulace recenzí",
    "severityTier": "moderate",
    "delictType": "publication_manipulation",
    "scenario": "To evade plagiarism detection software, an author ran stolen engineering papers through automated synonym spinners and generative AI, publishing unreadable gibberish terms like 'counterfeit consciousness' for artificial intelligence and 'colossal information' for big data.",
    "scenario_cs": "Aby autor obešel antiplagiátorský software, prohnal cizí články automatickým synonymickým spinnerem a AI. Publikoval tak nesmyslné zkomoleniny jako „padělané vědomí“ místo umělé inteligence či „kolosální informace“ místo big data.",
    "standardCitation": "COPE Standards on Misleading Content & Problematic Paper Screening",
    "standardCitation_cs": "Standardy COPE a kritéria Problematic Paper Screeneru",
    "standardText": "Publishing automated, nonsensical, or paraphrased literature devoid of genuine peer oversight corrupts scientific discourse and constitutes systematic publishing malpractice.",
    "standardText_cs": "Publikování zkomoleného a nesmyslného strojového textu bez recenze je publikačním podvodem znečišťujícím odborný diskurz.",
    "statutoryBenchmark": "Automated Paper Retraction & Re-evaluation of Journal Indexing",
    "statutoryBenchmark_cs": "Hromadné retrakce a přezkoumání indexace dotčených časopisů",
    "sanctionStats": {
      "severeSanctionsPct": 30,
      "moderateSanctionsPct": 60,
      "minorSanctionsPct": 10,
      "avgDebarmentYears": 1,
      "avgSentenceDescription": "Batch retractions by publishers (thousands of papers flagged by the Problematic Paper Screener) and institutional review.",
      "avgSentenceDescription_cs": "Dávkové retrakce vydavatelstvími (tisíce článků označených nástrojem Problematic Paper Screener) a etická šetření."
    },
    "harmAnalysis": {
      "scientificHarm": "Pollutes automated scientific databases and search indexes with meaningless, hallucinated terminology.",
      "scientificHarm_cs": "Znečišťuje odborné databáze a vyhledávače nesmyslnou terminologií a halucinacemi.",
      "societalImpact": "Exposes systemic vulnerabilities in commercial open-access publishing models that prioritize volume over quality.",
      "societalImpact_cs": "Ukazuje selhání komerčních časopisů, které upřednostňují zisk z poplatků před kontrolou kvality.",
      "harmScore": 50
    },
    "caseStudy": {
      "name": "Guillaume Cabanac & Problematic Paper Screener Discoveries",
      "retractionCount": 2500,
      "summary": "Computer scientist Guillaume Cabanac identified tens of thousands of papers riddled with 'tortured phrases' produced by automated spinners to evade plagiarism detection.",
      "summary_cs": "Vědec Guillaume Cabanac odhalil desetitisíce prací plných zkomolených termínů vzniklých strojovým maskováním plagiátů.",
      "retractionWatchTag": "tortured-phrases"
    }
  },
  {
    "id": "substantial-self-plagiarism-salami",
    "name": "Substantial Self-Plagiarism & Salami Publication",
    "name_cs": "Autoplagiátorství a umělé kouskování publikací (Salami Slicing)",
    "category": "PublicationFraud",
    "categoryLabel": "Publication & Peer Review Fraud",
    "categoryLabel_cs": "Publikační podvody a manipulace recenzí",
    "severityTier": "minor",
    "delictType": "publication_manipulation",
    "scenario": "A researcher took a single 120-patient clinical dataset and fragmented it into six distinct, minimally differentiated papers submitted simultaneously to six different niche journals without cross-citation, recycling 60% of the methods and introduction text word-for-word.",
    "scenario_cs": "Výzkumník vzal jednu datovou sadu 120 pacientů a rozkouskoval ji do šesti minimálně odlišených článků zaslaných souběžně do šesti různých časopisů bez vzájemné citace, přičemž doslovně zrecykloval 60 % textu.",
    "standardCitation": "COPE Guidelines on Redundant Publication / Dual Submission",
    "standardCitation_cs": "Pravidla COPE o duplicitním publikování a vícenásobném podání",
    "standardText": "Redundant publication (salami slicing) distorts the scientific record by presenting identical patient cohorts as independent replication studies and artificially inflating author bibliometrics.",
    "standardText_cs": "Duplicitní publikování a salámová metoda zkreslují vědecký záznam vydáváním téže kohorty za nezávislé replikace.",
    "statutoryBenchmark": "Retraction of Redundant Papers & Formal Departmental Warning",
    "statutoryBenchmark_cs": "Stažení duplicitních prací a písemné napomenutí děkana",
    "sanctionStats": {
      "severeSanctionsPct": 15,
      "moderateSanctionsPct": 65,
      "minorSanctionsPct": 20,
      "avgDebarmentYears": 0,
      "avgSentenceDescription": "Retraction of duplicate papers, formal reprimand from university ethics boards, and temporary submission bans from targeted journals.",
      "avgSentenceDescription_cs": "Retrakce duplicitních článků, etická důtka a dočasný zákaz publikování v dotčených časopisech."
    },
    "harmAnalysis": {
      "scientificHarm": "Causes meta-analysts and systematic reviewers to double-count patient cohorts, leading to artificially narrow confidence intervals in clinical syntheses.",
      "scientificHarm_cs": "Způsobuje vícenásobné započtení stejných pacientů v metaanalýzách, což falešně zvyšuje zdánlivou spolehlivost léčby.",
      "societalImpact": "Wastes hundreds of hours of voluntary peer reviewer time and clutters the academic search landscape.",
      "societalImpact_cs": "Plýtvání časem recenzentů a zahlcování vědeckého prostoru nadbytečnými duplikáty.",
      "harmScore": 45
    },
    "caseStudy": {
      "name": "Dual Submission & Redundant Clinical Cohort Retractions",
      "retractionCount": 8,
      "summary": "Journals routinely issue joint retractions when cross-checks reveal authors published the same experimental outcomes across multiple open-access venues.",
      "summary_cs": "Časopisy pravidelně vydávají společné retrakce, pokud odhalí publikování týchž klinických výsledků ve více periodicích.",
      "retractionWatchTag": "redundant-publication-salami"
    }
  },
  {
    "id": "unauthorized-exam-collusion-ring",
    "name": "Coordinated Digital Exam Collusion & Exam Leak Ring",
    "name_cs": "Koordinované podvádění při zkouškách a vynášení testů",
    "category": "StudentIntegrity",
    "categoryLabel": "Student & Classroom Integrity",
    "categoryLabel_cs": "Studentská etika a akademická integrita",
    "severityTier": "minor",
    "delictType": "student_misconduct",
    "scenario": "A group of 30 medical students organized a private encrypted Discord group during a remote proctored pharmacology board exam, sharing live screenshots of multiple-choice questions and crowdsourcing answers in real time.",
    "scenario_cs": "Skupina 30 studentů medicíny zorganizovala šifrovanou skupinu na Discordu během online státní zkoušky z farmakologie, kde v reálném čase sdílela snímky otázek a hromadně si radila správné odpovědi.",
    "standardCitation": "Institutional Honor Code & Examination Regulations",
    "standardCitation_cs": "Etický kodex studenta a Zkušební řád univerzity",
    "standardText": "Collaborating with peers or utilizing unauthorized external communications during examinations violates basic academic fairness and professional certification standards.",
    "standardText_cs": "Spolupráce se spolužáky a používání nepovolené komunikace při zkouškách je hrubým porušením zkušebního řádu.",
    "statutoryBenchmark": "Failing Grade in Course ('F'), One-Year Academic Suspension & Transcript Notation",
    "statutoryBenchmark_cs": "Hodnocení 'F' (nevyhověl), podmíněné vyloučení ze studia na 1 rok a disciplinární zápis",
    "sanctionStats": {
      "severeSanctionsPct": 35,
      "moderateSanctionsPct": 55,
      "minorSanctionsPct": 10,
      "avgDebarmentYears": 0,
      "avgSentenceDescription": "Failing grade ('XF' for academic dishonesty), suspension for 1-2 semesters, and mandatory ethics rehabilitation coursework.",
      "avgSentenceDescription_cs": "Klasifikace nevyhověl za nečestné jednání, podmíněné vyloučení na 1-2 semestry a povinný kurz etiky."
    },
    "harmAnalysis": {
      "scientificHarm": "No direct scientific record damage, but enables academically incompetent candidates to enter licensed professions.",
      "scientificHarm_cs": "Nepoškozuje vědeckou literaturu, ale umožňuje nekompetentním uchazečům získat odbornou licenci.",
      "societalImpact": "Compromises public safety when unqualified candidates cheat their way into medical, engineering, or legal licensing.",
      "societalImpact_cs": "Ohrožení veřejnosti, pokud nekvalifikovaní jedinci podvodem projdou do lékařské či inženýrské praxe.",
      "harmScore": 38
    },
    "caseStudy": {
      "name": "Dartmouth Geisel / Medical School Remote Cheating Scandals",
      "retractionCount": 0,
      "summary": "Universities launched disciplinary proceedings against scores of students after automated Canvas server log analyses revealed coordinated remote exam cheating rings.",
      "summary_cs": "Univerzity zahájily disciplinární řízení s desítkami studentů poté, co analýza logů v systému Canvas odhalila organizované podvádění při testech.",
      "retractionWatchTag": "exam-cheating-rings"
    }
  },
  {
    "id": "failure-to-share-raw-data-code",
    "name": "Refusal to Share Primary Data & Open Science Non-Compliance",
    "name_cs": "Odmítnutí sdílení primárních dat a porušení pravidel Open Science",
    "category": "FFP",
    "categoryLabel": "Data Fabrication & Falsification",
    "categoryLabel_cs": "Fabrikace a falzifikace dat (FFP)",
    "severityTier": "minor",
    "delictType": "open_science_breach",
    "scenario": "Despite publishing under a mandatory journal open data policy ('data available upon reasonable request'), an author repeatedly ignored 14 formal requests from replication teams over two years, claiming the hard drives were 'lost in an office move' when asked for raw code.",
    "scenario_cs": "Přestože autor publikoval pod podmínkou otevřených dat („data dostupná na vyžádání“), dva roky ignoroval 14 žádostí o primární kód a data s výmluvou, že se pevné disky „ztratily při stěhování kanceláře“.",
    "standardCitation": "FAIR Guiding Principles & Journal Open Science Mandates (Nature/PLOS)",
    "standardCitation_cs": "Principy FAIR dat a mandáty otevřené vědy vydavatelství (Nature/PLOS)",
    "standardText": "Authors are required to make raw materials, data, and analytical scripts promptly available to readers upon reasonable request to enable scientific verification.",
    "standardText_cs": "Autoři jsou povinni na vyžádání bezodkladně zpřístupnit primární data a skripty k ověření publikovaných výsledků.",
    "statutoryBenchmark": "Editorial Expression of Concern or Potential Paper Retraction for Unverifiability",
    "statutoryBenchmark_cs": "Vydání Editorial Expression of Concern nebo retrakce z důvodu neověřitelnosti",
    "sanctionStats": {
      "severeSanctionsPct": 10,
      "moderateSanctionsPct": 50,
      "minorSanctionsPct": 40,
      "avgDebarmentYears": 0,
      "avgSentenceDescription": "Issuance of Editorial Expression of Concern by the journal; potential paper retraction if underlying claims cannot be verified.",
      "avgSentenceDescription_cs": "Vydání redakčního vyjádření pochybností (Expression of Concern) nebo stažení článku pro nemožnost ověření."
    },
    "harmAnalysis": {
      "scientificHarm": "Prevents independent reproduction of scientific claims and shields potential errors or fraud from community scrutiny.",
      "scientificHarm_cs": "Znemožňuje nezávislé ověření vědeckých tvrzení a chrání případné chyby či podvody před odhalením.",
      "societalImpact": "Undermines the open science paradigm and slows down cumulative computational research.",
      "societalImpact_cs": "Narušuje důvěru v principy otevřené vědy a brzdí návazný výzkum.",
      "harmScore": 32
    },
    "caseStudy": {
      "name": "Nature / Molecular Brain Open Data Compliance Retractions",
      "retractionCount": 12,
      "summary": "Molecular Brain documented that in over 40% of papers where raw blot data was requested following suspicious findings, authors chose to retract rather than supply raw files.",
      "summary_cs": "Časopis Molecular Brain doložil, že ve 40 % případů, kdy byla vyžádána surová data ke sporným gelům, autoři raději článek stáhli, než by data poskytli.",
      "retractionWatchTag": "data-availability-retractions"
    }
  }
];\n