import { NextFunction, RequestHandler, Request, Response } from "express";
import { AuthService } from "../service/auth.service";
export class AuthController {
  private authService: AuthService;
  constructor() {
    this.authService = AuthService.getInstance();
  }

  public async registration(req: Request, res: Response, next: NextFunction) {
    await this.authService.registarMewarme();

    return res.status(300).json({ succses: true });
  }
}
