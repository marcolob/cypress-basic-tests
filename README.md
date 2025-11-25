Cypress Automation Portfolio

E2E Testing • UI Automation • POM (in progress)

📌 Overview

This repository contains a Cypress automation project showcasing core QA Automation skills, including both local UI tests (HTML fixtures) and real website E2E flows (SauceDemo).
The project is structured following scalable and maintainable testing principles, suitable for Junior / Junior-Mid QA Automation Engineer positions.

🛠️ Tech Stack

Cypress 13+

JavaScript (Node.js)

npm

Mochawesome Reporter (HTML reports)

GitHub Actions CI/CD (upcoming)

📁 Project Structure

cypress/
├─ e2e/
│  ├─ basics/                 # UI tests on local HTML fixtures
│  │   ├─ form.cy.js
│  │   ├─ dropdown.cy.js
│  │   ├─ checkbox.cy.js
│  │   ├─ radio.cy.js
│  │   ├─ login.cy.js
│  │   ├─ hello.cy.js
│  │   └─ link.cy.js
│  │
│  ├─ real_site/              # Real website automation (SauceDemo E2E)
│  │   ├─ 01_homepage.cy.js
│  │   ├─ 02_product.cy.js
│  │   ├─ 03_add_to_cart.cy.js
│  │   └─ 04_login.cy.js
│  │
│  ├─ smoke/                  # (To be added) Fast, critical-path tests
│  └─ regression/             # (To be added) Full regression suite
│
├─ fixtures/                  # Local HTML pages + JSON test data
│  ├─ index.html
│  ├─ dropdown.html
│  ├─ checkbox.html
│  ├─ radio.html
│  └─ login.html
│
├─ pages/                     # Page Object Model (POM) in progress
│  ├─ loginPage.js
│  ├─ productsPage.js
│  └─ cartPage.js
│
├─ support/                   # Custom commands & global hooks
│  ├─ commands.js
│  └─ e2e.js
│
├─ cypress.config.js          # Cypress configuration + env variables
├─ package.json               # Dependencies & scripts
└─ README.md                  # Documentation

📌 Folder Description
🧪 basics/

Contains local UI interaction tests:

Form validation

Inputs

Dropdowns

Radio buttons

Checkboxes

Links

Great for demonstrating knowledge of selectors, Cypress commands, and assertions.

🌐 real_site/

Full E2E automation on SauceDemo:

Login flow

Product listing validation

Add-to-cart functionality

UI assertions

Complete end-to-end journeys

🏗️ pages/

Page Object Model (in progress):

Centralized locators

Reusable UI actions

Improved maintainability

🔥 smoke/

To be added: fast, critical-path tests for smoke checks.

🔄 regression/

To be added: full regression suite run before releases.

📦 fixtures/

Local HTML pages and JSON test data.

🧰 support/

Global configuration, reusable custom commands, and hooks.

📬 Contact

📧 Email: m.lobianco@hotmail.it

🔗 LinkedIn: linkedin.com/in/marco-lo-bianco-869311b1

😎 Open to collaboration, learning, and new QA Automation opportunities

