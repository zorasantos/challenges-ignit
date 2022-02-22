import { v4 as uuidV4 } from 'uuid';

class User {
  id!: string;
  name!: string;
  username!: string;
  todo!: Array<[]>;

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
      this.todo = []
    }
  }

}

export { User }