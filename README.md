TappAV Frontend Assignment

This project is a frontend prototype for the TappAV website built using React and plain CSS.
The goal of the assignment was to demonstrate UI/UX thinking, page structure, responsiveness and component based architecture rather than backend functionality.

The website includes a Home Page and a dynamic Product Page featuring an Epson home projector along with other sample products.

Tech Stack

React (Vite)
React Router DOM
Plain CSS (no UI frameworks)

Features

Home Page

Hero banner with call to action

Category navigation

Featured product cards

Responsive layout

Product Page

Dynamic routing using product id

Image gallery with thumbnail switching

Key features list

Specifications table

Add to cart and buy now mock actions

Navigation

SPA navigation without page reload

Category cards navigate to relevant product

Navbar routes mapped to representative products

Responsive Design

Mobile friendly layout

Grid stacking on smaller screens

Flexible sections and spacing

Routing Structure

/ → Home page
/product/epson → Epson projector product page
/product/headphone → Headphone product page
/product/speaker → Speaker product page

The product page is a reusable template that loads different data based on the URL parameter.

Approach

The homepage was structured to guide the user from brand introduction to product discovery.
Instead of building static pages, a reusable product template was created and connected to dynamic routes to simulate a real ecommerce experience.

The layout was designed mobile-first to ensure natural responsiveness.
Component reusability was prioritized to keep the UI scalable and maintainable.

Challenges Faced

Maintaining navigation flow without a backend while keeping the experience realistic required dynamic routing and data mapping.
Balancing visual presentation with plain CSS styling also required careful spacing and hierarchy planning.

Running Locally

Install dependencies

npm install

Start development server

npm run dev

Live Demo

Add your deployed link here
