const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // cartella dove generare i report JSON
    overwrite: false,             // non sovrascrivere i file JSON multipli
    html: false,                  // generazione HTML separata tramite merge
    json: true                    // generazione JSON per il merge
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',  // aggiorna al mio sito reale
    specPattern: ['cypress/e2e/**/*.cy.js', 'cypress/e2e/**/*.cy.ts'], // supporta JS e TS
    setupNodeEvents(on, config) {
      // Posso aggiungere eventi Cypress se servono in futuro
      return config;
    },
  },
});
