const server = require("../src/server");
const request = require("supertest");

describe("GET /countries", () => {
  it("should respond with a 200 status code", async () => {
    const response = await request(server).get("/countries").send();

    expect(response.status).toBe(200);
  });
});
