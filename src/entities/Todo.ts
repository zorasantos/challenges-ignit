import { v4 as uuidV4 } from 'uuid';

class Todo {
  id!: string;

  title!: string;

  done!: boolean;

  deadline!: Date;

  created_at!: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
      this.done = false
      this.created_at = new Date()
    }
  }

}

export { Todo }