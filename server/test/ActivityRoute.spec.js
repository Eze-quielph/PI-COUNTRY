const server = require("../src/server");
const request = require("supertest");

describe("GET /activities", () => {
  it("responds with 200", async () => {
    const res = await request(server).get("/activities");
    expect(res.status).toBe(200);
  });
});

describe("DELETE /activities/:id", () => {
  const idValid = 1;
  const idInvalid = "a";
  it("responds with 200", async () => {
    const res = await request(server).delete(`/activities/${idValid}`);
    expect(res.status).toBe(200);
  });
  it("responds with 500", async () => {
    const res = await request(server).delete(`/activities/${idInvalid}`);
    expect(res.status).toBe(500);
  });
});
describe("POST /activities", () => {
  const postValid = {
    name: "Test2",
    dificultad: 1,
    duracion: 2,
    tempodara: "Invierno",
    countryId: ["c8978db6-72f8-489a-a90c-f9b3ac735a47"],
  };
  const postInvalid = {
    name: "Test2",
    dificultad: 1,
    duracion: 2,
    tempodara: [],
    countryId: ["c8978db6-72f8-489a-a90c-f9b3ac735a47"],
  };

  it("should respond with a 200 status code for a valid post", async () => {
    const res = await request(server).post("/activities").send(postValid);
    expect(res.status).toBe(200);
  });

  it("should respond with a 500 status code for an invalid post", async () => {
    const res = await request(server).post("/activities").send(postInvalid);
    expect(res.status).toBe(500);
  });
});

describe("PUT /activities", () => {
  const idValid = 3;
  const idInvalid = "a";
  const putValid = {
    name: "Test2",
  };
  const putInvalid = {
    name: {},
  };
  it("responds with 200", async () => {
      const res = await request(server).put(`/activities/${idValid}`).send(putValid);
      expect(res.status).toBe(200);
    });
    it("responds with 500", async () => {
          const res = await request(server).put(`/activities/${idInvalid}`).send(putInvalid);
          expect(res.status).toBe(500);
        });
});
