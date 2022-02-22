import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory'

let userRepository: UserRepositoryInMemory;
let createUser: CreateUserUseCase;

describe("Create user", () => {
  beforeAll(() => {
    userRepository = new UserRepositoryInMemory();
    createUser = new CreateUserUseCase(userRepository);
  })

  test("should be able to create a new user", async () => {

    const user = {
      name: "Todo test",
      username: "test"
    }

    const result = await createUser.execute(user)

    expect(result.name).toBe("Todo test")

  })
})