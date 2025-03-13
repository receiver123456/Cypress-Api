/// <reference types="cypress" />
describe("API testing", () => {
  const test_url = 'https://reqres.in/api/users'
  const queryParam = { page: 2 };

  it("Passing query parameter", () => {
    cy.request({
      method: 'GET',
      url: test_url,
      qs: queryParam
    })
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('page', 2);
        expect(response.body.data).has.length(6);
        expect(response.body.data[0]).has.property('id', 7);
      })
  })
})