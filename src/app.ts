import { DataSource } from "typeorm";
import { myDataSource } from "./database/database.config";
import express, { Express, Router } from "express";
import { AuthRouter } from "./routes/auth.route";
export class App {
  private dataSource: DataSource;
  private app: Express;
  private authRouter: AuthRouter;
  constructor() {
    this.dataSource = myDataSource;
    this.app = express();
    this.authRouter = new AuthRouter();

    this.initialize();
  }

  public async listen(port?: number) {
    this.app.listen(port ? port : 3000, () => {
      console.log("server is listening on port ", port);
    });
  }

  private initialize() {
    this.app.use("/auth", this.authRouter.router);
  }

  public async connectDatabase(): Promise<void> {
    try {
      await this.dataSource.initialize();
      console.log("connected to database");
    } catch (err) {
      throw err;
    }
  }
}
