/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable no-use-before-define */

import { Todo } from '../../entities/Todo';
import { ICreateTodoDTO } from '../../useCases/CreateTodo/ICreateTodoDTO';
import { ITodoRepository } from '../ITodoRepository';

class TodoRepositoryInMemory implements ITodoRepository {
  private todos: Todo[] = [];

  // singleton pattern
  private static INSTANCE: TodoRepositoryInMemory;

  private constructor() {
    this.todos = [];
  }

  public static getInstance(): TodoRepositoryInMemory {
    if (!TodoRepositoryInMemory.INSTANCE) {
      TodoRepositoryInMemory.INSTANCE = new TodoRepositoryInMemory();
    }
    return TodoRepositoryInMemory.INSTANCE;
  }

  async create({ deadline, title }: ICreateTodoDTO): Promise<Todo> {
    const todo = new Todo();

    Object.assign(todo, {
      deadline,
      title
    });

    this.todos.push(todo);
    return todo;
  }
}

export { TodoRepositoryInMemory };
