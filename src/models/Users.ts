import { v4 as uuid } from "uuid";
import { Tweet } from "./Tweet";

class Users {
  private id: string;
  constructor(
    nome: string,
    email: string,
    username: string,
    private password: string,
    tweets: Tweet[]
  ) {
    this.id = uuid();
  }
}

export { Users };
