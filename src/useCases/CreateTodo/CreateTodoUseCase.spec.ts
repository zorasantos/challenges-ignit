import { TodoRepositoryInMemory } from '../../repositories/in-memory/TodoRepositoryInMemory';
import { CreateTodoUseCase } from './CreateTodoUseCase';

let todoRepository: TodoRepositoryInMemory;
let createTodo: CreateTodoUseCase;

describe('Create todo', () => {

  beforeAll(() => {
    todoRepository = new TodoRepositoryInMemory();
    createTodo = new CreateTodoUseCase(todoRepository);
  })

  test('should be able to create a new todo', async () => {

    const todo = {
      title: 'Nome da tarefa',
      deadline: new Date(),
    };

    const result  = await createTodo.execute(todo);

    expect(result.title).toBe('Nome da tarefa')
  });
});
