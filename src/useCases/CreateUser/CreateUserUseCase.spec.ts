import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

let userRepository: UserRepositoryInMemory;
let createUser: CreateUserUseCase;

describe('Create user', () => {
  beforeAll(() => {
    userRepository = UserRepositoryInMemory.getInstance();
    createUser = new CreateUserUseCase(userRepository);
  });

  test('should be able to create a new user and initialize with empty list todo', async () => {
    const user = {
      name: 'Zora Santos',
      username: 'Zora'
    };

    const result = await createUser.execute(user);

    expect(result).toEqual({
      id: result.id,
      todos: [],
      name: 'Zora Santos',
      username: 'Zora'
    });
    expect(result.todos).toStrictEqual([]);
  });

  test('Should not be able to create a new user when username already exists', async () => {
    await expect(async () => {
      const user = {
        name: 'Zora Santos',
        username: 'Zora'
      };

      await createUser.execute(user);
      await createUser.execute(user);
    }).rejects.toBeInstanceOf(Error);
  });
});
