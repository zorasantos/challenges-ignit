import { Todo } from "../../entities/Todo";
import { ITodoRepository } from "repositories/ITodoRepository";
import { ICreateTodoDTO } from "../../useCases/CreateTodo/ICreateTodoDTO";

class TodoRepositoryInMemory implements ITodoRepository {
  todos: Todo[] = []

  async create({ deadline, title }: ICreateTodoDTO): Promise<Todo> {
    const todo = new Todo()

    Object.assign(todo, {
      deadline,
      title
    });

    this.todos.push(todo);
    return todo;
  }

}

export { TodoRepositoryInMemory }