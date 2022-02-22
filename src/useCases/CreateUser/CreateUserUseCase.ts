import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './ICreateUserDTO';

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, username }: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.exists(username);

    if (userAlreadyExists) {
      throw new Error('Usuário já tem cadastro!');
    }

    const user = await this.userRepository.create({
      name,
      username
    });

    return user;
  }
}

export { CreateUserUseCase };
