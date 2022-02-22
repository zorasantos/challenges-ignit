import { User } from '../entities/User';
import { ICreateUserDTO } from '../useCases/CreateUser/ICreateUserDTO';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  exists(username: string): Promise<boolean>;
}

export { IUserRepository };
