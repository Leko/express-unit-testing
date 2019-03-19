import supertest from "supertest";
import { createApp, addRoutes } from "./app";

const app = addRoutes(createApp());

describe("GET /ping", () => {
  it('should return "pong"', async () => {
    await supertest(app)
      .get("/ping")
      .expect("pong");
  });
});
