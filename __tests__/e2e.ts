import { strict as assert } from "assert";
import supertest from "supertest";
import { createApp, addRoutes } from "../src/app";

const app = addRoutes(createApp());

describe("E2E", () => {
  describe("static files", () => {
    describe("GET /static.json", () => {
      it("should return 200", async () => {
        await supertest(app)
          .get("/static.json")
          .expect(200);
      });
    });
  });

  describe("security", () => {
    it("should not respond X-Powered-By header", async () => {
      const res = await supertest(app).get("/");

      assert(!res.header["x-powered-by"]);
    });
  });
});
