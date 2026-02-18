🎧 TappAV Frontend Prototype

A responsive frontend prototype of the TappAV audio-visual ecommerce website built using React and plain CSS.

The project focuses on UI structure, navigation logic and user experience rather than backend functionality.

🚀 Live Preview

(Add your Vercel link here)

🧩 Pages Included
Home Page

Hero banner with primary call-to-action

Category navigation

Featured products section

Clean responsive layout

Product Page (Dynamic)

Image gallery with thumbnail switch

Key feature highlights

Technical specification table

Mock cart and buy actions

🧠 Key Concepts Demonstrated

Component-based architecture

Dynamic routing using URL parameters

Reusable product template

SPA navigation (no page reload)

Responsive layout using plain CSS

Structured product information hierarchy

🗺 Routing Structure
Route Description
/ Home Page
/product/epson Epson projector product
/product/headphone Headphone product
/product/speaker Speaker product

The product page is a reusable layout that loads different content based on the route parameter.

🛠 Tech Stack

React (Vite)

React Router DOM

CSS (no frameworks)

📦 Installation
npm install
npm run dev

📐 Design Approach

The homepage guides the user from brand awareness → category discovery → product exploration.

Instead of creating multiple static pages, a single reusable product template was implemented using dynamic routing.
This mimics real ecommerce behavior while keeping the project frontend-only.

The layout was designed mobile-first to ensure responsiveness without relying on UI libraries.
