import express from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { json } from "body-parser";
import { ping } from "./routes/ping";
import { hello } from "./routes/hello";
import { echo } from "./routes/echo";

export function createApp() {
  const app = express();

  app.use(morgan("dev"));
  app.use(helmet());
  app.use(compression());
  app.use(cors());
  app.use(json());

  return app;
}

export function addRoutes(app: express.Application): express.Application {
  app.use(express.static("public"));
  app.get("/ping", ping);
  app.get("/hello/:name", hello);
  app.post("/echo", echo);

  return app;
}
