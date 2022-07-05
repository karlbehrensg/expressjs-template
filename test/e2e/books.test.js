const request = require("supertest");
const app = require("src/app");
const { conn } = require("src/adapters");

describe("Test Books URLs", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  it("Retrive books from empty database", async () => {
    await request(app).get("/api/books").expect(200).expect([]);
  });

  it("Create new book", async () => {
    const body = { title: "new book" };
    const response = await request(app).post("/api/books").send(body);

    const response_body = JSON.parse(response["text"]);
    const response_id = response_body["id"];
    const response_title = response_body["title"];

    expect(response_title).toEqual(body["title"]);
    expect(response_id).toEqual(1);
  });

  afterAll(async () => {
    await conn.close();
  });
});
