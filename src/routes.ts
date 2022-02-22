import { Router } from 'express';

import { createUserFactory } from './useCases/CreateUser/CreateUserFactory';

const router = Router();

router.post('/user', (req, res) => createUserFactory().handle(req, res));

export { router };
