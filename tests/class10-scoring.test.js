const assert = require("node:assert/strict");
const { calcScores, rankStreams, collegeMatchScore } = require("../guidance/scoring-engine.js");

const sampleCollege = {
  name: "CareerOS Test Junior College",
  city: "hyderabad",
  streams: ["mpc", "bipc", "commerce"],
  boards: ["TSBIE"],
  budget: "mid",
  verified: true
};

const profiles = [
  {
    name: "Engineering profile",
    city: "hyderabad",
    board: "state",
    budget: "mid",
    interests: ["ai", "hands"],
    goals: ["engineer"],
    learningStyle: "balanced",
    academics: { math: 10, science: 9, biology: 4, english: 7, social: 6 }
  },
  {
    name: "Medical profile",
    city: "kochi",
    board: "state",
    budget: "mid",
    interests: ["medicine", "care"],
    goals: ["doctor"],
    learningStyle: "balanced",
    academics: { math: 6, science: 9, biology: 10, english: 7, social: 6 }
  },
  {
    name: "Commerce profile",
    city: "mumbai",
    board: "state",
    budget: "low",
    interests: ["finance", "law"],
    goals: ["ca"],
    learningStyle: "practical",
    academics: { math: 8, science: 5, biology: 4, english: 8, social: 9 }
  }
];

const ranked = profiles.map((profile) => rankStreams(calcScores(profile))[0]);

assert.equal(ranked[0].id, "mpc", "engineering profile should prefer MPC");
assert.equal(ranked[1].id, "bipc", "medical profile should prefer BiPC");
assert.equal(ranked[2].id, "commerce", "commerce profile should prefer Commerce");

const topScores = ranked.map((result) => result.score);
assert.equal(new Set(topScores).size, 3, "sample profiles should not collapse into identical scores");

const collegeScores = profiles.map((profile) => {
  const targets = rankStreams(calcScores(profile)).slice(0, 3).map((item) => item.id);
  return collegeMatchScore(sampleCollege, profile, targets);
});

assert.equal(new Set(collegeScores).size, 3, "college match scores should vary by profile and city");
assert.ok(collegeScores.every((score) => score >= 54 && score <= 96), "college scores should stay inside the display range");

const comparableHyderabadColleges = [
  {
    name: "Little Flower Junior College",
    city: "hyderabad",
    area: "Uppal",
    type: "Junior College",
    level: "After 10th",
    streams: ["mpc", "bipc", "commerce"],
    boards: ["TSBIE"],
    budget: "mid",
    fee: "Rs. 35K - 85K/year",
    verified: true,
    source: "https://lfjc.co.in/courses.php"
  },
  {
    name: "Vignana Jyothi Junior College",
    city: "hyderabad",
    area: "Jubilee Hills",
    type: "Junior College",
    level: "After 10th",
    streams: ["mpc", "bipc", "commerce"],
    boards: ["TSBIE"],
    budget: "mid",
    fee: "Rs. 45K - 1.2L/year",
    verified: true,
    source: "https://www.vjjc.ac.in/"
  },
  {
    name: "Sri Amogha Junior College",
    city: "hyderabad",
    area: "SR Nagar",
    type: "Junior College",
    level: "After 10th",
    streams: ["mpc", "bipc", "commerce", "humanities"],
    boards: ["TSBIE"],
    budget: "mid",
    fee: "Rs. 50K - 1.4L/year",
    verified: true,
    source: "https://sajc.edu.in/"
  },
  {
    name: "Villa Marie Junior College for Girls",
    city: "hyderabad",
    area: "Somajiguda",
    type: "Junior College",
    level: "After 10th",
    streams: ["mpc", "bipc", "commerce"],
    boards: ["TSBIE"],
    budget: "mid",
    fee: "Rs. 40K - 1L/year",
    verified: true,
    source: "https://www.villamariejrcollege.com/"
  }
];

const hyderabadMpcScores = comparableHyderabadColleges.map((college) =>
  collegeMatchScore(college, profiles[0], ["mpc"], "mpc")
);

assert.ok(new Set(hyderabadMpcScores).size >= 3, "similar Hyderabad colleges should not collapse into one percentage");
assert.ok(!hyderabadMpcScores.every((score) => score === 97), "college scores should not all hit the old 97% ceiling");

console.log("Class 10 scoring tests passed", { topScores, collegeScores, hyderabadMpcScores });
