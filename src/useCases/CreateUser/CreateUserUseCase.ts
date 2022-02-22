import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface ICreateUserRequestDTO {
  name: string;
  username: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, username }: ICreateUserRequestDTO): Promise<User> {
    const user = await this.userRepository.create({
      name,
      username
    })

    return user;
  }
}

export { CreateUserUseCase }