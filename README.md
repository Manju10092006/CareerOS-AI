# CareerOS AI / CareerOS AI

This project contains the CareerOS guidance pages and the full CareerOS AI codebase inside the same repository.

The current root homepage opens the original CareerOS AI landing page from:

`client/src/pages/index.html`

## Where The Main Code Exists

| Area | Folder / File |
| --- | --- |
| Original CareerOS AI frontend | `client/src/` |
| CareerOS AI landing page | `client/src/pages/index.html` |
| CareerOS AI dashboard | `client/src/pages/dashboard/index.html` |
| Skill test page | `client/src/pages/skill-test.html` |
| CareerOS / jobs pages | `client/src/jobs/` |
| Frontend shared components | `client/src/components/` |
| Frontend styles | `client/src/styles/` |
| Main jobs/profile/dashboard API | `server/` |
| Resume analyzer API | `resume-server/` |
| Authentication / JWT / OAuth server | `auth-server/` |
| CareerOS Class 10 guidance page | `guidance/` |
| CareerOS Class 12 page | `class-12/` |
| Active Class 12 entry page | `class-12/index.html` |
| Local route bridge for dashboard | `dashboard/index.html` |
| Local route bridge for jobs | `jobs/index.html` |
| Local route bridge for skill test | `skill-test/index.html` |
| Local route bridge for graduate | `graduate/index.html` |

## Important Routes

When running the local static server on `http://127.0.0.1:4184`:

- `/` opens the CareerOS AI landing page.
- `/dashboard` opens the CareerOS AI dashboard.
- `/jobs` opens the CareerOS jobs page.
- `/skill-test` opens the CareerOS AI skill test.
- `/graduate` opens the CareerOS AI graduate dashboard.
- `/guidance` opens the CareerOS Class 10 guidance flow.
- `/class-12` opens the CareerOS Class 12 flow.

## Backend Services

The project keeps the CareerOS AI backend structure:

- `auth-server` handles authentication, sessions, JWT, and OAuth routes.
- `resume-server` handles ATS resume analysis.
- `server` handles jobs, saved jobs, profile, dashboard, resume history, chat, and matching APIs.

Run all backend services with:

```bash
npm run dev
```

This starts:

- Auth server on port `8000`
- Resume server on port `5001`
- Main jobs/API server on port `5000`

## Notes For Team Members

The CareerOS AI code is not only referenced from GitHub. It has been copied into this project repository under `client`, `server`, `resume-server`, and `auth-server`.

The file `CareerOS_README.md` keeps the original CareerOS AI README content for reference.

The root `index.html` is only a small redirect bridge so local `/` opens the original CareerOS AI landing page.
