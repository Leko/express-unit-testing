import { Request, Response } from "express";

export function privateHandler(req: Request, res: Response) {
  if (!req.isAuthenticated()) {
    return res.status(401).send();
  }
  res.send(req.user.nickname);
}
