const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add the Allure plugin
      allureWriter(on, config);
      
      // You can implement other node event listeners here
      return config;
    },
    baseUrl: "https://www.saucedemo.com/",
  },
});
