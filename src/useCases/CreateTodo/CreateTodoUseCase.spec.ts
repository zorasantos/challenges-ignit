// import { TodoRepositoryInMemory } from '../../repositories/in-memory/TodoRepositoryInMemory';
import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateTodoUseCase } from './CreateTodoUseCase';

let userRepository: UserRepositoryInMemory;
let createTodo: CreateTodoUseCase;

describe('Create todo', () => {
  beforeAll(() => {
    userRepository = UserRepositoryInMemory.getInstance();
    createTodo = new CreateTodoUseCase(userRepository);
  });

  test('should be able to create a new todo', async () => {
    const todo = {
      title: 'Nome da tarefa',
      deadline: new Date()
    };

    const result = await createTodo.execute(todo);

    console.log(result);

    expect(result.title).toBe('Nome da tarefa');
  });
});
