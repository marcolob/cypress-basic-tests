📌 Cypress Basic Tests

This repository contains a simple Cypress automation project created to demonstrate foundational end-to-end testing skills.
It includes:

1. A clean Cypress folder structure
2. Example E2E tests
3. Basic UI interactions and assertions
4. A minimal and scalable setup suitable for a QA automation junior

More tests and improvements will be added soon as I expand my QA automation portfolio, including structured frameworks, API tests, and CI integration.

🛠️ Tech Stack

Cypress 13+, JavaScript, Node.js

▶️ How to Install & Run the Tests:

1. Clone the project
git clone https://github.com/marcolob/cypress-basic-tests.git

2. Install dependencies
npm install

3. Run Cypress in interactive mode
npx cypress open

4. Run Cypress in headless mode
npx cypress run

📁 Project Structure

cypress/
├─ e2e/
│ ├─ form.cy.js
│ ├─ dropdown.cy.js
│ ├─ checkbox.cy.js
│ ├─ radio.cy.js
│ ├─ hello.cy.js (REAL website)
│ ├─ link.cy.js  (REAL website)
│ ├─ login.cy.js
│ └─ real_sites/
│   ├─ 01_homepage.cy.js       # Sauce Demo homepage
│   ├─ 02_product.cy.js        # Sauce Demo product details (in progress)
│   ├─ 03_add_to_cart.cy.js    # Sauce Demo add to cart (in progress)
│   └─ 04_login.cy.js          # Sauce Demo login flow (in progress)
├─ fixtures/
│ ├─ index.html
│ ├─ dropdown.html
│ ├─ checkbox.html
│ ├─ radio.html
│ └─ login.html
└─ support/
  └─ commands.js
cypress.config.js
package.json
README.md

📌 Tests Included

Local Fixtures

form.cy.js – Fill out and submit a contact form

dropdown.cy.js – Select a value from a dropdown menu

checkbox.cy.js – Select and deselect checkboxes

radio.cy.js – Select radio button options

hello.cy.js – Simple UI interaction test (Real website)

link.cy.js – Verify link navigation  (Real website)

login.cy.js – Fill out and submit a login form

Real Sites (Sauce Demo.com)

01_homepage.cy.js – Homepage: verify login form and elements

02_product.cy.js – Product details page (in progress)

03_add_to_cart.cy.js – Add product to cart (in progress)

04_login.cy.js – Login flow (in progress)

📌 Purpose of This Repository

Demonstrate understanding of Cypress

Write clean, readable, and maintainable tests

Show continuous learning in QA Automation

Build a scalable testing framework

🚧 Upcoming Additions (Roadmap)

Complete real site tests (products, cart, login)

API testing with Cypress

Introduce Page Object Model (POM)

Add data-driven testing

Add CI/CD pipeline (GitHub Actions)

Cross-browser testing

📬 Contact

For info, collaboration, or feedback:
📧 m.lobianco@hotmail.it

🔗 LinkedIn
