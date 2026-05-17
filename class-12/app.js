const STORAGE_KEY = "careeros12Profile";
const TEST_KEY = "careeros12Mocks";

const STREAMS = {
  PCM: {
    label: "PCM",
    max: 300,
    scoreLabel: "JEE Main score",
    lane: "Engineering and technology",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    defaultScore: 185,
    exams: ["jee-main", "jee-advanced", "tg-eapcet", "ap-eapcet", "bitsat", "viteee"],
    strategy: [
      "Keep JEE Main as the national benchmark and TG/AP EAPCET as the local college conversion path.",
      "Use NCERT for chemistry and theory clarity, then PYQs for exam pattern mastery.",
      "One mock every week is not enough near exam season. Move to two full mocks plus two sectional drills."
    ]
  },
  PCB: {
    label: "PCB",
    max: 720,
    scoreLabel: "NEET UG score",
    lane: "Medicine and life sciences",
    subjects: ["Physics", "Chemistry", "Biology"],
    defaultScore: 540,
    exams: ["neet", "tg-eapcet-ap", "ap-eapcet-ap", "cuet"],
    strategy: [
      "NEET is the primary gate. EAPCET Agriculture and Pharmacy can act as a strong local backup.",
      "Biology decides your ceiling. Physics decides whether you cross into government-college ranges.",
      "Keep NCERT Biology line-by-line and analyze every mock for silly mistakes, not just marks."
    ]
  },
  Commerce: {
    label: "Commerce",
    max: 800,
    scoreLabel: "CUET or aggregate score",
    lane: "Finance, management and law",
    subjects: ["Accounts", "Economics", "Business Studies"],
    defaultScore: 650,
    exams: ["cuet", "ca-foundation", "ipmat", "clat"],
    strategy: [
      "Use CUET for university optionality, CA Foundation for finance depth, and IPMAT/CLAT for alternate prestige routes.",
      "Accounts needs daily written practice. CUET domain can be built from NCERT and board notes.",
      "Do not choose every exam. Pick one primary and one backup so the calendar stays realistic."
    ]
  },
  Arts: {
    label: "Arts",
    max: 800,
    scoreLabel: "CUET or aptitude score",
    lane: "Law, design, humanities and public policy",
    subjects: ["Language", "Humanities domain", "Reasoning"],
    defaultScore: 620,
    exams: ["cuet", "clat", "nid", "nift"],
    strategy: [
      "CUET keeps university options open while CLAT/NID/NIFT create specialized routes.",
      "Reading speed is the unfair advantage for CLAT, CUET general test and interview rounds.",
      "Build a small portfolio or writing dossier early. It compounds for design, law and liberal arts."
    ]
  }
};

const EXAMS = {
  "jee-main": {
    name: "JEE Main",
    org: "NTA",
    pattern: "B.E./B.Tech paper, computer based, national engineering entrance.",
    url: "https://jeemain.nta.nic.in/",
    resource: "Official notices, information bulletin, syllabus, answer keys and question papers.",
    fit: "Primary engineering benchmark for NITs, IIITs, GFTIs and many private universities."
  },
  "jee-advanced": {
    name: "JEE Advanced",
    org: "IITs",
    pattern: "Only for eligible JEE Main qualifiers.",
    url: "https://jeeadv.ac.in/",
    resource: "Official brochure, eligibility and IIT admission instructions.",
    fit: "IIT route for high-performing PCM students."
  },
  "tg-eapcet": {
    name: "TG EAPCET Engineering",
    org: "JNTUH / TGCHE",
    pattern: "Telangana state CBT for engineering, agriculture and pharmacy admissions.",
    url: "https://eapcet.tgche.ac.in/",
    resource: "Official application, mock test, syllabus, response sheet and key updates.",
    fit: "Most important Hyderabad and Telangana engineering backup."
  },
  "ap-eapcet": {
    name: "AP EAPCET Engineering",
    org: "APSCHE",
    pattern: "Andhra Pradesh state entrance for engineering and allied courses.",
    url: "https://cets.apsche.ap.gov.in/EAPCET/Eapcet/EAPCET_HomePage.aspx",
    resource: "Official AP application, instruction booklet, hall ticket and results.",
    fit: "Useful for Andhra colleges and AP private university options."
  },
  bitsat: {
    name: "BITSAT",
    org: "BITS Pilani",
    pattern: "Speed-heavy private university entrance.",
    url: "https://www.bitsadmission.com/",
    resource: "BITS admissions portal and program notices.",
    fit: "Premium private option if JEE rank is not enough for desired branch."
  },
  viteee: {
    name: "VITEEE",
    org: "VIT",
    pattern: "Private university entrance for VIT campuses.",
    url: "https://viteee.vit.ac.in/",
    resource: "Admissions, test slot and counselling information.",
    fit: "Backup route for CSE and electronics aspirants."
  },
  neet: {
    name: "NEET UG",
    org: "NTA",
    pattern: "Common entrance for undergraduate medical education in India.",
    url: "https://neet.nta.nic.in/",
    resource: "Official bulletin, public notices, answer keys and candidate activity.",
    fit: "Primary MBBS, BDS, AYUSH and medical route."
  },
  "tg-eapcet-ap": {
    name: "TG EAPCET A and P",
    org: "JNTUH / TGCHE",
    pattern: "Agriculture and Pharmacy state entrance track.",
    url: "https://eapcet.tgche.ac.in/",
    resource: "Official schedule, mock tests, keys and response sheets.",
    fit: "Local backup for pharmacy, agriculture and allied programs."
  },
  "ap-eapcet-ap": {
    name: "AP EAPCET A and P",
    org: "APSCHE",
    pattern: "AP agriculture and pharmacy route.",
    url: "https://cets.apsche.ap.gov.in/EAPCET/Eapcet/EAPCET_HomePage.aspx",
    resource: "AP EAPCET official instructions and counselling path.",
    fit: "Useful if Andhra colleges are acceptable."
  },
  cuet: {
    name: "CUET UG",
    org: "NTA",
    pattern: "Domain, language and general test for central universities.",
    url: "https://cuet.nta.nic.in/",
    resource: "Official syllabus, universities, notices and admit-card activity.",
    fit: "Best broad university route for commerce, arts, science and interdisciplinary courses."
  },
  "ca-foundation": {
    name: "CA Foundation",
    org: "ICAI",
    pattern: "Foundation entry route for Chartered Accountancy.",
    url: "https://www.icai.org/",
    resource: "Official study material, announcements and registration.",
    fit: "For commerce students serious about accounting, audit, taxation and finance."
  },
  ipmat: {
    name: "IPMAT",
    org: "IIMs",
    pattern: "Integrated management program entrance.",
    url: "https://www.iimidr.ac.in/",
    resource: "IIM Indore admissions and IPM updates.",
    fit: "Management route after 12th for strong quant and verbal students."
  },
  clat: {
    name: "CLAT",
    org: "Consortium of NLUs",
    pattern: "National law entrance for UG law programs.",
    url: "https://consortiumofnlus.ac.in/clat-2026/FAQs.html",
    resource: "Official CLAT pattern, instructions and FAQs.",
    fit: "Law route for students with strong reading, reasoning and current affairs."
  },
  nid: {
    name: "NID DAT",
    org: "NID",
    pattern: "Design aptitude and studio route.",
    url: "https://admissions.nid.edu/",
    resource: "Official NID admission and DAT notices.",
    fit: "Product, communication and interaction design route."
  },
  nift: {
    name: "NIFT Entrance",
    org: "NIFT",
    pattern: "Design, fashion and technology entrance.",
    url: "https://www.nift.ac.in/admission",
    resource: "Official NIFT admissions and program updates.",
    fit: "Fashion, design, retail and creative business route."
  }
};

const JEE_RANKS = [
  { min: 270, max: 300, rankMin: 1, rankMax: 800, label: "Elite IIT and top branch contention" },
  { min: 240, max: 269, rankMin: 800, rankMax: 4500, label: "Top IIT/NIT/IIIT range" },
  { min: 210, max: 239, rankMin: 4500, rankMax: 14000, label: "Strong NIT and IIIT range" },
  { min: 180, max: 209, rankMin: 14000, rankMax: 38000, label: "Good NIT, IIIT and state top colleges" },
  { min: 150, max: 179, rankMin: 38000, rankMax: 85000, label: "State counselling and private top branches" },
  { min: 120, max: 149, rankMin: 85000, rankMax: 170000, label: "State colleges and private universities" },
  { min: 90, max: 119, rankMin: 170000, rankMax: 360000, label: "Private and local counselling backup" },
  { min: 0, max: 89, rankMin: 360000, rankMax: 900000, label: "Improve score or use local/private backups" }
];

const NEET_RANKS = [
  { min: 690, max: 720, rankMin: 1, rankMax: 250, label: "AIIMS and top national medical range" },
  { min: 650, max: 689, rankMin: 250, rankMax: 2500, label: "Top government medical colleges" },
  { min: 610, max: 649, rankMin: 2500, rankMax: 11000, label: "Strong government MBBS range" },
  { min: 570, max: 609, rankMin: 11000, rankMax: 35000, label: "State quota government possibility" },
  { min: 520, max: 569, rankMin: 35000, rankMax: 90000, label: "State quota edge, private MBBS, BDS" },
  { min: 460, max: 519, rankMin: 90000, rankMax: 220000, label: "Private MBBS/BDS and allied health" },
  { min: 0, max: 459, rankMin: 220000, rankMax: 1400000, label: "Allied health, BDS/BAMS/BHMS or retake" }
];

const CUET_RANKS = [
  { min: 760, max: 800, rankMin: 1, rankMax: 3000, label: "Top DU/BHU/JNU style contention" },
  { min: 700, max: 759, rankMin: 3000, rankMax: 15000, label: "Strong central university options" },
  { min: 620, max: 699, rankMin: 15000, rankMax: 50000, label: "Good program options with smart choice filling" },
  { min: 520, max: 619, rankMin: 50000, rankMax: 140000, label: "Regional and backup university range" },
  { min: 0, max: 519, rankMin: 140000, rankMax: 400000, label: "Improve domain score or widen college list" }
];

const COLLEGES = {
  PCM: [
    { name: "IIT Hyderabad", city: "Hyderabad", route: "JEE Advanced", cutoff: 4500, type: "Reach", note: "Top-tier IIT option near Hyderabad." },
    { name: "NIT Warangal", city: "Warangal", route: "JEE Main / JoSAA", cutoff: 12000, type: "Reach", note: "National institute with strong engineering reputation." },
    { name: "IIIT Hyderabad", city: "Hyderabad", route: "UGEE / JEE Main", cutoff: 6000, type: "Reach", note: "Research-heavy CSE and ECE ecosystem." },
    { name: "JNTUH College of Engineering", city: "Hyderabad", route: "TG EAPCET", cutoff: 15000, type: "Target", note: "High-demand state university route." },
    { name: "University College of Engineering Osmania", city: "Hyderabad", route: "TG EAPCET", cutoff: 22000, type: "Target", note: "Classic Hyderabad engineering path." },
    { name: "CBIT", city: "Hyderabad", route: "TG EAPCET", cutoff: 30000, type: "Target", note: "Private aided option with strong local pull." },
    { name: "Vasavi College of Engineering", city: "Hyderabad", route: "TG EAPCET", cutoff: 35000, type: "Target", note: "Popular CSE/ECE private college." },
    { name: "VNR VJIET", city: "Hyderabad", route: "TG EAPCET", cutoff: 42000, type: "Target", note: "Strong placements for core engineering branches." },
    { name: "Gokaraju Rangaraju Institute", city: "Hyderabad", route: "TG EAPCET", cutoff: 52000, type: "Safe", note: "Good private engineering option." },
    { name: "KMIT", city: "Hyderabad", route: "TG EAPCET", cutoff: 48000, type: "Target", note: "Known for computer science focus." },
    { name: "CVR College of Engineering", city: "Hyderabad", route: "TG EAPCET", cutoff: 60000, type: "Safe", note: "Reliable backup for CSE/IT/ECE." },
    { name: "VIT-AP University", city: "Amaravati", route: "VITEEE", cutoff: 80000, type: "Safe", note: "Private university backup in AP." },
    { name: "Andhra University College of Engineering", city: "Visakhapatnam", route: "AP EAPCET", cutoff: 25000, type: "Target", note: "Strong AP government engineering route." },
    { name: "JNTUK University College", city: "Kakinada", route: "AP EAPCET", cutoff: 35000, type: "Target", note: "AP state university engineering path." }
  ],
  PCB: [
    { name: "AIIMS Hyderabad Bibinagar", city: "Hyderabad", route: "NEET / MCC", cutoff: 4500, type: "Reach", note: "National medical institute route." },
    { name: "Osmania Medical College", city: "Hyderabad", route: "NEET / State counselling", cutoff: 14000, type: "Reach", note: "Top Telangana government medical college." },
    { name: "Gandhi Medical College", city: "Hyderabad", route: "NEET / State counselling", cutoff: 16000, type: "Reach", note: "High-demand government MBBS option." },
    { name: "Kakatiya Medical College", city: "Warangal", route: "NEET / State counselling", cutoff: 28000, type: "Target", note: "Strong government medical route." },
    { name: "ESIC Medical College", city: "Hyderabad", route: "NEET / MCC", cutoff: 36000, type: "Target", note: "Central/state counselling relevance." },
    { name: "Kamineni Academy of Medical Sciences", city: "Hyderabad", route: "NEET", cutoff: 90000, type: "Safe", note: "Private medical option with Hyderabad access." },
    { name: "Apollo Institute of Medical Sciences", city: "Hyderabad", route: "NEET", cutoff: 105000, type: "Safe", note: "Private MBBS route." },
    { name: "Andhra Medical College", city: "Visakhapatnam", route: "NEET / AP counselling", cutoff: 18000, type: "Reach", note: "Major AP government medical option." },
    { name: "Guntur Medical College", city: "Guntur", route: "NEET / AP counselling", cutoff: 28000, type: "Target", note: "Well-known AP government medical route." },
    { name: "Siddhartha Medical College", city: "Vijayawada", route: "NEET / AP counselling", cutoff: 42000, type: "Target", note: "AP state medical option." }
  ],
  Commerce: [
    { name: "Shri Ram College of Commerce", city: "Delhi", route: "CUET", cutoff: 2500, type: "Reach", note: "Elite commerce route through CUET." },
    { name: "Hindu College", city: "Delhi", route: "CUET", cutoff: 8000, type: "Reach", note: "Top DU target for commerce and economics." },
    { name: "Loyola College", city: "Chennai", route: "Institution admission", cutoff: 26000, type: "Target", note: "Strong commerce and arts brand." },
    { name: "St. Francis College for Women", city: "Hyderabad", route: "UG admission", cutoff: 50000, type: "Target", note: "Popular Hyderabad commerce option." },
    { name: "NALSAR / NLUs", city: "India", route: "CLAT", cutoff: 5000, type: "Reach", note: "Law path if CLAT becomes primary." },
    { name: "IIM Indore IPM", city: "Indore", route: "IPMAT", cutoff: 5000, type: "Reach", note: "Management path after 12th." }
  ],
  Arts: [
    { name: "Lady Shri Ram College", city: "Delhi", route: "CUET", cutoff: 6000, type: "Reach", note: "Top humanities and social sciences route." },
    { name: "Hindu College", city: "Delhi", route: "CUET", cutoff: 9000, type: "Reach", note: "Strong DU arts and social science option." },
    { name: "University of Hyderabad", city: "Hyderabad", route: "CUET / University route", cutoff: 50000, type: "Target", note: "Research and humanities ecosystem." },
    { name: "NALSAR University of Law", city: "Hyderabad", route: "CLAT", cutoff: 1200, type: "Reach", note: "Premium law path in Hyderabad." },
    { name: "NID Ahmedabad", city: "Ahmedabad", route: "NID DAT", cutoff: 3500, type: "Reach", note: "Design path for portfolio-driven students." },
    { name: "NIFT Hyderabad", city: "Hyderabad", route: "NIFT Entrance", cutoff: 10000, type: "Target", note: "Fashion, design and retail route." }
  ]
};

const RESOURCES = [
  { title: "NCERT textbooks", kind: "Official books", url: "https://ncert.nic.in/textbook.php", streams: ["PCM", "PCB", "Commerce", "Arts"], note: "Start here for boards, CUET domains, NEET Biology and chemistry foundations." },
  { title: "JEE Main question papers", kind: "Official PYQs", url: "https://jeemain.nta.nic.in/", streams: ["PCM"], note: "NTA hosts question papers, notices, syllabus and answer-key activity." },
  { title: "NEET UG official portal", kind: "Official exam", url: "https://neet.nta.nic.in/", streams: ["PCB"], note: "Use for official bulletins, candidate activity, notices and answer-key updates." },
  { title: "CUET UG official portal", kind: "Official exam", url: "https://cuet.nta.nic.in/", streams: ["Commerce", "Arts", "PCM", "PCB"], note: "Track domain subjects, syllabus, universities and admit-card activity." },
  { title: "TG EAPCET official portal", kind: "State exam", url: "https://eapcet.tgche.ac.in/", streams: ["PCM", "PCB"], note: "Hyderabad/Telangana application, mock test, response sheet and key updates." },
  { title: "AP EAPCET official portal", kind: "State exam", url: "https://cets.apsche.ap.gov.in/EAPCET/Eapcet/EAPCET_HomePage.aspx", streams: ["PCM", "PCB"], note: "AP engineering, agriculture and pharmacy route." },
  { title: "Vedantu JEE courses", kind: "Learning platform", url: "https://www.vedantu.com/online-course/jee-online-courses", streams: ["PCM"], note: "Use only when you need structured crash or test-series support." },
  { title: "Physics Wallah", kind: "Learning platform", url: "https://www.pw.live/", streams: ["PCM", "PCB", "Commerce"], note: "Large free and paid ecosystem for JEE, NEET, boards and competitive prep." },
  { title: "Unacademy JEE", kind: "Free classes", url: "https://unacademy.com/goal/jee-main-and-advanced-preparation/TMUVD", streams: ["PCM"], note: "Use for topic repair and educator-led free sessions." },
  { title: "CLAT Consortium", kind: "Official law", url: "https://consortiumofnlus.ac.in/clat-2026/FAQs.html", streams: ["Commerce", "Arts"], note: "Official CLAT pattern and candidate instruction reference." },
  { title: "JoSAA counselling", kind: "Counselling", url: "https://josaa.nic.in/", streams: ["PCM"], note: "Use after JEE for IIT, NIT, IIIT and GFTI counselling rules." },
  { title: "MCC UG counselling", kind: "Counselling", url: "https://mcc.nic.in/UG-medical-counselling/", streams: ["PCB"], note: "All India medical counselling and important UG counselling notices." }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let profile = loadProfile();
let mocks = loadMocks(profile.stream);

function loadProfile() {
  const saved = safeJSON(localStorage.getItem(STORAGE_KEY));
  if (saved) return saved;
  const aurora = safeJSON(localStorage.getItem("auroraProfile")) || {};
  const inferredStream = inferStream(aurora.interest, aurora.goal);
  return {
    name: aurora.name || "Manjunath",
    city: aurora.city || "Hyderabad",
    board: aurora.board || "Telangana State Board",
    stream: inferredStream,
    score: STREAMS[inferredStream].defaultScore,
    budget: "mid",
    exams: [...STREAMS[inferredStream].exams.slice(0, 3)]
  };
}

function loadMocks(stream) {
  const saved = safeJSON(localStorage.getItem(TEST_KEY));
  if (Array.isArray(saved) && saved.length) return saved;
  if (stream === "PCB") {
    return [
      { label: "Mock 1", exam: "NEET UG", score: 485, max: 720 },
      { label: "Mock 2", exam: "NEET UG", score: 512, max: 720 },
      { label: "Mock 3", exam: "NEET UG", score: 540, max: 720 }
    ];
  }
  return [
    { label: "Mock 1", exam: "JEE Main", score: 146, max: 300 },
    { label: "Mock 2", exam: "JEE Main", score: 168, max: 300 },
    { label: "Mock 3", exam: "JEE Main", score: 185, max: 300 }
  ];
}

function safeJSON(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function inferStream(interest = "", goal = "") {
  const text = `${interest} ${goal}`.toLowerCase();
  if (text.includes("medicine") || text.includes("life")) return "PCB";
  if (text.includes("business") || text.includes("finance")) return "Commerce";
  if (text.includes("creative") || text.includes("design")) return "Arts";
  return "PCM";
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

function saveMocks() {
  localStorage.setItem(TEST_KEY, JSON.stringify(mocks));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function rankFor(stream, score) {
  const table = stream === "PCB" ? NEET_RANKS : (stream === "PCM" ? JEE_RANKS : CUET_RANKS);
  return table.find((row) => score >= row.min && score <= row.max) || table[table.length - 1];
}

function readinessScore() {
  const stream = STREAMS[profile.stream];
  const scoreRatio = clamp((Number(profile.score) || 0) / stream.max, 0, 1);
  const examCoverage = clamp((profile.exams?.length || 0) / Math.min(4, stream.exams.length), 0, 1);
  const mockTrend = mocks.length > 1 ? clamp((mocks[mocks.length - 1].score - mocks[0].score + 40) / 80, 0, 1) : 0.5;
  return Math.round((scoreRatio * 58 + examCoverage * 22 + mockTrend * 20));
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en-IN");
}

function statusForCollege(college, rank) {
  if (rank.rankMax <= college.cutoff) return { label: "Safer", className: "status-safe" };
  if (rank.rankMin <= college.cutoff * 1.35) return { label: "Target", className: "status-target" };
  return { label: "Reach", className: "status-reach" };
}

function selectedExams() {
  return (profile.exams || []).map((id) => EXAMS[id]).filter(Boolean);
}

function setupForm() {
  $("#student-name").value = profile.name || "";
  $("#student-city").value = profile.city || "";
  $("#student-stream").value = profile.stream;
  $("#student-board").value = profile.board || "Telangana State Board";
  $("#target-score").value = profile.score;
  $("#student-budget").value = profile.budget || "mid";
  renderExamOptions();
  updateScoreHelp();

  $("#student-stream").addEventListener("change", (event) => {
    const stream = event.target.value;
    profile.stream = stream;
    profile.score = STREAMS[stream].defaultScore;
    profile.exams = [...STREAMS[stream].exams.slice(0, 3)];
    $("#target-score").value = profile.score;
    mocks = loadMocks(stream);
    renderExamOptions();
    updateScoreHelp();
    renderAll();
  });

  $("#analysis-form").addEventListener("submit", (event) => {
    event.preventDefault();
    profile = {
      ...profile,
      name: $("#student-name").value.trim() || "Student",
      city: $("#student-city").value.trim() || "Hyderabad",
      board: $("#student-board").value,
      stream: $("#student-stream").value,
      score: clamp(Number($("#target-score").value || 0), 0, STREAMS[$("#student-stream").value].max),
      budget: $("#student-budget").value,
      exams: $$(".exam-chip input:checked").map((input) => input.value)
    };
    if (!profile.exams.length) profile.exams = [...STREAMS[profile.stream].exams.slice(0, 2)];
    saveProfile();
    renderAll();
    $("#dashboard").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#target-score").addEventListener("input", () => {
    profile.score = clamp(Number($("#target-score").value || 0), 0, STREAMS[profile.stream].max);
    renderHeroSignals();
  });

  $("#reset-demo").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TEST_KEY);
    profile = loadProfile();
    mocks = loadMocks(profile.stream);
    setupForm();
    renderAll();
  });
}

function renderExamOptions() {
  const container = $("#exam-options");
  const available = STREAMS[profile.stream].exams;
  container.innerHTML = available.map((id) => {
    const exam = EXAMS[id];
    const checked = (profile.exams || []).includes(id) ? "checked" : "";
    return `
      <label class="exam-chip">
        <input type="checkbox" value="${id}" ${checked} />
        ${exam.name}
      </label>
    `;
  }).join("");
}

function updateScoreHelp() {
  const stream = STREAMS[profile.stream];
  $("#score-help").textContent = `For ${stream.label}, use ${stream.scoreLabel} out of ${stream.max}.`;
  $("#target-score").max = stream.max;
}

function renderHeroSignals() {
  const rank = rankFor(profile.stream, Number(profile.score) || STREAMS[profile.stream].defaultScore);
  $("#hero-score").textContent = `${readinessScore()}%`;
  $("#hero-lane").textContent = STREAMS[profile.stream].lane;
  const track = $(".score-panel .thin-track b");
  if (track) track.style.width = `${readinessScore()}%`;
  $("#dashboard-title").textContent = `${profile.name || "Your"} Class 12 strategy is ready.`;
  return rank;
}

function renderAll() {
  renderHeroSignals();
  renderStrategy();
  renderRank();
  renderColleges();
  renderMarks();
  renderResources();
  renderMentor();
  if (window.lucide) window.lucide.createIcons();
}

function renderStrategy() {
  const stream = STREAMS[profile.stream];
  const rank = rankFor(profile.stream, profile.score);
  const exams = selectedExams();
  $("#tab-strategy").innerHTML = `
    <div class="metric-grid">
      <article class="metric-card"><span>Readiness</span><strong>${readinessScore()}%</strong><p>${stream.lane}</p></article>
      <article class="metric-card"><span>Score input</span><strong>${formatNumber(profile.score)}</strong><p>${stream.scoreLabel} / ${stream.max}</p></article>
      <article class="metric-card"><span>Rank band</span><strong>${formatNumber(rank.rankMin)}</strong><p>to ${formatNumber(rank.rankMax)} estimated</p></article>
    </div>
    <div class="grid-2">
      <section class="panel-block">
        <h3>Recommended operating plan</h3>
        <ul>${stream.strategy.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="panel-block">
        <h3>Target exam stack</h3>
        <div class="exam-list">
          ${exams.map((exam) => `
            <article class="exam-card">
              <h3>${exam.name}<span class="pill">${exam.org}</span></h3>
              <p>${exam.fit}</p>
              <a href="${exam.url}" target="_blank" rel="noreferrer">Open official page</a>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderRank() {
  const stream = STREAMS[profile.stream];
  const rank = rankFor(profile.stream, profile.score);
  const percent = Math.round((profile.score / stream.max) * 100);
  const betterScore = clamp(Number(profile.score) + Math.round(stream.max * 0.07), 0, stream.max);
  const betterRank = rankFor(profile.stream, betterScore);
  $("#tab-rank").innerHTML = `
    <div class="panel-block">
      <h3>${stream.scoreLabel} predictor</h3>
      <p>Your current input is ${formatNumber(profile.score)} out of ${stream.max}. This places you in the ${rank.label} band.</p>
      <div class="rank-meter">
        <div class="rank-track"><b style="width:${percent}%"></b></div>
        <p><strong>Estimated rank:</strong> ${formatNumber(rank.rankMin)} to ${formatNumber(rank.rankMax)}</p>
      </div>
      <p>If you improve to ${formatNumber(betterScore)}, your band can move toward ${formatNumber(betterRank.rankMin)} to ${formatNumber(betterRank.rankMax)}.</p>
    </div>
    <div class="grid-2" style="margin-top:14px">
      <section class="panel-block">
        <h3>Score levers</h3>
        <ul>
          <li>Convert weak chapters into fixed daily problem blocks.</li>
          <li>Reduce negative marks by tagging mistake type after every mock.</li>
          <li>Use official PYQs before adding new books.</li>
        </ul>
      </section>
      <section class="panel-block">
        <h3>Counselling stance</h3>
        <p>Keep two safe, three target and two reach choices ready. Do final choice filling only after official seat matrix and opening-closing ranks are released.</p>
      </section>
    </div>
  `;
}

function renderColleges() {
  const rank = rankFor(profile.stream, profile.score);
  const colleges = COLLEGES[profile.stream] || [];
  $("#tab-colleges").innerHTML = `
    <div class="panel-block" style="margin-bottom:14px">
      <h3>College predictor</h3>
      <p>Built for exploration using score bands and common counselling routes. Final eligibility must be verified on official counselling portals.</p>
    </div>
    <div class="college-list">
      ${colleges.map((college) => {
        const status = statusForCollege(college, rank);
        return `
          <article class="college-card">
            <h3>${college.name}</h3>
            <div class="college-meta">
              <span>${college.city}</span>
              <span>${college.route}</span>
              <span class="status-pill ${status.className}">${status.label}</span>
            </div>
            <p>${college.note}</p>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderMarks() {
  const stream = STREAMS[profile.stream];
  const latest = mocks[mocks.length - 1] || { score: profile.score, max: stream.max };
  const first = mocks[0] || latest;
  const delta = latest.score - first.score;
  $("#tab-marks").innerHTML = `
    <div class="grid-2">
      <section class="panel-block">
        <h3>Mock tracker</h3>
        <form class="mock-form" id="mock-form">
          <input id="mock-label" placeholder="Mock label" />
          <input id="mock-score" type="number" min="0" max="${stream.max}" placeholder="Score / ${stream.max}" />
          <button type="submit">Add</button>
        </form>
        <div class="mock-history">
          ${mocks.map((mock) => `
            <article class="mock-card">
              <div><strong>${mock.label}</strong><p>${mock.exam}</p></div>
              <strong>${formatNumber(mock.score)} / ${mock.max}</strong>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel-block">
        <h3>Signal diagnosis</h3>
        <p><strong>Latest:</strong> ${formatNumber(latest.score)} / ${latest.max}</p>
        <p><strong>Trend:</strong> ${delta >= 0 ? "+" : ""}${formatNumber(delta)} marks from first mock.</p>
        <p>${delta >= 20 ? "Momentum is strong. Increase mock frequency and protect sleep." : "The trend needs sharper analysis. Fix one weak subject before adding more tests."}</p>
      </section>
    </div>
  `;
  $("#mock-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const score = clamp(Number($("#mock-score").value || 0), 0, stream.max);
    const label = $("#mock-label").value.trim() || `Mock ${mocks.length + 1}`;
    mocks.push({ label, exam: selectedExams()[0]?.name || stream.scoreLabel, score, max: stream.max });
    profile.score = score;
    $("#target-score").value = score;
    saveProfile();
    saveMocks();
    renderAll();
  });
}

function renderResources() {
  const list = RESOURCES.filter((resource) => resource.streams.includes(profile.stream));
  $("#tab-resources").innerHTML = `
    <div class="resource-list">
      ${list.map((resource) => `
        <article class="resource-card">
          <h3>${resource.title}</h3>
          <div class="college-meta"><span>${resource.kind}</span></div>
          <p>${resource.note}</p>
          <a href="${resource.url}" target="_blank" rel="noreferrer">Open resource</a>
        </article>
      `).join("")}
    </div>
  `;
}

function mentorAnswer(question) {
  const q = question.toLowerCase();
  const stream = STREAMS[profile.stream];
  const rank = rankFor(profile.stream, profile.score);
  if (q.includes("college") || q.includes("rank")) {
    return `Based on ${profile.score}/${stream.max}, your estimated band is ${formatNumber(rank.rankMin)} to ${formatNumber(rank.rankMax)}. Compare safe, target and reach colleges, then verify the final list on official counselling portals.`;
  }
  if (q.includes("exam")) {
    return `For ${profile.stream}, keep ${selectedExams().map((exam) => exam.name).slice(0, 3).join(", ")} as your current stack. One primary exam and one backup should get the most energy.`;
  }
  if (q.includes("resource") || q.includes("book") || q.includes("pdf")) {
    return `Start with NCERT and official PYQs. Add Vedantu, Physics Wallah or Unacademy only for weak topics, not as a replacement for solving previous papers.`;
  }
  if (q.includes("improve") || q.includes("marks")) {
    return `Your fastest improvement path is: analyze last 3 mocks, isolate one weak subject, solve topic-wise PYQs, then repeat a timed sectional test within 48 hours.`;
  }
  return `For ${stream.lane}, your current score suggests ${rank.label}. Keep the plan focused: official syllabus, PYQs, mock analysis and counselling verification.`;
}

function renderMentor() {
  $("#tab-mentor").innerHTML = `
    <section class="mentor-card">
      <h3>CareerOS Exam Mentor</h3>
      <p>Ask about exams, college ranges, resources, marks improvement or backup routes.</p>
      <div class="mentor-chat" id="mentor-chat">
        <div class="message bot">I have your stream, score, city and exam stack. Ask me what to do next.</div>
      </div>
      <div class="quick-prompts">
        <button data-question="Which exams should I focus on?">Exam focus</button>
        <button data-question="Which colleges are realistic?">College range</button>
        <button data-question="How do I improve marks fast?">Improve marks</button>
        <button data-question="Which resources should I use?">Resources</button>
      </div>
      <div class="mentor-input">
        <input id="mentor-question" placeholder="Ask your Class 12 strategy question..." />
        <button id="mentor-send">Ask</button>
      </div>
    </section>
  `;

  const ask = (question) => {
    if (!question.trim()) return;
    const chat = $("#mentor-chat");
    chat.insertAdjacentHTML("beforeend", `<div class="message user">${question}</div>`);
    chat.insertAdjacentHTML("beforeend", `<div class="message bot">${mentorAnswer(question)}</div>`);
    $("#mentor-question").value = "";
  };

  $("#mentor-send").addEventListener("click", () => ask($("#mentor-question").value));
  $("#mentor-question").addEventListener("keydown", (event) => {
    if (event.key === "Enter") ask($("#mentor-question").value);
  });
  $$(".quick-prompts button").forEach((button) => {
    button.addEventListener("click", () => ask(button.dataset.question));
  });
}

function setupTabs() {
  $$(".rail-link").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".rail-link").forEach((item) => item.classList.remove("active"));
      $$(".tab-view").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      $(`#tab-${button.dataset.tab}`).classList.add("active");
    });
  });
}

function setupScroll() {
  $$("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = $(button.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    $("#scroll-meter-bar").style.width = `${progress}%`;
  }, { passive: true });
}

function setupMotion() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".topbar", { y: -24, opacity: 0, duration: 0.7, ease: "power3.out" });
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.from(el, {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 84%" }
      });
    });
    gsap.to(".cockpit", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.18 });
  $$(".reveal").forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  setupForm();
  setupTabs();
  setupScroll();
  renderAll();
  setupMotion();
});
