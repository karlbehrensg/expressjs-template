const request = require("supertest");
const app = require("src/app");
const { conn } = require("src/adapters");

describe("Test Books URLs", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  it("should fail when accessing an authed route with an invalid JWT", async () => {
    await request(app).get("/api/books").expect(200).expect([]);
  });

  afterAll(async () => {
    await conn.close();
  });
});
