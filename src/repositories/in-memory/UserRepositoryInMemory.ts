/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/require-await */
import { Todo } from '../../entities/Todo';
import { User } from '../../entities/User';
import { ICreateTodoDTO } from '../../useCases/CreateTodo/ICreateTodoDTO';
import { ICreateUserRequestDTO } from '../../useCases/CreateUser/ICreateUserDTO';
import { IUserRepository } from '../IUserRepository';

class UserRepositoryInMemory implements IUserRepository {
  private users: User[] = [];
  private todos: Todo[] = [];

  // singleton pattern
  private static INSTANCE: UserRepositoryInMemory;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepositoryInMemory {
    if (!UserRepositoryInMemory.INSTANCE) {
      UserRepositoryInMemory.INSTANCE = new UserRepositoryInMemory();
    }
    return UserRepositoryInMemory.INSTANCE;
  }

  async create({ name, username }: ICreateUserRequestDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      username
    });

    this.users.push(user);
    return user;
  }

  async createTodo({ deadline, title }: ICreateTodoDTO): Promise<Todo> {
    const todo = new Todo();

    Object.assign(todo, {
      deadline,
      title
    });

    this.users.todos.push(todo);

    return this.users.todos;
  }

  async exists(username: string): Promise<boolean> {
    const isExist = this.users.some((users) => users.username === username);
    return !!isExist;
  }

  async getUser(username: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.username === username);
    return user;
  }

  // async listTodos(username: string): Promise<Todo | undefined> {
  //   const todo = this.users.find((user) => {
  //     console.log('listTodo', user);
  //     if (user.username === username) {
  //       const user = new User();
  //       return user.todos;
  //     }
  //   });
  //   return todo;
  // }
}

export { UserRepositoryInMemory };
