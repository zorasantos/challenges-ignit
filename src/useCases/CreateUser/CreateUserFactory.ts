import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const createUserFactory = () => {
  const userRepository = UserRepositoryInMemory.getInstance();

  const createUserUseCase = new CreateUserUseCase(userRepository);

  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
};

export { createUserFactory };
