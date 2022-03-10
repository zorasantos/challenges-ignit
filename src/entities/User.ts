import { v4 as uuidV4 } from 'uuid';

class User {
  id!: string;
  name!: string;
  username!: string;
  todos!: Array<[]>;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.todos = [];
    }
  }
}

export { User };
