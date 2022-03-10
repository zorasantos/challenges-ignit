import { Request, Response } from 'express';

import { CreateTodoUseCase } from './CreateTodoUseCase';

class CreateTodoController {
  constructor(private createTodoUseCase: CreateTodoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, deadline } = req.body;
    const { user } = req;
    console.log('createTodo', user);

    try {
      const todo = await this.createTodoUseCase.execute({
        title,
        deadline
      });

      const criaCarai = user.todos.push();
      console.log('criaCarai', criaCarai);

      return res.status(201).json(todo);
    } catch (error) {
      return res.status(400).json({ message: (error as Error).message || 'Erro inesperado' });
    }
  }
}

export { CreateTodoController };
