const { faker } = require("@faker-js/faker");

describe("Cypress.env() + before 钩子", () => {
    const client_Name = faker.internet.username();
    const client_Email = faker.internet.email();
    const url = 'https://simple-books-api.glitch.me/api-clients/';
    const testUrl = 'https://simple-books-api.glitch.me/orders/'
    let authToken = null;
    before("creating access token", () => {
        cy.request({
            method: 'POST',
            url: url,
            body: {
                clientName: client_Name,
                clientEmail: client_Email
            }
        })
            .then((response) => {
                Cypress.env('authToken',response.body.accessToken);
                // cy.wrap(response.body.accessToken).as('accessToken_Global');//也可以使用别名（Alias
                cy.log('generate token is', response.body.accessToken);
                expect(response.accessToken).to.not.equal(null);

            })

    })
    it("creating new order", () => {
    // cy.get('@accessToken_Global').then((token) => {  //使用别名取出来token，保存到token中
    const token = Cypress.env('authToken');
    cy.log("create token is",token);
    cy.request({
        method: 'POST',
        url: testUrl,
        headers: { Authorization: `Bearer ${token}`},
        body: {
            bookId: 1,
            customerName: 'xyzaaabac'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.created).to.equal(true);
            })
    })

     // get all orders
    it("get all orders", () => {
        const token = Cypress.env('authToken');
        cy.log("get all orders with token is",token);
        cy.request({
            method: 'Get',
            url: testUrl,
            headers: {
                ContentType: 'application/json',
                Authorization: `Bearer ${token}`
            },
            cookies:{
                cookieName:'mycookie'
            }
            })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).has.length(1);

            })
        })
    })