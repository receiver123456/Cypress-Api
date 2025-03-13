
/// <reference types="cypress" />
import { updateNameAndEmailInJSON } from '../../support/utils/randomNameAndEmail';
describe("Gorest API Chaining", () => {
    it("create, get, update, delete user in Gorest", () => {
        cy.fixture('testData').then((data) => {
            const updatedUserData = updateNameAndEmailInJSON(data.newUser);
            cy.log('Updated User Data:', updatedUserData);
            const bodyData = updatedUserData;
            const url = Cypress.config('baseUrl') + '/public/v2/users';
            cy.log('url', url);
            cy.request({
                method: 'POST',
                url: url,
                body: bodyData,
                headers: { Authorization: Cypress.config('auth_token') }
            })
                .then((response) => {
                    expect(response.status).to.equal(201);
                    cy.log('new create user data', response.body.id);
                    const userId = response.body.id;
                    const test_Url = Cypress.config('baseUrl') + '/public/v2/users/' + `${userId}`;
                    const updateName = 'automtion_updating_user';
                    //get user name
                    cy.request({
                        method: 'GET',
                        url: test_Url,
                        headers: { Authorization: Cypress.config('auth_token') }
                    })
                        .then((response) => {
                            expect(response.status).to.equal(200);
                            cy.log('get user id', response.body.id);
                            expect(response.body.id).to.equal(userId);
                        })
                    //update user name
                    cy.request({
                        method: 'PUT',
                        url: test_Url,
                        body: { name: updateName },
                        headers: { Authorization: Cypress.config('auth_token') }
                    })
                        .then((response) => {
                            expect(response.status).to.equal(200);
                            cy.log('updated name', response.body.name);
                            expect(response.body.name).to.equal(updateName);
                        })
                    //delete user name
                    cy.request({
                        method: 'DELETE',
                        url: test_Url,
                        headers: { Authorization: Cypress.config('auth_token') }
                    })
                        .then((response) => {
                            expect(response.status).to.equal(204);
                        })
                    //get user name
                    cy.request({
                        method: 'GET',
                        url: test_Url,
                        headers: { Authorization: Cypress.config('auth_token') },
                        failOnStatusCode: false, // 允许非 2xx/3xx 状态码
                    })
                        .then((response) => {
                            expect(response.status).to.equal(404);
                            expect(response.body.message).to.contain('Resource not found');
                        })

                })
        })

    })
})