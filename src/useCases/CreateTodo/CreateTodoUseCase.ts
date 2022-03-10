import { Todo } from '../../entities/Todo';
import { IUserRepository } from '../../repositories/IUserRepository';
// import { ITodoRepository } from '../../repositories/ITodoRepository';

interface ICreateTodoRequestDTO {
  title: string;
  deadline: Date;
}

class CreateTodoUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ deadline, title }: ICreateTodoRequestDTO): Promise<Todo> {
    const todo = await this.userRepository.createTodo({
      deadline,
      title
    });

    return todo;
  }
}

export { CreateTodoUseCase };
