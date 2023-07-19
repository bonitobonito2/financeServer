import { NextFunction, RequestHandler, Request, Response } from "express";

export class AuthController {
  constructor() {}

  public registration(req: Request, res: Response, next: NextFunction) {
    return res.status(300).json({ succses: true });
  }
}
