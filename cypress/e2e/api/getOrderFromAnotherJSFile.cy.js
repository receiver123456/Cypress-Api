const { faker } = require("@faker-js/faker");

describe('get token from another JS file', () => {
    let get_token_2025 = null;
    // 测试文件中使用
     before(() => {
    //     // cy.ensureAuth();
    get_token_2025 = Cypress.env('authToken');
    cy.log("get_token_2025_1",Cypress.env('authToken'));

    });

    it("AAA_get all orders", () => {
        const testUrl = 'https://simple-books-api.glitch.me/orders/';
        cy.request({
            method: 'Get',
            url: testUrl,
            headers: { Authorization: `Bearer ${get_token_2025}` },
            cookies:{'cookieName':'mycookie'}
            })
            .then((response) => {
                expect(response.status).to.equal(200);

            })
        })
    })
