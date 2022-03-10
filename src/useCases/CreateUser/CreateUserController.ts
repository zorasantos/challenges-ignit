import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request<Request>, res: Response): Promise<Response> {
    const { name, username } = req.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        username
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: (error as Error).message || 'Erro inesperado' });
    }
  }
}

export { CreateUserController };
