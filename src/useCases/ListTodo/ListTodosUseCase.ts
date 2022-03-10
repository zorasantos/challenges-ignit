import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
// import { TodoRepositoryInMemory } from '../../repositories/in-memory/TodoRepositoryInMemory';

class ListTodosUseCase {
  constructor(private userRepository: UserRepositoryInMemory) {}

  async execute(username: string) {
    const todos = await this.userRepository.listTodos(username);
    return todos;
  }
}

export { ListTodosUseCase };
