/// <reference types="cypress" />

describe("go to baidu", () => {
    it("open baidu page", () => {
        cy.visit('https://www.baidu.com');
        cy.contains('百度一下').should('exist')
        })
    })

// cypress/integration/test.spec.js
// describe('Login Test', () => {
//     it('should login with valid credentials', () => {
//       cy.fixture('testData').then((data) => {
//         cy.visit('/login');
//         cy.get('#username').type(data.username);
//         cy.get('#password').type(data.password);
//         cy.get('#loginButton').click();
//         cy.url().should('include', '/dashboard');
//       });
//     });
//   });




    // it('post/api', () => {
    //     const username = 'admin'
    //     const password = 'admin'
    //     const resdata = {title:'test',body:'bar',userid:1}
    //     const url = 'http://localhost:8086/login?username=' +username + '&password=' +password
    //     cy.request('POST',url,data).then ((response) => {
    //         expect(response.status).to.equal(200)
    //         expect(response.body.userId).to.equal(1)
    //         expect(response.body.title).to.equal(resdata.title)
    //     })
    // })



//     // cypress/integration/test.spec.js
// describe('Login Test', () => {
//     it('should login with valid credentials', () => {
//       cy.visit('/login');
//       cy.get('#username').type(Cypress.env('username'));
//       cy.get('#password').type(Cypress.env('password'));
//       cy.get('#loginButton').click();
//       cy.url().should('include', '/dashboard');
//     });
//   });

