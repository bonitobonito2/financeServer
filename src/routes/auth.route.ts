import express, { Router } from "express";
import { AuthController } from "../controller/auth.controller";

export class AuthRouter {
  public router: Router;
  private authController: AuthController;
  constructor() {
    this.router = express.Router();
    this.authController = new AuthController();
    this.initialize();
  }

  private initialize() {
    this.router.post(
      "/registration-mewarme",
      this.authController.registration.bind(this.authController)
    );
  }
}
