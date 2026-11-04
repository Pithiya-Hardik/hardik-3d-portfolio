# Pithiya Hardik — Interactive 3D Portfolio & Digital Resume

An interactive 3D portfolio and digital resume for **Pithiya Hardik**, Project Manager and Senior Python & ERPNext/Frappe Developer with **4 years and 8 months (4.8 Years)** of enterprise experience.

---

## 🌟 Highlights & Features

- **Interactive 3D WebGL Hero Canvas (Three.js):**
  - Holographic polyhedral crystal core with glowing lattice
  - Dynamic orbiting technology nodes (Python, Frappe, ERPNext, MariaDB, REST API, Bench)
  - 600+ cursor-responsive ambient particles with smooth inertial drag & touch orbit controls
  - Performance-optimized with `IntersectionObserver` auto-pausing when off-screen and CSS 3D fallback.
- **Verified LinkedIn Career Progression:**
  - **Minix Fintech Private Limited** (Dec 2025 - Present) — *Project Manager*
  - **Hybrowlabs Technologies** (Sep 2024 - Dec 2025) — *Senior ERPNext & Frappe Developer* (Meril Healthcare MNC)
  - **Sanskar Technolab Pvt. Ltd.** (May 2022 - Sep 2024) — *3-Stage Promotion: Python Trainee → ERPNext Developer → Senior Frappe Developer*
- **8 In-Depth Enterprise Case Studies:**
  - Meril Healthcare Manufacturing ERP (Exim buying & custom duties)
  - Minix IT Asset Tracking System (Code128 barcode labels & NSE Colocation servers)
  - eFRA Industries Production Suite (Weight calculators & Item Master auto-generation)
  - Zoom Chatbot & Notification App (Actionable message cards & ChatOps)
  - Wholesale Trading ERP Optimization (30% turnaround speedup)
  - Frappe LMS Dynamic Certificate Engine (QR verification)
  - Digital Library Management System (QR book circulation)
  - Corporate Travel Desk Control Tower (Option sourcing & SLA exceptions)
- **Interactive ERP Architecture Pipeline Visualizer:**
  - Client Layer ↔ API Gateway ↔ Application Core ↔ Async Queue (Redis) ↔ Database (MariaDB).
- **Recruiter-Ready Utilities:**
  - One-click Printable & PDF Resume (`window.print()` with custom print stylesheet `css/resume-print.css`).
  - Interactive Contact Hub with copy-to-clipboard for Email, Phone, LinkedIn, and GitHub.
  - Live clock indicator (Asia/Kolkata IST).

---

## 🛠️ Technology Stack

- **Core:** Semantic HTML5, Vanilla CSS3 (Custom Glassmorphism Design System, CSS Variables)
- **3D Graphics:** Three.js (r160 WebGL)
- **Architecture:** Zero-dependency, purely client-side static application
- **Hosting:** Vercel (Hobby Tier Free Plan)

---

## 🚀 Local Development & Preview

To run locally using Python's built-in HTTP server or any lightweight web server:

```bash
cd /Users/hardik/.gemini/antigravity-ide/scratch/hardik-3d-portfolio
python3 -m http.server 8080
```

Then open your browser at:
`http://localhost:8080`

---

## 🌐 Deploy to Vercel (Free 1-Click Setup)

1. Initialize git and push to GitHub:
   ```bash
   cd /Users/hardik/.gemini/antigravity-ide/scratch/hardik-3d-portfolio
   git init
   git add .
   git commit -m "feat: initial release of 3D portfolio & digital resume"
   git branch -M main
   git remote add origin https://github.com/Pithiya-Hardik/portfolio-3d.git
   git push -u origin main
   ```

2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository `portfolio-3d`.
4. Deploy! Vercel will automatically detect `vercel.json` and deploy it instantly with a free `*.vercel.app` domain.
