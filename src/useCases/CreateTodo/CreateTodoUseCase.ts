import { Todo } from '../../entities/Todo';
import { ITodoRepository } from '../../repositories/ITodoRepository';

interface ICreateTodoRequestDTO {
  title: string;
  deadline: Date;
}

class CreateTodoUseCase {
  constructor(private todoRepository: ITodoRepository) {}
  async execute({ deadline, title }: ICreateTodoRequestDTO): Promise<Todo> {
    const todo = await this.todoRepository.create({
      deadline,
      title
    });

    return todo;
  }
}

export { CreateTodoUseCase };
