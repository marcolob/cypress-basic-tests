Cypress Automation Portfolio

E2E Testing • UI Automation • Page Object Model

📌 Overview

This repository contains a Cypress automation project showcasing practical QA Automation skills, including:

Local UI tests using HTML fixtures

Real website E2E test flows (SauceDemo)

Page Object Model structure

Clean test organization for scalability

CI-ready structure (GitHub Actions integration)

The project is designed to represent the skillset expected from a Junior / Junior-Mid QA Automation Engineer.

🛠️ Tech Stack

Cypress 15+

JavaScript (Node.js 22+)

npm

Mochawesome Reporter (HTML + JSON reports)

GitHub Actions CI/CD (in progress)

🟢 Test Status (28 Nov 2025)

Total tests: 19

Tests passed: 19 ✅

Previously failing: apiStub.cy.js, intercept.cy.js, forms/form.cy.js (now fixed)

New tests added: cart/add_product_cart_multiple.cy.js, cart/remove_multiple_products.cy.js

Reports available in cypress/reports/

All critical flows on SauceDemo and local HTML fixtures are working. Multi-product cart functionality and badge updates are fully tested.

📁 Project Structure

cypress/
├─ e2e/
│ ├─ basics/ # Local UI tests (HTML fixtures)
│ ├─ cart/ # Cart tests including multi-product add/remove and badge verification
│ ├─ real_site/ # Real website E2E tests (SauceDemo)
│ ├─ smoke/ # Fast, critical-path tests
│ └─ regression/ # Full regression suite
├─ fixtures/ # Local HTML + JSON test data
├─ pages/ # Page Object Model (POM)
├─ support/ # Custom commands & global hooks
├─ reports/ # Mochawesome HTML + JSON reports
├─ cypress.config.js
└─ package.json

📌 Folder Description

basics/ – Local UI interaction tests for core Cypress skills: form validation, inputs, dropdowns, radio buttons, checkboxes, link navigation; useful for selectors, command chaining, assertions, and UI behavior.

cart/ – Full cart functionality tests: add single/multiple products, remove products, badge verification, cart count, multi-product scenarios using Page Object Model.

real_site/ – Full E2E test flow on SauceDemo: login workflow, product listing validation, add-to-cart flow, multi-page user journey, UI assertions across pages.

pages/ – Page Object Model (POM): centralized locators, reusable UI actions, cleaner test files, easier maintainability.

smoke/ – Fast, critical-path tests for quick build verification.

regression/ – Full regression suite to validate complete product functionality.

fixtures/ – Local HTML files and JSON data for the basics tests.

support/ – Global setup: reusable Cypress commands, before/after hooks, shared utilities for test stability.

⚡ How to Run Tests

Aprire Cypress GUI (modalità interattiva):
npm run cypress:open

Eseguire tutti i test headless:
npm run cypress:run

Eseguire uno specifico spec:
npx cypress run --spec "cypress/e2e/cart/add_product_cart_multiple.cy.js"

I report HTML e JSON vengono generati automaticamente in cypress/reports/ e gli screenshot in cypress/screenshots/**/*.png.

📬 Contact

Email: m.lobianco@hotmail.it

LinkedIn: https://www.linkedin.com/in/marco-lo-bianco-869311b1

Open to collaboration, learning opportunities, and QA Automation roles.
