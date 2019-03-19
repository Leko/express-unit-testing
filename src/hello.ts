import { Request, Response } from "express";

export function hello(req: Request, res: Response) {
  res.send(`Hello ${req.params.name}!`);
}
