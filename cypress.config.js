const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gorest.co.in', // 配置 baseUrl
    auth_token: 'Bearer 2f912ac51c4ef1de590bda80c88b65eeaffbc01d3f5b4234a67c672e0722ffca', // 配置 baseUrl

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
