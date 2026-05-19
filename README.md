<div align="center">

```
 ██████╗ █████╗ ██████╗ ███████╗███████╗██████╗  ██████╗ ███████╗
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗██╔═══██╗██╔════╝
██║     ███████║██████╔╝█████╗  █████╗  ██████╔╝██║   ██║███████╗
██║     ██╔══██║██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗██║   ██║╚════██║
╚██████╗██║  ██║██║  ██║███████╗███████╗██║  ██║╚██████╔╝███████║
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

### ⚡ *From Career Confusion to Career Clarity* ⚡

<br/>

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://career-os-ai.vercel.app/)
[![Built With](https://img.shields.io/badge/Built%20With-HTML%20%2B%20CSS%20%2B%20JS%20%2B%20Node-465FFF?style=for-the-badge)](#)
[![AI Powered](https://img.shields.io/badge/AI-Puter.js%20%2B%20Career%20Intelligence-10b981?style=for-the-badge)](#)
[![Jobs API](https://img.shields.io/badge/Jobs-Jooble%20API-f59e0b?style=for-the-badge)](#)
[![Status](https://img.shields.io/badge/Status-Live%20%26%20Working-brightgreen?style=for-the-badge)](#)

<br/>

> *"CareerOS AI helps students stop preparing randomly and start growing with direction."*

<br/>

---

</div>

## 🌌 What is CareerOS AI?

**CareerOS AI** is an AI-powered career guidance and placement readiness platform for **Class 10, Class 12, undergraduate, and graduate students**.

It combines stream guidance, resume intelligence, skill assessment, skill-gap analysis, job discovery, saved jobs, application tracking, AI mock interviews, and personalized dashboards inside one unified career operating system.

Most students do not fail because they lack resources. They struggle because their career preparation is fragmented across too many disconnected platforms. CareerOS AI connects the journey from academic decisions to placement readiness.

<br/>

---

## 🚀 The Problem We Solved

> *Students have information everywhere, but direction nowhere.*

| 😓 Before CareerOS AI | ⚡ After CareerOS AI |
|----------------------|---------------------|
| Random career advice | Personalized guidance by student stage |
| Confusing stream decisions | Class 10 stream match and college suggestions |
| Unclear post-12th direction | Class 12 pathway and exam guidance |
| Resume feedback is manual | ATS-style resume analysis |
| Skills are learned randomly | Skill-gap based preparation |
| Jobs are searched separately | Live job discovery inside the platform |
| Interview practice is limited | AI mock interview experience |
| Progress is scattered | Unified dashboard and career workflow |

<br/>

---

## 🧠 Core Feature Suite

### `01` — 🎓 Class 10 Guidance Engine

> *"Choose the right stream with clarity, not pressure."*

- Collects student name, city, board, budget, interests, goals, and subject preferences
- Generates stream recommendations using deterministic scoring logic
- Shows best-fit stream, match score, percentile-style explanation, and alternate paths
- Provides college suggestions, courses, psychometric guidance, counsellors, and career paths
- Designed especially for students deciding after 10th

```
Student inputs:  City + Board + Interests + Goals + Subject strengths
       ↓
Scoring Engine: Stream fit calculation
       ↓
Output: Best stream + explanation + colleges + courses + next steps
```

---

### `02` — 🧭 Class 12 Career Pathway Planner

> *"Understand what comes after intermediate before choosing blindly."*

- Helps Class 12 students explore higher education options
- Supports pathways like engineering, medicine, commerce, management, design, law, and skill-based careers
- Gives direction for entrance exams such as JEE, EAMCET, NEET, CUET, CLAT, and related tracks
- Connects subject background with degree choices and future career outcomes

---

### `03` — 💼 Graduate Career Dashboard

> *"A complete placement readiness workspace for students and graduates."*

- Dashboard overview with career updates and readiness messages
- Resume upload and ATS-style analysis
- Resume history tracking
- Career intelligence and profile optimization
- Saved jobs and application tracking
- Mock interview access
- Profile management

---

### `04` — 📄 AI Resume Intelligence

> *"Know whether your resume is placement-ready."*

- Upload PDF, DOC, DOCX, TXT, JPG, or PNG resumes
- Extracts resume text and identifies skill signals
- Generates ATS-style score
- Detects skills, keywords, missing sections, and improvement areas
- Stores resume history for progress tracking

```
Resume Upload
     ↓
Text Extraction
     ↓
Skill + Keyword Detection
     ↓
ATS-style Score + Suggestions
     ↓
Dashboard Result + History
```

---

### `05` — 🧩 Skill Gap Intelligence

> *"Stop learning everything. Learn what your target role needs."*

- Compares current skills against target job-role expectations
- Identifies missing technologies and weak areas
- Supports role-based preparation for frontend, backend, full stack, AI/ML, cloud, data, and more
- Helps students prioritize learning with practical direction

---

### `06` — 🧪 Skill Test System

> *"Measure your real technical readiness."*

- Domain-based technical assessments
- Score, accuracy, correct answers, and performance feedback
- Helps students validate preparation before applying
- Works as a practical placement-readiness checkpoint

---

### `07` — 🔎 Live Job Discovery with Jooble API

> *"Real opportunities, not only static demo cards."*

- Fetches live jobs through Jooble API
- Search by role and location
- Normalizes job title, company, location, salary, type, apply link, and snippet
- Includes serverless Vercel API routes for deployed usage
- Keeps fallback handling for development reliability

```
User searches: "Frontend Developer" + "India"
       ↓
/api/jobs/search
       ↓
Jooble API
       ↓
Normalized jobs
       ↓
CareerOS Jobs Portal
```

---

### `08` — 🤖 AI Mock Interview

> *"Practice interviews with an interactive AI avatar experience."*

- Integrated LiveAvatar mock interview embed
- Supports microphone-based interview interaction
- Gives students a more realistic preparation experience than reading static questions
- Helps improve confidence before real placement interviews

---

### `09` — 🔐 Authentication and User Flow

> *"One login, multiple student journeys."*

- Google authentication flow
- Stage selection for Class 10, Class 12, undergraduate, and graduate users
- Auth-aware dashboard routes
- Logout and redirect support
- User profile data connected to dashboard behavior

<br/>

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                          CAREEROS AI PLATFORM                          │
├────────────────────────┬────────────────────────┬──────────────────────┤
│     FRONTEND LAYER     │      BACKEND LAYER     │   INTELLIGENCE LAYER │
│                        │                        │                      │
│ • Landing Page         │ • Express APIs         │ • Stream Scoring     │
│ • Class 10 Guidance    │ • Resume Server        │ • ATS Analysis       │
│ • Class 12 Planner     │ • Auth Server          │ • Skill Extraction   │
│ • Graduate Dashboard   │ • Vercel API Routes    │ • Skill Gap Logic    │
│ • Jobs Portal          │ • Saved Jobs APIs      │ • Job Matching       │
│ • Skill Test           │ • Profile APIs         │ • AI Guidance        │
│ • Mock Interview UI    │ • Dashboard APIs       │ • Interview Support  │
└────────────────────────┴────────────────────────┴──────────────────────┘
```

### Unified Career Intelligence Pipeline

```
Student Profile / Resume / Goals / Skills
        ↓
Data Validation + Parsing
        ↓
CareerOS Scoring and Matching Logic
        ↓
AI-Assisted Guidance and Recommendations
        ↓
Dashboard, Skill Gaps, Jobs, Interviews, and Career Paths
```

<br/>

---

## 🛠️ Technology Stack

<div align="center">

### Frontend
![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Chat%20History-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Serverless-000000?style=for-the-badge&logo=vercel&logoColor=white)

### AI and Integrations
![Puter](https://img.shields.io/badge/Puter.js-AI%20Assistant-10b981?style=for-the-badge)
![Jooble](https://img.shields.io/badge/Jooble-Live%20Jobs-f59e0b?style=for-the-badge)
![LiveAvatar](https://img.shields.io/badge/LiveAvatar-Mock%20Interview-6366f1?style=for-the-badge)
![Google Auth](https://img.shields.io/badge/Google-Authentication-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

<br/>

---

## 📦 Feature Map

```
CareerOS AI
│
├── 🎓 Class 10 Guidance          → Stream match + colleges + courses
├── 🧭 Class 12 Planner           → Degree paths + exams + career direction
├── 💼 Graduate Dashboard         → Placement readiness workspace
├── 📄 Resume Intelligence        → ATS score + skill extraction
├── 🧩 Skill Gap Analysis         → Missing skills for target roles
├── 🧪 Skill Test                 → Technical assessment and score
├── 🔎 Jobs Portal                → Jooble-powered live job search
├── 💾 Saved Jobs                 → Track opportunities
├── 📌 Application Tracker        → Manage placement journey
├── 🤖 AI Mock Interview          → LiveAvatar interview practice
├── 👤 Profile Optimization       → Career intelligence and profile inputs
└── 🔐 Authentication             → Google login and protected flows
```

---

## 💼 Real-World Impact

| 🎯 Student Need | ✅ CareerOS AI Solution |
|----------------|-------------------------|
| "What should I choose after 10th?" | Stream recommendation with explanation |
| "Which path fits me after 12th?" | Higher education and exam pathway planner |
| "Is my resume ready?" | ATS-style resume intelligence |
| "What skills am I missing?" | Role-based skill gap analysis |
| "Where can I find jobs?" | Live Jooble-powered job search |
| "How do I prepare for interviews?" | AI mock interview experience |
| "How do I track opportunities?" | Saved jobs and application tracker |

<br/>

---

## 🌐 Live Deployment

CareerOS AI is deployed on Vercel:

```text
https://career-os-ai.vercel.app/
```

<br/>

---

## 🗺️ Important Routes

| Route | Purpose |
| --- | --- |
| `/` | Main CareerOS AI landing page |
| `/guidance` | Class 10 guidance flow |
| `/class-12` | Class 12 career pathway flow |
| `/graduate` | Graduate landing experience |
| `/graduate/dashboard` | Graduate dashboard |
| `/jobs` | Jobs landing page |
| `/jobs/portal` | Live jobs portal |
| `/skill-test` | Skill test page |
| `/dashboard` | Dashboard route bridge |

<br/>

---

## 🗂️ Project Structure

```
CareerOS-AI/
│
├── api/                         # Vercel serverless APIs
│   └── jobs/                    # Jooble jobs search endpoints
│
├── auth-server/                 # Authentication, JWT, OAuth routes
│
├── resume-server/               # Resume upload and ATS analysis server
│
├── server/                      # Main jobs/profile/dashboard APIs
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── data/
│
├── client/src/
│   ├── pages/                   # Landing, dashboard, skill test
│   ├── components/              # Shared UI and logic modules
│   ├── jobs/                    # Jobs landing and portal code
│   ├── styles/                  # CareerOS styling system
│   └── data/                    # Interview prep/problem datasets
│
├── guidance/                    # Class 10 guidance React-style app
├── class-12/                    # Class 12 planning page
├── graduate/                    # Graduate route bridge
├── jobs/                        # Public jobs landing/portal routes
├── dashboard/                   # Dashboard route bridge
├── skill-test/                  # Skill-test route bridge
├── docs/                        # Code maps and documentation
├── index.html                   # Root landing bridge
└── vercel.json                  # Deployment routing config
```

<br/>

---

## ⚙️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Manju10092006/CareerOS-AI.git
cd CareerOS-AI

# 2. Install root dependencies
npm install

# 3. Install backend dependencies if needed
cd server && npm install
cd ../resume-server && npm install
cd ../auth-server && npm install

# 4. Start all backend services from root
npm run dev
```

This starts:

- Auth server on port `8000`
- Resume server on port `5001`
- Main jobs/API server on port `5000`

For local static preview, serve the project root and open:

```text
http://127.0.0.1:4184/
```

<br/>

---

## 🔮 What Makes CareerOS AI Different

```
Other platforms:   Show jobs OR build resumes OR provide content

CareerOS AI:       Understands the student's stage
                   Guides academic decisions
                   Analyzes resume readiness
                   Detects skill gaps
                   Finds live jobs
                   Supports mock interviews
                   Keeps everything in one career workflow
```

| Capability | Traditional Platforms | CareerOS AI |
|-----------|------------------------|-------------|
| Class 10 stream guidance | Limited | ✅ |
| Class 12 pathway planning | Scattered | ✅ |
| Resume analysis | Separate tool | ✅ |
| Skill gap detection | Rare | ✅ |
| Live job discovery | ✅ | ✅ |
| Mock interview practice | Separate tool | ✅ |
| Unified dashboard | ❌ | ✅ |
| End-to-end student journey | ❌ | ✅ |

<br/>

---

## 🧠 AI Usage Note

CareerOS AI does not train a foundation model from scratch. Instead, it builds a practical AI-powered application layer using:

- Resume parsing and keyword extraction
- Deterministic stream scoring
- Skill gap matching logic
- AI-assisted career guidance through Puter.js
- Live job intelligence through Jooble API
- LiveAvatar-based mock interview experience

This makes the platform realistic, deployable, and suitable for student-facing career workflows.

<br/>

---

<div align="center">

---

### ✦ Built for students. Designed for clarity. Powered by career intelligence. ✦

*CareerOS AI — The AI Operating System for Career Growth.*

---

![Node](https://img.shields.io/badge/Node.js-Express-green?style=flat-square)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20CSS%20JS-blue?style=flat-square)
![AI](https://img.shields.io/badge/AI-Puter.js-purple?style=flat-square)
![Jobs](https://img.shields.io/badge/Jobs-Jooble%20API-orange?style=flat-square)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square)

</div>
