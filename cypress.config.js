const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  e2e: {
    watchForFileChanges:false,
    
    setupNodeEvents(on, config){
      // implement node event listeners here
    },
  },
});
