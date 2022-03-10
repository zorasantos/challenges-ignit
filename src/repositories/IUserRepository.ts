import { Todo } from '../entities/Todo';
import { User } from '../entities/User';
import { ICreateTodoDTO } from '../useCases/CreateTodo/ICreateTodoDTO';
import { ICreateUserRequestDTO } from '../useCases/CreateUser/ICreateUserDTO';

interface IUserRepository {
  create(data: ICreateUserRequestDTO): Promise<User>;
  exists(username: string): Promise<boolean>;
  getUser(username: string): Promise<User | undefined>;
  // listTodos(username: string): Promise<Todo | undefined>;
  createTodo(data: ICreateTodoDTO): Promise<Todo>;
}

export { IUserRepository };
