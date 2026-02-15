# Implementatieplan iborrow.nl 🏗️

Dit document beschrijft de architectuur en stapsgewijze uitvoering voor het iborrow.nl platform.

## 🛠️ Stack Overzicht
- **Frontend:** Next.js (App Router, Tailwind CSS, shadcn/ui)
- **Backend API:** Hono (gehost via Next.js routes of standalone Node.js)
- **Database:** PostgreSQL met Prisma ORM
- **Storage:** Hetzner Object Storage (S3 compatibel) voor media/foto's
- **Authenticatie:** BetterAuth
- **Hosting:** Hetzner Cloud (beheerd via `hcloud` & `tipctl`)

## 📋 Deeltaken

### Fase 1: Fundament & Infrastructuur
- [x] 1.1 Project initialisatie (Next.js, TypeScript, Tailwind)
- [x] 1.2 Database schema ontwerp & Prisma setup
- [x] 1.3 BetterAuth integratie (Auth routes & middleware)
- [x] 1.4 Hetzner Object Storage client configuratie (S3 SDK)

### Fase 2: Core Backend & API
- [x] 2.1 Hono API router setup
- [x] 2.2 Items management (CRUD voor leen-items)
- [x] 2.3 User profiles & Reputatie systeem
- [x] 2.4 Zoekfunctionaliteit (PostgreSQL Full Text Search)

### Fase 3: Frontend & UX
- [x] 3.1 Landing page & Dashboard
- [x] 3.2 Item detail pagina
- [x] 3.3 Comment-systeem onder items's & Upload flow
- [x] 3.3 Comment-systeem onder items tussen leners en uitleners

### Fase 4: Deployment & Ops
- [x] 4.1 Dockerization van de applicatie
- [x] 4.2 CI/CD pipeline setup (GitHub Actions naar Hetzner)
- [x] 4.3 Monitoring & Logging setup

---
*Status Updates worden bijgehouden in Progress-log.md*
