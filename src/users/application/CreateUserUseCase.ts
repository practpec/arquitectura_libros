import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(
    name: string,

  ): Promise<User | null> {
    try {
      const user = await this.userRepository.createUser(
        name
      );
      return user;
    } catch (error) {
      return null;
    }
  } 
}
