/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://accounts-homolog.maistodos.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,  // Largura
    viewportHeight: 720,  // Altura
  },
});
