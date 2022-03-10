import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { ListTodosUseCase } from './ListTodosUseCase';

let listTodos: ListTodosUseCase;
let createUser: CreateUserUseCase;
let useRepository: UserRepositoryInMemory;

describe('List todos', () => {
  beforeAll(() => {
    useRepository = UserRepositoryInMemory.getInstance();
    createUser = new CreateUserUseCase(useRepository);
    listTodos = new ListTodosUseCase(useRepository);
  });

  const user = {
    name: 'Zora Santos',
    username: 'Zora'
  };

  test("Should be able to list all user's todos", async () => {
    const createdUser = createUser.execute(user);
    const { username } = await createdUser;

    const todo = await listTodos.execute(username);
    console.log(todo);
  });
});
