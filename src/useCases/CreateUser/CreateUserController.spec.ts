/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import request from 'supertest';

import { app } from '../../app';

describe('Create user controller', () => {
  const user = {
    name: 'Zora Santos',
    username: 'Zora'
  };
  test('should be able to create a new user', async () => {
    const response = await request(app).post('/user').send(user);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: response.body.id,
      todo: [],
      name: 'Zora Santos',
      username: 'Zora'
    });
  });

  test('Should not be able to create a new user when username already exists', async () => {
    await request(app).post('/user').send(user);
    const response = await request(app).post('/user').send(user);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Usuário já tem cadastro!');
  });
});
