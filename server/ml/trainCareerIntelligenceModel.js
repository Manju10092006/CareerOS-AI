const fs = require('fs');
const path = require('path');

process.env.CAREER_INTELLIGENCE_DISABLE_MODEL = '1';

const { analyzeCareerProfile, ROLE_LIBRARY } = require('../utils/careerIntelligenceEngine');

const TARGETS = [
    'overall',
    'ats',
    'profileStrength',
    'keywordOptimization',
    'technicalSkill',
    'communication',
    'resumeImpact',
    'projectQuality',
    'portfolio',
    'recruiterDiscoverability',
    'roleMatch'
];

const FEATURE_NAMES = [
    'bias',
    'urlScore',
    'headlineScore',
    'summaryScore',
    'atsScore',
    'keywordScore',
    'technicalScore',
    'communicationScore',
    'impactScore',
    'projectScore',
    'portfolioScore',
    'discoverabilityScore',
    'roleMatchScore',
    'matchedCoreRatio',
    'matchedAdjacentRatio',
    'suggestedPenalty',
    'contentRichness',
    'hasProfileContent',
    'qualityPrior'
];

function clamp(value, min = 0, max = 100) {
    return Math.max(min, Math.min(max, value));
}

function normalize(value = '') {
    return String(value).toLowerCase().replace(/[^a-z0-9+#.% ]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function featureVector(profile, result, qualityPrior) {
    const scores = result.scores || {};
    const role = ROLE_LIBRARY[profile.targetRole] || ROLE_LIBRARY['Full Stack Developer'];
    const matchedCoreRatio = (result.keywords?.matchedCore?.length || 0) / role.skills.length;
    const matchedAdjacentRatio = (result.keywords?.matchedAdjacent?.length || 0) / Math.max(1, role.adjacent.length);
    const suggestedPenalty = (result.keywords?.suggested?.length || 0) / (role.skills.length + role.adjacent.length);
    const content = [
        profile.resumeText,
        profile.linkedinHeadline,
        profile.linkedinSummary,
        profile.experienceText,
        profile.educationText,
        profile.githubText,
        profile.portfolioText,
        profile.certifications
    ].join(' ');
    const contentRichness = Math.min(1, normalize(content).length / 2400);
    const hasProfileContent = normalize(content).length > 20 ? 1 : 0;

    const values = {
        bias: 1,
        urlScore: (scores.linkedinUrl?.score || 0) / 100,
        headlineScore: (scores.linkedinHeadline?.score || 0) / 100,
        summaryScore: (scores.linkedinSummary?.score || 0) / 100,
        atsScore: (scores.ats?.score || 0) / 100,
        keywordScore: (scores.keywordOptimization?.score || 0) / 100,
        technicalScore: (scores.technicalSkill?.score || 0) / 100,
        communicationScore: (scores.communication?.score || 0) / 100,
        impactScore: (scores.resumeImpact?.score || 0) / 100,
        projectScore: (scores.projectQuality?.score || 0) / 100,
        portfolioScore: (scores.portfolio?.score || 0) / 100,
        discoverabilityScore: (scores.recruiterDiscoverability?.score || 0) / 100,
        roleMatchScore: (scores.roleMatch?.score || 0) / 100,
        matchedCoreRatio,
        matchedAdjacentRatio,
        suggestedPenalty,
        contentRichness,
        hasProfileContent,
        qualityPrior
    };

    return FEATURE_NAMES.map((name) => values[name] ?? 0);
}

function roleProfile(roleName, quality, variant) {
    const role = ROLE_LIBRARY[roleName];
    const coreCount = Math.max(0, Math.min(role.skills.length, Math.round((quality / 4) * role.skills.length)));
    const adjacentCount = Math.max(0, Math.min(role.adjacent.length, Math.round(((quality - 1) / 4) * role.adjacent.length)));
    const core = role.skills.slice(0, coreCount);
    const adjacent = role.adjacent.slice(0, adjacentCount);
    const title = role.titles[Math.abs(variant) % role.titles.length];
    const nameHandle = quality >= 2 ? `student-${roleName.toLowerCase().replace(/[^a-z]+/g, '-')}-${variant}` : `x${variant}932_${roleName.slice(0, 2)}`;
    const metric = quality >= 3 ? `improved performance by ${18 + variant * 3}% for ${120 + variant * 40}+ users` : '';
    const deployment = quality >= 2 ? 'deployed live demo, GitHub README, API documentation, dashboard screenshots' : '';
    const collaboration = quality >= 3 ? 'collaborated with teammates, documented decisions, presented demo to mentors' : '';

    return {
        targetRole: roleName,
        linkedinUrl: quality === 0 ? '' : `https://www.linkedin.com/in/${nameHandle}`,
        linkedinHeadline: quality >= 1
            ? `${roleName} | ${core.slice(0, 4).join(' | ')} | ${title}`
            : 'Student looking for jobs',
        linkedinSummary: quality >= 2
            ? `I am focused on ${roleName} work with hands-on projects in ${core.concat(adjacent).slice(0, 8).join(', ')}. I built, developed and deployed practical systems. ${metric} ${collaboration}`
            : 'I am a student and I like technology.',
        resumeText: quality >= 1
            ? `Education: BTech Computer Science. Skills: ${core.join(', ')}. Projects: ${quality >= 2 ? `Built ${roleName} platform using ${core.slice(0, 6).join(', ')}. ${metric}. ${deployment}` : 'Basic project work.'}`
            : 'Education student.',
        experienceText: quality >= 3
            ? `Implemented production-style modules, integrated authentication, optimized APIs, wrote tests and ${metric}.`
            : quality >= 1 ? 'Completed college projects and internships.' : '',
        educationText: 'B.Tech Computer Science and Machine Learning',
        githubText: quality >= 2 ? `GitHub repositories with ${deployment}, commits, pull request notes and architecture.` : '',
        portfolioText: quality >= 3 ? `Portfolio has live case study, tech stack, metrics, demo, screenshots and project architecture for ${roleName}.` : '',
        certifications: quality >= 2 ? core.concat(adjacent).slice(0, 5).join(', ') : ''
    };
}

function labelFor(profile, result, quality) {
    const role = ROLE_LIBRARY[profile.targetRole] || ROLE_LIBRARY['Full Stack Developer'];
    const matchedCoreRatio = (result.keywords?.matchedCore?.length || 0) / role.skills.length;
    const matchedAdjacentRatio = (result.keywords?.matchedAdjacent?.length || 0) / Math.max(1, role.adjacent.length);
    const qualityBase = [12, 34, 58, 78, 92][quality];
    const urlScore = result.scores.linkedinUrl.score;
    const headline = result.scores.linkedinHeadline.score;
    const summary = result.scores.linkedinSummary.score;
    const impact = result.scores.resumeImpact.score;
    const project = result.scores.projectQuality.score;
    const portfolio = result.scores.portfolio.score;
    const roleFit = Math.round(matchedCoreRatio * 72 + matchedAdjacentRatio * 18 + quality * 2.5);

    return {
        overall: clamp(qualityBase * 0.42 + urlScore * 0.08 + headline * 0.1 + summary * 0.1 + roleFit * 0.14 + impact * 0.08 + project * 0.08),
        ats: clamp(qualityBase * 0.3 + matchedCoreRatio * 45 + impact * 0.15 + project * 0.1),
        profileStrength: clamp(qualityBase * 0.45 + headline * 0.1 + summary * 0.12 + project * 0.13 + portfolio * 0.1 + urlScore * 0.1),
        keywordOptimization: clamp(matchedCoreRatio * 78 + matchedAdjacentRatio * 16 + quality),
        technicalSkill: clamp(matchedCoreRatio * 70 + matchedAdjacentRatio * 20 + project * 0.1),
        communication: clamp(qualityBase * 0.38 + summary * 0.38 + (quality >= 3 ? 18 : 4)),
        resumeImpact: clamp(qualityBase * 0.32 + impact * 0.54 + (quality >= 3 ? 12 : 0)),
        projectQuality: clamp(qualityBase * 0.28 + project * 0.52 + portfolio * 0.2),
        portfolio: clamp(portfolio * 0.76 + (quality >= 3 ? 18 : quality * 3)),
        recruiterDiscoverability: clamp(urlScore * 0.12 + headline * 0.18 + summary * 0.16 + roleFit * 0.28 + portfolio * 0.12 + qualityBase * 0.14),
        roleMatch: clamp(roleFit * 0.74 + project * 0.16 + qualityBase * 0.1)
    };
}

function trainLinearModel(rows, targetName) {
    const weights = new Array(FEATURE_NAMES.length).fill(0);
    const learningRate = 0.035;
    const l2 = 0.0007;
    const epochs = 2600;

    for (let epoch = 0; epoch < epochs; epoch += 1) {
        const gradients = new Array(weights.length).fill(0);
        for (const row of rows) {
            const prediction = row.x.reduce((sum, value, index) => sum + value * weights[index], 0);
            const error = prediction - row.y[targetName] / 100;
            row.x.forEach((value, index) => {
                gradients[index] += error * value;
            });
        }

        for (let i = 0; i < weights.length; i += 1) {
            const regularization = i === 0 ? 0 : l2 * weights[i];
            weights[i] -= learningRate * ((gradients[i] / rows.length) + regularization);
        }
    }

    const mae = rows.reduce((sum, row) => {
        const prediction = clamp(row.x.reduce((acc, value, index) => acc + value * weights[index], 0) * 100);
        return sum + Math.abs(prediction - row.y[targetName]);
    }, 0) / rows.length;

    return { weights: weights.map((value) => Number(value.toFixed(6))), mae: Number(mae.toFixed(3)) };
}

function buildTrainingRows() {
    const rows = [];
    Object.keys(ROLE_LIBRARY).forEach((roleName) => {
        for (let quality = 0; quality <= 4; quality += 1) {
            for (let variant = 1; variant <= 9; variant += 1) {
                const profile = roleProfile(roleName, quality, variant);
                const result = analyzeCareerProfile(profile);
                rows.push({
                    x: featureVector(profile, result, quality / 4),
                    y: labelFor(profile, result, quality)
                });
            }
        }
    });
    return rows;
}

function main() {
    const rows = buildTrainingRows();
    const targets = {};
    TARGETS.forEach((targetName) => {
        targets[targetName] = trainLinearModel(rows, targetName);
    });

    const model = {
        name: 'CareerOS Career Intelligence Supervised Calibration Model',
        version: '1.0.0',
        trainedAt: new Date().toISOString(),
        trainingRows: rows.length,
        modelType: 'ridge-linear-regression',
        featureNames: FEATURE_NAMES,
        targets,
        notes: 'Local supervised model trained on curated recruiter-style synthetic profile examples for hackathon/demo scoring. Replace training rows with real labeled recruiter data when available.'
    };

    const outputPath = path.join(__dirname, 'career-intelligence-model.json');
    fs.writeFileSync(outputPath, JSON.stringify(model, null, 2));
    console.log(`Trained ${Object.keys(targets).length} targets on ${rows.length} examples.`);
    console.log(`Model saved: ${outputPath}`);
    console.log(Object.fromEntries(Object.entries(targets).map(([name, value]) => [name, value.mae])));
}

main();
