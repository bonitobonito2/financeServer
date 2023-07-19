import { Repository } from "typeorm";
import { myDataSource } from "../database/database.config";
import { User } from "../entities/auth.entity";

export class AuthService {
  private static authService: AuthService;
  private constructor(private userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  public static getInstance() {
    if (!this.authService) {
      this.authService = new AuthService(myDataSource.getRepository(User));
    }
    return this.authService;
  }

  public async registarMewarme() {
    const usr = this.userRepository.create({
      email: "zaaltsagareli@gmail.com",
      date: new Date(),
    });
    const obj = await this.userRepository.save(usr);
    return obj;
  }
}
