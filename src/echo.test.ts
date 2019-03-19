import supertest from "supertest";
import { createApp, addRoutes } from "./app";

const app = addRoutes(createApp());

describe("POST /echo", () => {
  it('should return "pong"', async () => {
    const expected = { name: "John" };
    await supertest(app)
      .post("/echo")
      .send(expected)
      .expect("Content-Type", /application\/json/)
      .expect(expected);
  });
});
