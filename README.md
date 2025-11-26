# Cypress Automation Portfolio

E2E Testing • UI Automation • Page Object Model

---

## 📌 Overview

This repository contains a Cypress automation project showcasing practical QA Automation skills, including:

- Local UI tests using HTML fixtures
- Real website E2E test flows (SauceDemo)
- A growing Page Object Model structure
- Clean test organization for scalability
- CI-ready structure (GitHub Actions integration)

The project is designed to represent the skillset expected from a **Junior / Junior-Mid QA Automation Engineer**.

---

## 🛠️ Tech Stack

- **Cypress 13+**
- **JavaScript (Node.js)**
- **npm**
- **Mochawesome Reporter** (HTML reports)
- **GitHub Actions CI/CD** (in progress)

---

📁 Project Structure

cypress/
├─ e2e/
│ ├─ basics/ # UI tests on local HTML fixtures
│ │ ├─ form.cy.js
│ │ ├─ dropdown.cy.js
│ │ ├─ checkbox.cy.js
│ │ ├─ radio.cy.js
│ │ ├─ login.cy.js
│ │ ├─ hello.cy.js
│ │ └─ link.cy.js
│ │
│ ├─ real_site/ # Real website automation (SauceDemo E2E)
│ │ ├─ 01_homepage.cy.js
│ │ ├─ 02_product.cy.js
│ │ ├─ 03_add_to_cart.cy.js
│ │ └─ 04_login.cy.js
│ │
│ ├─ smoke/ # (To be added) Fast, critical-path tests
│ └─ regression/ # (To be added) Full regression suite
│
├─ fixtures/ # Local HTML pages + JSON test data
│ ├─ index.html
│ ├─ dropdown.html
│ ├─ checkbox.html
│ ├─ radio.html
│ └─ login.html
│
├─ pages/ # Page Object Model (POM)
│ ├─ loginPage.js
│ ├─ productsPage.js
│ └─ cartPage.js
│
├─ support/ # Custom commands & global hooks
│ ├─ commands.js
│ └─ e2e.js
│
├─ reports/ # Mochawesome JSON + HTML output
├─ cypress.config.js # Cypress configuration
└─ package.json # Project dependencies


---

## 📌 Folder Description

### 🧪 **basics/**
Local UI interaction tests used to demonstrate core Cypress skills:

- Form validation  
- Inputs  
- Dropdowns  
- Radio buttons  
- Checkboxes  
- Link navigation  

Useful for selectors, command chaining, assertions, and UI behavior testing.

---

### 🌐 **real_site/**
Full E2E test flow on **SauceDemo**, including:

- Login workflow
- Product listing validation
- Add-to-cart flow
- Multi-page user journey
- UI assertions across pages

Ideal for demonstrating real-world end-to-end scenarios.

---

### 🏗️ **pages/**
Page Object Model (in progress):

- Centralized locators
- Reusable UI actions
- Cleaner test files
- Easier maintainability

---

### 🔥 **smoke/**
(To be added)

Fast, critical-path tests intended for quick build verification.

---

### 🔄 **regression/**
(To be added)

Full regression suite to validate complete product functionality.

---

### 📦 **fixtures/**
Includes local HTML files and test data (JSON) used by the basics test suite.

---

### 🧰 **support/**
Global setup:

- Reusable Cypress commands
- Before/after hooks
- Shared utilities for test stability

---

## 📬 Contact

📧 Email: **m.lobianco@hotmail.it**  
🔗 LinkedIn: **linkedin.com/in/marco-lo-bianco-869311b1**  

Open to collaboration, learning opportunities, and QA Automation roles.


