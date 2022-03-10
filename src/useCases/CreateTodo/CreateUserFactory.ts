import { TodoRepositoryInMemory } from '../../repositories/in-memory/TodoRepositoryInMemory';
import { CreateTodoController } from './CreateTodoController';
import { CreateTodoUseCase } from './CreateTodoUseCase';

const createTodoFactory = () => {
  const todoRepository = TodoRepositoryInMemory.getInstance();

  const createTodoUseCase = new CreateTodoUseCase(todoRepository);

  const createTodoController = new CreateTodoController(createTodoUseCase);

  return createTodoController;
};

export { createTodoFactory };
