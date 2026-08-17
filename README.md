# Priority Roofing — Dallas · 2026 Digital Experience

A premium **multi-page MERN web application** for Priority Roofing Dallas — React + Vite frontend, Express + MongoDB (Mongoose) backend, with all business information sourced from the official website (priorityroofs.com).

## Stack

| Layer    | Tech |
|----------|------|
| Frontend | React 18 · Vite 5 · React Router 6 |
| Backend  | Express 4 · Mongoose 8 |
| Database | MongoDB (local on `27017`, or set `MONGODB_URI`) |
| Tooling  | npm workspaces-style scripts via `concurrently` |

## Project structure

```
├── package.json            # root: npm run dev starts server + client
├── server/                 # Express + Mongoose API
│   ├── index.js            # app entry, resilient DB connection
│   ├── seed.js             # seeds offices + reviews from official data
│   ├── models/             # Lead, Office, Review
│   ├── routes/             # /api/leads, /api/offices, /api/reviews
│   └── data/               # offices.js, reviews.js (official source data)
└── client/                 # Vite + React app
    ├── src/pages/          # 10 pages (Home, Residential, Commercial, Designer,
    │                       #   Storm Damage, Materials, Projects, About, Locations, Contact)
    ├── src/components/     # Nav, Footer, maps, form, reviews, storm stages, etc.
    ├── src/hooks/          # useReveal, useCount, usePageMeta, useMagnetic
    ├── src/data/           # content.js — ALL page content lives here
    └── public/assets/img/  # official Priority Roofing imagery
```

## Getting started

Prerequisites: **Node 18+** and **MongoDB** running locally (the app tolerates a missing DB — API routes fall back to seed data).

```bash
npm install                 # root (concurrently)
npm run seed                # populate MongoDB with offices + reviews
npm run dev                 # server :5000 + client :5173 (with /api proxy)
```

Then open **http://localhost:5173**.

Production build:

```bash
npm run build               # builds client → client/dist
npm start                   # Express serves dist + API on :5000
```

## Pages

1. **/** — Home: cinematic hero, certification ticker, intro, animated stats, free-inspection form, services overview, storm stages, materials, reviews, why-priority, CTA
2. **/residential** — Residential roofing
3. **/commercial** — Commercial roofing + systems
4. **/designer-roofing** — Designer roofing + premium systems
5. **/storm-damage** — Storm stages + insurance assistance
6. **/materials** — Interactive materials showcase + metal roofing
7. **/projects** — Portfolio gallery
8. **/about** — Team, certifications, promises, warranties, FAQ
9. **/locations** — Interactive US map (API-driven) + Greater Dallas area map
10. **/contact** — Inspection form → POST /api/leads (saved to MongoDB)

## API

| Method | Route         | Description                                        |
|--------|---------------|----------------------------------------------------|
| GET    | `/api/health` | Server + DB status                                 |
| GET    | `/api/offices`| Office locations (41 offices, from MongoDB)        |
| GET    | `/api/reviews`| Customer reviews + summary (5.0 · 746)             |
| POST   | `/api/leads`  | Save an inspection-form lead (MongoDB)             |
| GET    | `/api/leads`  | List recent leads (admin/debug)                    |

## Content accuracy

All business information was audited against the official Priority Roofing website (Dallas page, home, service pages, contact page):

- **Address** · 1420 W. Mockingbird Ln. Suite 540, Dallas, TX 75247
- **Phone** · 469-615-8193 · **Email** · office@priorityroofs.com
- **Hours** · Mon–Fri 9:00 AM – 5:00 PM, Sat–Sun closed
- **Reviews** · 5.0 rating, 746 reviews (Dallas) — shown in the hero, reviews section, and JSON-LD schema
- **Stats** · 9+ years, 22,500+ happy clients, 25,000+ roofs (labeled company-wide), 30+ offices
- **Certifications** · GAF Master Elite, Owens Corning Preferred Contractor, NRCA, UASRC, OSHA, The Good Contractors List ($10,000 guarantee)
- **Warranties** · 5–20 year labor warranty, 10-year residential labor + no-leak guarantee, product warranties as officially stated
- **Storm response** · within 24–48 hours after storms, hail or leaks (official claim)

### Editing content

Nearly all copy lives in **`client/src/data/content.js`** (services, materials, team, warranties, FAQs, gallery, stats). Offices/reviews live in **`server/data/`** (seed) and the same `offices.js`/`reviews.js` are served as API fallbacks.

To update the Dallas review count (e.g. when the official Google listing changes): edit `reviewCount`/`rating` in `client/src/data/content.js` and `server/data/reviews.js`, then re-run `npm run seed`.

## Notes

- All imagery is the company's own (downloaded from priorityroofs.com WordPress CDN) — swap for licensed assets before production.
- The inspection form posts to the local Express API. Wire it to the client's production form endpoint/CRM in `client/src/components/InspectionForm.jsx` (there is a NOTE marker).
- `prefers-reduced-motion` is respected throughout (preloader, reveals, counters, cursor, magnetic buttons, storm stages).
- The old single-page static build (`index.html`, `css/`, `js/`) is kept at the repo root for reference; the MERN app is the current product.
