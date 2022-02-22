/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/require-await */
import { User } from '../../entities/User';
import { ICreateUserRequestDTO } from '../../useCases/CreateUser/ICreateUserDTO';
import { IUserRepository } from '../IUserRepository';

class UserRepositoryInMemory implements IUserRepository {
  private users: User[] = [];

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

  async exists(username: string): Promise<boolean> {
    const isExist = this.users.some((users) => users.username === username);
    return !!isExist;
  }
}

export { UserRepositoryInMemory };
