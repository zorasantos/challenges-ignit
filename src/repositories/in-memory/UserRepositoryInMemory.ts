import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../useCases/CreateUser/ICreateUserDTO";

class UserRepositoryInMemory implements IUserRepository {
  users: User[] = []

  async create({ name, username }: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      name,
      username
    });

    this.users.push(user);
    return user;
  }

}

export { UserRepositoryInMemory }