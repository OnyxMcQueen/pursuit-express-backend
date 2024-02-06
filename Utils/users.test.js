const supertest = require('supertest');
const app = require('../app');

describe("Route that responds with some number of students", () => {
    it("Should check to see if student data is an array", async () => {
        const response = await supertest(app).get('/users');
        expect(response.statusCode).toEqual(200)
        expect(Array.isArray(response.body)).toBeTruthy()
    })
    it("Should check to see if array is not empty", async () => {
        const response = await supertest(app).get('/users');
        console.log(response.body);
        expect(response.body.length).not.toBe(0)
    })
    it("Should send back 10 students", async () => {
        const response = await supertest(app).get('/users/?limit=10');
        expect(response.body.length).toEqual(10)
    })
})