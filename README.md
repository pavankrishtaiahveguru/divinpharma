# DIVIN PHARMA

DIVIN PHARMA is a Hyderabad-based pharmaceutical trading and supply business. This website presents its portfolio of Active Pharmaceutical Ingredients (APIs) and pharmaceutical intermediates, outlines its supply services, and helps businesses contact the team about product and sourcing requirements.

## Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Pages and Components](#pages-and-components)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Development](#installation-and-development)
- [Environment and Configuration](#environment-and-configuration)
- [Production Build and Deployment](#production-build-and-deployment)
- [Branding and Design](#branding-and-design)
- [Closing](#closing)

## About the Project

The site serves as a business-facing overview of DIVIN PHARMA and its pharmaceutical supply activities. Visitors can learn about the company, review API and intermediate listings, explore domestic supply and international export services, and make an enquiry through the published contact channels.

Product information is maintained in a local JavaScript catalogue at `src/data/products.js`. The website does not currently include a database or a product-management interface.

## Features

- Responsive layouts and navigation for mobile and desktop screens.
- Product catalogue grouped into Active Pharmaceutical Ingredients and pharmaceutical intermediates.
- Catalogue search by product name, CAS number, or grade; category filtering; A–Z and Z–A sorting; and batched result display.
- Product cards with available catalogue details and product-specific WhatsApp enquiry links.
- Direct WhatsApp enquiries, telephone links, email links, office address, business hours, and map directions.
- About, services, and contact information describing the business and its supply enquiries.
- Motion effects with reduced-motion preferences respected by key components.

The contact page includes an enquiry form that sends a `POST` request to `/api/contact`. No API route is included in this project, so form submission requires a backend endpoint to be implemented or connected. Direct phone, email, and WhatsApp links are available independently.

## Technology Stack

- **Next.js 16.4.2** with the App Router.
- **React 19.3.0** and **React DOM 19.3.0**.
- **Tailwind CSS 4** with the Tailwind Turbopack integration.
- **Framer Motion** for interface animation.
- **Lucide React** and **React Icons** for icons.
- **Geist Sans and Geist Mono**, loaded through `next/font/google`.
- **ESLint 9** with the Next.js Core Web Vitals configuration.
- React Compiler enabled in the Next.js configuration.

Versions and scripts are defined in `package.json`; `package-lock.json` is provided for npm installs.

## Pages and Components

### Website pages

- `/` — Home page with the hero, company overview, services, product showcase, differentiators, and enquiry call to action.
- `/about` — Company overview, values, and business commitments.
- `/services` — API and intermediate trading and supply, domestic distribution, and international export services.
- `/products` — Searchable and filterable API and intermediate catalogue.
- `/contact` — Contact details, business hours, office location, and enquiry form.
- Unmatched routes — Custom not-found page.

### Shared and home-page components

- `Navbar` and `Footer` provide site-wide navigation and contact information.
- `FloatingWhatsApp` provides a persistent WhatsApp contact link.
- `ProductCard` displays catalogue details and creates a product-specific enquiry link.
- `CTA`, `DevelopedByStaffArc`, and the components in `src/components/home/` support shared calls to action and the home page sections.

## Project Structure

```text
.
├── public/
│   ├── images/
│   │   ├── about/
│   │   └── home/
│   ├── logo/
│   └── staffarc-logo.avif
├── src/
│   ├── app/
│   │   ├── about/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── products/page.jsx
│   │   ├── services/page.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   └── page.js
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   └── layout/
│   ├── data/products.js
│   └── lib/animations.js
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
└── package.json
```

The `@/*` import alias maps to `src/*`. Static images, logos, and other public assets are served from `public/`.

## Prerequisites

- Node.js, using a version supported by the installed Next.js release.
- npm.

## Installation and Development

From the project root, install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The available project scripts are:

```bash
npm run dev    # Start the development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Serve the production build
```

Run `npm run build` before `npm run start`.

## Environment and Configuration

The current source does not read environment variables, so no `.env` file is required for the website as implemented. Next.js and Tailwind settings are in `next.config.mjs`, the `@/*` source alias is in `jsconfig.json`, and styling tokens and global styles are in `src/app/globals.css`.

The contact form expects a `POST /api/contact` endpoint, which is not present in the current project. Configure or implement that endpoint as part of the deployment if form submissions are required; no endpoint-specific environment variable is defined here.

## Production Build and Deployment

Build and run the production application with:

```bash
npm ci
npm run build
npm run start
```

Deploy to a hosting environment that supports running a Next.js production server. Use `npm run build` as the build command and `npm run start` to start the built application. Connect a `/api/contact` handler if the contact form is expected to deliver submissions. No static-export configuration is defined in this project.

## Branding and Design

The visual identity pairs DIVIN PHARMA's green, orange, and white palette with deep forest-green surfaces and soft, light-green section backgrounds. Key colors used throughout the site include:

- **Green:** `#087443`
- **Orange:** `#FF7900`
- **White:** `#FFFFFF`
- **Deep forest green:** `#10291F`
- **Light section background:** `#F5F9F6`

The interface uses the DIVIN PHARMA logo, Geist typography, responsive layouts, and restrained motion to support a clear business and product-focused presentation.

## Closing

DIVIN PHARMA brings its pharmaceutical product portfolio, supply services, and business contact channels together in one accessible website, guided by its commitment to connecting quality, trust, and pharmaceutical solutions.
