const server = require("../src/server");
const request = require("supertest");

describe("GET /countries/:id", () => {
    const validId = "c8978db6-72f8-489a-a90c-f9b3ac735a47";
    const invalidId = "c8978db6-72f8-489a-a90c-f9b3ac735a67";
  
    it("should respond with a 200 status code for a valid ID", async () => {
      const response = await request(server).get(`/countries/${validId}`).send();
      expect(response.status).toBe(200);
    });
  
    it("should respond with the correct country name for a valid ID", async () => {
      const response = await request(server).get(`/countries/${validId}`).send();
      expect(response.body.name).toBe("Afghanistan");
    });
  
    it("should respond with a 500 status code for an invalid ID", async () => {
      const response = await request(server).get(`/countries/${invalidId}`).send();
      expect(response.status).toBe(500);
    });
  
    it("should respond with the correct error message for an invalid ID", async () => {
      const response = await request(server).get(`/countries/${invalidId}`).send();
      expect(response.body.message).toBe("No se encontró ningún país con el ID especificado");
    });
  });
  
  describe('GET /countries?name=....', ()=>{
      const nameValid = 'arg';
      const nameInvalid = 'bzg';
      it('should respond with the correct search by name of query', async ()=>{
          const response = await request(server).get(`/countries?name=${nameValid}`)
          expect(response.status).toBe(200)
      })
      it('should respond with the correct search by name of query', async ()=>{
          const response = await request(server).get(`/countries?name=${nameInvalid}`)
          expect(response.status).toBe(500)
      })
  })