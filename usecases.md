# Create user

A rota deve receber name, e username dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:

```js
   {
      id: 'uuid', // precisa ser um uuid
      name: 'Danilo Vieira',
      username: 'danilo',
      todos: []
    }
  ```

# Create todo

Cada tarefa deverá estar no seguinte formato:

  ```js
    {
      id: 'uuid', // precisa ser um uuid
      title: 'Nome da tarefa',
      done: false,
      deadline: '2021-02-27T00:00:00.000Z',
      created_at: '2021-02-22T00:00:00.000Z'
    }

  ```
Certifique-se que o ID seja um UUID.
