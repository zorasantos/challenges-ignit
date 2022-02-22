import { Todo } from '../entities/Todo';
import { ICreateTodoDTO } from '../useCases/CreateTodo/ICreateTodoDTO';

interface ITodoRepository {
  create(data: ICreateTodoDTO): Promise<Todo>;
}

export { ITodoRepository };
