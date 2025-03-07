/// <reference types="cypress" />
describe("API Test Suite", () => {
    it("GET /api", () => {
      cy.fixture('testData').then((data) => {
      // 加载 fixture 数据
        console.log(data); // 打印加载的数据
        console.log(data.validUser); // 打印 validUser 对象
        const username = data.validUser.username;
        const password = data.validUser.password;
        const url = '/login?username=' + username + '&password=' + password; 
        cy.request(url).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
    });
  })