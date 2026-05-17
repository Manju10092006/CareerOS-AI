(function (global) {
  const STREAM_WEIGHTS = {
    ai: { mpc: 4, polytechnic: 3, commerce: 1 },
    medicine: { bipc: 4, paramedical: 3, mpc: 1 },
    finance: { commerce: 4, humanities: 1 },
    law: { humanities: 4, commerce: 2 },
    design: { humanities: 3, commerce: 1, polytechnic: 1 },
    hands: { polytechnic: 4, mpc: 2, paramedical: 1 },
    care: { paramedical: 4, bipc: 3, humanities: 1 },
    hospitality: { paramedical: 3, commerce: 2, humanities: 1 }
  };

  const GOAL_STREAMS = {
    engineering: "mpc",
    engineer: "mpc",
    doctor: "bipc",
    finance: "commerce",
    ca: "commerce",
    civil: "humanities",
    lawyer: "humanities",
    designer: "humanities",
    entrepreneur: "commerce",
    govt: "humanities",
    job: "polytechnic",
    healthtech: "paramedical",
    diploma: "polytechnic"
  };

  const STREAM_SCORE_SPREAD = {
    mpc: 10,
    bipc: 5,
    commerce: -2,
    humanities: 1,
    polytechnic: -6,
    paramedical: -10
  };

  function textHash(value = "") {
    return String(value).split("").reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
  }

  function getCollegeBudgetScore(college, budgetId = "any") {
    if (budgetId === "any") return 8;
    if (college.budget === budgetId) return 16;
    if (budgetId === "low" && college.budget === "mid") return 4;
    if (budgetId === "mid" && (college.budget === "low" || college.budget === "high")) return 8;
    if (budgetId === "high" && college.budget === "mid") return 10;
    return 0;
  }

  function calcScores(profile = {}) {
    const scores = {
      mpc: 32,
      bipc: 32,
      commerce: 32,
      humanities: 32,
      polytechnic: 32,
      paramedical: 32
    };

    (profile.interests || []).forEach((interestId) => {
      Object.entries(STREAM_WEIGHTS[interestId] || {}).forEach(([stream, weight]) => {
        scores[stream] += weight * 7;
      });
    });

    (profile.goals || []).forEach((goalId) => {
      const stream = GOAL_STREAMS[goalId];
      if (stream) scores[stream] += 18;
    });

    const academics = profile.academics || {};
    const math = Number(academics.math || 7);
    const science = Number(academics.science || 7);
    const biology = Number(academics.biology || 7);
    const english = Number(academics.english || 7);
    const social = Number(academics.social || 7);

    scores.mpc += math * 3.6 + science * 2.4;
    scores.bipc += biology * 3.7 + science * 2.2;
    scores.commerce += math * 2 + english * 1.8 + social * 1.8;
    scores.humanities += english * 2.8 + social * 3.2;
    scores.polytechnic += math * 2.3 + science * 2 + (profile.learningStyle === "practical" ? 18 : 0);
    scores.paramedical += biology * 2.2 + science * 1.8 + (profile.learningStyle === "practical" ? 12 : 0);

    if (profile.budget === "low") {
      scores.polytechnic += 8;
      scores.paramedical += 6;
    }

    return Object.fromEntries(
      Object.entries(scores).map(([key, value]) => {
        const profileSpread = (Math.abs(textHash(`${key}-${profile.city || ""}-${(profile.interests || []).join("|")}-${(profile.goals || []).join("|")}`)) % 5) - 2;
        const citySpread = (Math.abs(textHash(profile.city || "")) % 5) - 2;
        return [
          key,
          Math.max(46, Math.min(96, Math.round(44 + (value + (STREAM_SCORE_SPREAD[key] || 0) - 36) * 0.38 + profileSpread + citySpread)))
        ];
      })
    );
  }

  function rankStreams(scores = {}) {
    return Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([id, score]) => ({ id, score }));
  }

  function collegeMatchScore(college, profile = {}, targetStreams = [], streamId = null, budgetOverride = null) {
    const streams = Array.isArray(college.streams) ? college.streams : [];
    const streamOverlap = streams.filter((stream) => targetStreams.includes(stream)).length;
    const streamFit = streamOverlap ? 18 + Math.min(12, streamOverlap * 5) : 0;
    const exactTop = streamId && streams.includes(streamId) ? 8 : 0;
    const cityFit = college.city === (profile.city || "hyderabad") ? 10 : 0;
    const budgetFit = getCollegeBudgetScore(college, budgetOverride || profile.budget || "any");
    const boardFit = (profile.board === "state" && (college.boards || []).some((board) => /ssc|hsc|tsbie|state|pu|hse|gseb|kerala|cbse/i.test(board))) ? 4 : 2;
    const verified = college.verified ? 4 : 0;
    const depth = Math.min(5, streams.length);
    const profileVariation = Math.abs(textHash(`${(profile.interests || []).join("|")}-${(profile.goals || []).join("|")}-${profile.learningStyle || ""}`)) % 5;
    const collegeSignal = (Math.abs(textHash(`${college.name}-${college.source || ""}`)) % 17) - 8;
    const areaSignal = (Math.abs(textHash(`${college.area || ""}-${college.fee || ""}`)) % 9) - 4;
    const competitionPenalty = Math.abs(textHash(`${college.area || ""}-${college.fee || ""}-${college.level || ""}`)) % 6;
    const raw = 28 + cityFit + streamFit * 0.78 + exactTop + budgetFit * 0.55 + boardFit + verified + depth + profileVariation + collegeSignal + areaSignal - competitionPenalty;
    return Math.max(54, Math.min(96, Math.round(raw)));
  }

  const api = { calcScores, rankStreams, collegeMatchScore, getCollegeBudgetScore, textHash };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.CareerOS10Scoring = api;
})(typeof window !== "undefined" ? window : globalThis);
