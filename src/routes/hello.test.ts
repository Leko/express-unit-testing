import supertest from "supertest";
import { createApp, addRoutes } from "../app";

const app = addRoutes(createApp());

describe("GET /hello/:name", () => {
  it('should return "pong"', async () => {
    const name = "Tom";
    await supertest(app)
      .get(`/hello/${name}`)
      .expect(`Hello ${name}!`);
  });
});
