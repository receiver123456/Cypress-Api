const { faker } = require("@faker-js/faker");

describe('用户 API 测试套件', () => {
    const testUrl = 'https://simple-books-api.glitch.me/orders/'
    let newAuthToken = null;
    before(() => {
        // 在测试套件开始前获取 Token,调用自定义命令获取 Token 
        cy.GenerateAndGetToken().then((token) => {
            newAuthToken = token; // 保存到局部变量
            
            cy.log("new token is",newAuthToken);
        });
    });

    it('测试 1：create an new order', () => {
        cy.log("create order with token is",newAuthToken);
        cy.request({
            method: 'POST',
            url: testUrl,
            headers: { Authorization: `Bearer ${newAuthToken}` },
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
        cy.log("get all orders with token is",newAuthToken);
        cy.request({
            method: 'Get',
            url: testUrl,
            headers: { Authorization: `Bearer ${newAuthToken}` },
            cookies:{'cookieName':'mycookie'}
            })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).has.length(1);

            })
        })
    })
