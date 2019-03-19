import express from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import cookie from "cookie-parser";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import { passport } from "./passport";
import { ping } from "./routes/ping";
import { hello } from "./routes/hello";
import { echo } from "./routes/echo";
import { privateHandler } from "./routes/private";

export function createApp() {
  const app = express();

  app.use(morgan("dev"));
  app.use(helmet());
  app.use(compression());
  app.use(cors());
  app.use(cookie());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  return app;
}

export function addRoutes(app: express.Application): express.Application {
  app.use(express.static("public"));
  app.get("/ping", ping);
  app.get("/hello/:name", hello);
  app.post("/echo", echo);

  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: false
    })
  );
  app.get("/private", privateHandler);

  return app;
}
