/// <reference types="cypress" />

describe("HTTP Request", () => {
    const test_Url = 'https://jsonplaceholder.typicode.com/posts/1'
    it('post call', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: "foo0",
                body: "bar",
                userId: 2
            }
        })
            .its('status').should('equal', 201);
    })

    it('get call', () => {
        cy.request('GET', test_Url).its('status').should('equal', 200);
    })

    it('put call', () => {
        cy.request({
            method: 'PUT',
            url: test_Url,
            body: {
                title: "test post -updated 2025",
                body: "this is a put call-updated 2025",
                userId: 1
            }
        })
        .its('status').should('equal', 200);
    })

    it('delete call', () => {
        cy.request({
            method: 'DELETE',
            url: test_Url
        })
            .its('status').should('equal', 200);

    })

})


