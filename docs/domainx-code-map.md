# CareerOS AI Code Map

Use this document when someone asks where each feature is implemented.

## Frontend

- Landing page: `client/src/pages/index.html`
- Dashboard page: `client/src/pages/dashboard/index.html`
- Skill test page: `client/src/pages/skill-test.html`
- Jobs landing/listing pages: `client/src/jobs/index.html`, `client/src/jobs/jobs.html`
- Saved jobs page: `client/src/jobs/saved-jobs.html`
- Auth pages: `client/src/pages/signin.html`, `client/src/pages/signup.html`
- Dashboard logic: `client/src/components/dashboard-script.js`
- Resume builder logic: `client/src/components/build-resume.js`
- Job search logic: `client/src/components/find-jobs.js`
- Saved jobs logic: `client/src/components/dashboard-saved-jobs.js`
- Resume history logic: `client/src/components/resume-history.js`
- Global auth/token logic: `client/src/components/global-auth.js`
- Main visual CSS: `client/src/styles/`

## Backend

- Main API entry: `server/server.js`
- Jobs routes: `server/routes/jobRoutes.js`
- Saved jobs routes: `server/routes/saved_jobs.js`
- Dashboard routes: `server/routes/dashboardRoutes.js`
- Profile routes: `server/routes/profileRoutes.js`
- Resume history routes: `server/routes/resumeHistoryRoutes.js`
- Chat routes: `server/routes/chatRoutes.js`
- Job matching routes: `server/routes/matchJobsRoutes.js`
- MongoDB connection helper: `server/utils/db.js`
- Redis-safe helpers: `server/middleware/redisSafe.js`

## Resume Analyzer

- Resume server entry: `resume-server/server.js`
- ATS routes: `resume-server/routes/atsRoutes.js`
- Resume controller: `resume-server/controllers/atsController.js`
- File upload middleware: `resume-server/middleware/upload.js`
- Resume parsing utilities: `resume-server/utils/`

## Auth

- Auth server entry: `auth-server/server.js`
- Token helper: `auth-server/utils/tokens.js`
- Local dev environment example: `auth-server/.env.example`

## Route Bridges

These are small local aliases so simple routes work in the browser:

- `/dashboard`: `dashboard/index.html`
- `/jobs`: `jobs/index.html`
- `/skill-test`: `skill-test/index.html`
- `/signin`: `signin/index.html`
- `/signup`: `signup/index.html`
- `/graduate`: `graduate/index.html`

## CareerOS Additions

- Class 10 guidance flow: `guidance/`
- Deterministic Class 10 scoring engine: `guidance/scoring-engine.js`
- Class 10 scoring test: `tests/class10-scoring.test.js`
- Class 12 page: `class-12/`

## Deployment Routing

`vercel.json` maps clean public routes to the correct internal CareerOS AI pages.
