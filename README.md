# PH Health Care — Smart Online Health Platform (Frontend)

[![Frontend](https://img.shields.io/badge/frontend-Next.js-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![Status](https://img.shields.io/badge/status-Production-ready-orange)]()
[![Author](https://img.shields.io/badge/author-Mostafiz-9cf)]()

> PH Health Care is a modern, accessible, and responsive frontend for an online health platform — built with Next.js, Tailwind CSS, and a focus on performance, accessibility, and clean UX. Patients can find doctors, book appointments, access telemedicine, and view medical records — effortlessly.

---

## 🚀 Key Highlights

- Fast, server-rendered pages with **Next.js** (App Router)
- Fully responsive UI using **Tailwind CSS**
- Clean component architecture and reusable UI primitives
- Accessibility-minded (keyboard navigation, ARIA attributes)
- SEO-friendly meta tags and Open Graph support
- Built with real-world production concerns: auth flows, error handling, and progressive enhancement

---

## 🧭 Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design & UX Notes](#design--ux-notes)
- [Accessibility & Performance](#accessibility--performance)
- [Testing](#testing)
- [Contributing](#contributing)
- [Deployments](#deployments)
- [License](#license)
- [Contact](#contact)

---

## 🎬 Demo

> Live demo: _(add your deployed URL here)_

---

## 🖼️ Screenshots

> Replace below links with your actual screenshots in `/public` or hosted assets.

- Hero / Landing: `screenshots/hero.png`  
- Doctor Card & Booking Modal: `screenshots/doctor-card.png`  
- Patient Dashboard: `screenshots/dashboard.png`

---

## ✨ Features

- Landing & Marketing pages with SEO and OG meta
- Role-aware UI: Patient, Doctor, Admin
- Doctor search, filter (specialty, rating, distance), and AI-match indicator
- Appointment booking flow (calendar, time slots)
- Telemedicine video/voice call integration (placeholder)
- Patient medical records & prescriptions viewer
- Notifications & toast alerts for actions
- Responsive navigation with mobile drawer
- Theming support (light/dark mode)

---

## 🧩 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + utility-first components
- **Icons:** lucide-react
- **State / Data:** React context / SWR / RTK Query (optionally)
- **Forms:** React Hook Form / Zod for validation
- **Auth (frontend):** NextAuth.js or custom JWT client
- **Testing:** Jest, React Testing Library
- **Linting:** ESLint, Prettier
- **CI/CD:** GitHub Actions (recommended)
- **Deployment:** Vercel / Netlify / Cloud provider

---

## ⚙️ Getting Started (Local)

1. Clone the repo:
   ```bash
   git clone https://github.com/mostafizdev01/ph-health-care-frontend.git
   cd ph-health-care-frontend
Install dependencies:

bash
Copy code
pnpm install
# or
npm install
# or
yarn
Create environment file:

bash
Copy code
cp .env.example .env
Fill in required variables (NEXT_PUBLIC_API_URL, NEXTAUTH_URL, etc.)

Run development server:

bash
Copy code
pnpm dev
# or
npm run dev
# or
yarn dev
Open http://localhost:3000

🔧 Scripts
json
Copy code
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write .",
  "test": "jest"
}
🗂️ Project Structure (recommended)
bash
Copy code
/app                # Next.js App Router pages & layout
/components         # Reusable UI components (Button, Card, Modal)
/hooks              # Custom React hooks (useAuth, useFetch)
/lib                # Utilities, API clients, constants
/styles             # Tailwind config & global CSS
/public             # Static assets & images
/tests              # Unit & integration tests
🎨 Design & UX Notes
Use large, legible type scale for accessibility.

Primary action (Appointment/Book) should stand out — recommended bg-blue-600 with white text.

Secondary action (View Profile) as outline for clear visual hierarchy.

Maintain consistent spacing and rounded corners (rounded-lg).

Use soft shadows for card elevation but avoid heavy gradients that reduce readability.

♿ Accessibility & Performance
All interactive elements have keyboard focus states and proper aria-* attributes.

Images include descriptive alt text.

Lighthouse target: > 90 Performance, > 90 Accessibility

Use next/image for optimized loading & responsive images.

Code-splitting and route-level lazy loading for heavier components (video chat, map).

✅ Testing
Unit and component tests with Jest + React Testing Library

Example:

bash
Copy code
pnpm test
Add E2E tests with Playwright or Cypress for booking flows

🤝 Contributing
Contributions are welcome! Please:

Fork the repository

Create a feature branch: git checkout -b feat/your-feature

Commit your changes: git commit -m "feat: describe change"

Push and open a pull request

Follow the project's linting & commit conventions. Add tests for new components or flows.

📦 Deployment
Recommended: Vercel (first-class Next.js support)

Connect your GitHub repo

Add environment variables in Vercel dashboard

Set build command: pnpm build and output: .next


✉️ Contact
Built with ♥ by Mostafiz
Project repo: https://github.com/mostafizdev01/ph-health-care-frontend
For questions or collaboration: your-mostafiz4372@gmail.com

