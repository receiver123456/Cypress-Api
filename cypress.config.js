// const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       configureAllureAdapterPlugins(on, config);
//       return config;
//     },
//     baseUrl: 'https://gorest.co.in', // 配置 baseUrl
//     auth_token: 'Bearer 2f912ac51c4ef1de590bda80c88b65eeaffbc01d3f5b4234a67c672e0722ffca', // 配置 baseUrl
//     env: {
//       allure: true, // 确保环境变量 "allure" 已开启
//       allureReuseAfterSpec: true
//   },
//   },
// });

export default {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: 'https://gorest.co.in',// 配置 baseUrl
    auth_token: 'Bearer 2f912ac51c4ef1de590bda80c88b65eeaffbc01d3f5b4234a67c672e0722ffca' // 配置 baseUrl
  //   env: {
  //     authToken: 'Bearer 2f912ac51c4ef1de590bda80c88b65eeaffbc01d3f5b4234a67c672e0722ffca', 
  // },
  },
};