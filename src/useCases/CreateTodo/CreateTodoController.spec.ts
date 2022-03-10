/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import request from 'supertest';

import { app } from '../../app';

describe('Create todo controller', () => {
  const todo = {
    title: 'Nome da tarefa',
    deadline: new Date()
  };

  const user = {
    name: 'Zora Santos',
    username: 'Zora'
  };

  test('Should be able to create a new todo', async () => {
    const createdUser = await request(app).post('/user').send(user);
    const response = await request(app)
      .post('/todo')
      .send(todo)
      .set('username', createdUser.body.username as string);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: response.body.id,
      done: false,
      created_at: response.body.created_at,
      deadline: response.body.deadline,
      title: 'Nome da tarefa'
    });
  });
});
