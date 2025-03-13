// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// 引入 Allure 插件功能
import "allure-cypress";

// 引入全局自定义命令
import './commands';

// 配置全局未捕获异常的处理
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('忽略未捕获的异常：', err.message);
    return false; // 阻止异常导致测试失败
  });
  
  // 为 Allure 报表设置全局钩子
  Cypress.on('test:before:run', (attributes) => {
    attributes.allureLabel = 'MyGlobalLabel';
  });
