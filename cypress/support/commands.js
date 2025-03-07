// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// export function generateRandomEmail() {
//     const randomString = Math.random().toString(36).substring(2, 10); // 生成随机字符串
//     return `user_${randomString}@example.com`; // 返回随机 Email
//   };
  // cypress/support/utils.js

// export function updateEmailInJSON(jsonObject) {
//     if (jsonObject && jsonObject.email) {
//       jsonObject.email = generateRandomEmail(); // 替换为随机 Email
//     }
//     return jsonObject; // 返回修改后的 JSON 对象
//   }

  // Cypress.Commands.add('updateEmailInJSON', (jsonObject) => {
  //   try {
  //     const randomString = Math.random().toString(36).substring(2, 10); // 生成随机字符串
  //     if (jsonObject && jsonObject.email) {
  //       jsonObject.email =`user_${randomString}@example.com`;// 替换为随机 Email
  //     }
  //     // jsonObject.email = "11@eamil.com";
  //     return jsonObject; // 返回修改后的 JSON 对象
  //   } catch (error) {
  //     throw new Error(`Failed to parse JSON: ${error.message}`);
  //   }
  // });

