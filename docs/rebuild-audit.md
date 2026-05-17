# CareerOS AI Rebuild Audit

## Current Product Surfaces

- `index.html` is the public landing page and authentication/onboarding surface.
- `guidance/` is the Class 10 stream, college and counselling experience.
- `class-12/` is the intermediate guidance workspace.
- `graduate/` is the Graduate command center that now adapts CareerOS AI and CareerOS feature direction into the CareerOS visual system.

## Source Modules To Migrate

### CareerOS AI

- Domain-based skill assessment engine.
- Exploratory skill discovery test.
- Skill intelligence dashboard.
- Resume intelligence workflow.
- Job discovery and matching engine.
- Saved jobs and application tracker.
- AI career mentor/chat assistant.

### CareerOS

- Auth service with Google OAuth and JWT issue/verify flow.
- Main jobs API server.
- Resume/ATS analysis server.
- MongoDB models for profile, resume history, resume result and saved jobs.
- Redis-safe cache wrappers so Redis failures do not break local/demo mode.
- Jooble job search API integration.
- Dashboard overview endpoint.

## API Contracts To Preserve

| Area | Endpoint | Purpose | Integration Decision |
| --- | --- | --- | --- |
| Auth | `GET /auth/google` | Start Google OAuth | Reuse in full backend mode |
| Auth | `GET /auth/google/callback` | OAuth callback and JWT issue | Reuse with CareerOS callback URL |
| Auth | `GET /auth/me` | Read signed-in user | Reuse for profile hydration |
| Auth | `GET /auth/logout` | Logout server session | Pair with frontend local logout |
| Resume | `POST /api/resume/ats` | Resume upload and ATS analysis | Reuse; frontend keeps local fallback |
| Resume | `GET /api/resume/history` | Resume history | Use for Graduate dashboard |
| Resume | `GET /api/resume/last` | Latest resume | Use for readiness card |
| Jobs | `GET /api/jobs` | Trending jobs | Use when API key exists |
| Jobs | `POST /api/jobs/search` | Job search | Use for opportunity search |
| Saved Jobs | `GET/POST/DELETE /api/saved-jobs` | Save/unsave/list jobs | Use for tracker |
| Dashboard | `GET /api/dashboard/overview` | Dashboard summary | Use after JWT login |
| Profile | `GET/POST /api/profile` | Career profile | Use for location, salary and skills |

## Data Models

- `UserProfile`: stores target role, location, skills, experience, job type and profile metadata.
- `UserResume`: stores uploaded resume metadata and latest ATS score.
- `ResumeHistory`: stores full ATS result history.
- `ResumeResult`: stores parsed resume output.
- `SavedJob`: stores saved opportunity data with user/job uniqueness.

## Current Bugs And Fix Strategy

- Identical college percentages: move score generation into a deterministic profile-aware engine with school stream fit, budget, city, cutoff/ranking and college verification signals.
- Class 10 results too short: show 20 recommendations by default and expose filters.
- Graduate page previously looked disconnected: re-skin CareerOS/CareerOS features into CareerOS premium light SaaS UI.
- Redis console spam in local mode: use safe wrappers and optional cache behavior.
- Auth logout missing: frontend clears all known token/session keys and resets navigation state.

## Migration Plan

1. Keep the current static CareerOS deployment working while adding API-compatible frontend contracts.
2. Implement deterministic local engines first so the product works during demos without backend/API keys.
3. Wire backend endpoints progressively behind feature detection.
4. Keep Redis optional and never block UI when Redis or Jooble are unavailable.
5. Verify each route locally before any push or Vercel deploy.
