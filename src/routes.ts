import { Router, Request, Response, NextFunction } from 'express';

import { UserRepositoryInMemory } from './repositories/in-memory/UserRepositoryInMemory';
import { createTodoFactory } from './useCases/CreateTodo/CreateUserFactory';
import { createUserFactory } from './useCases/CreateUser/CreateUserFactory';

const router = Router();

async function checksExistsUserAccount(req: Request, res: Response, next: NextFunction) {
  const { username } = req.headers;

  const userRepository = UserRepositoryInMemory.getInstance();

  const user = await userRepository.getUser(username as string);

  if (!user) {
    return res.status(404).json({ error: 'User not found!' });
  }

  req.user = user;
  return next();
}

router.post('/user', (req, res) => createUserFactory().handle(req, res));
router.post('/todo', checksExistsUserAccount, (req, res) => createTodoFactory().handle(req, res));

export { router };
