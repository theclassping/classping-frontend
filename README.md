# ClassPing Frontend

ClassPing is a simple school-management interface for Indonesian kindergartens. It helps schools manage student records, monthly SPP payments, daily activity documentation, student assessments, and communication with guardians.

The frontend is divided into two focused portals:

- **ClassPing School** — for school administrators and teachers.
- **ClassPing Guardian** — for parents and guardians.

## Features

### School portal

- Dashboard with live Indonesian date and personalized greeting
- Weekly staff activity summary and priority tasks
- Student directory with class information
- Monthly SPP status, overdue payments, fines, and reminder workflow
- Daily activity reports with class and date filters
- Photo uploads and student tagging limited by class
- Student assessment management
- Formal WhatsApp payment-reminder preview

### Guardian portal

- Private activity feed for the guardian's own child
- Student assessment progress
- SPP due-date, payment-status, and late-fee notifications

## Project structure

```text
classping-frontend/
├── classping-school/     # Administrator and teacher portal
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── classping-guardian/   # Parent and guardian portal
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── README.md
```

## Demo accounts

| Role | Email | Password | School portal | Guardian portal |
| --- | --- | --- | :---: | :---: |
| Administrator | `admin@classping.id` | `admin123` | ✓ | ✓ |
| Teacher — Nia Ramadhani | `nia@classping.id` | `guru123` | ✓ | — |
| Parent — Rina Ramadhani | `parent@classping.id` | `parent123` | — | ✓ |

> These credentials are for the frontend prototype only. Authentication and data are currently simulated in the browser and must not be used as production security.

## Run locally

No package installation or build step is required. From the repository root, start a static server:

```bash
python3 -m http.server 4175
```

Then open:

- School portal: [http://localhost:4175/classping-school/](http://localhost:4175/classping-school/)
- Guardian portal: [http://localhost:4175/classping-guardian/](http://localhost:4175/classping-guardian/)

The portals can also be opened directly from their respective `index.html` files.

## Backend integration

The current prototype uses local JavaScript data. It is structured to be connected to the ClassPing backend for:

- JWT-based authentication and role authorization
- Student, class, assessment, and payment records
- Secure activity-photo storage and child-specific access control
- Scheduled WhatsApp reminders through an approved WhatsApp Business provider

## Current status

This repository contains a functional, responsive frontend prototype. Production deployment still requires backend API integration, server-side authorization, persistent storage, and secure media handling.
