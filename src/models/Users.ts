import { v4 as uuid } from "uuid";
import { Tweet } from "./Tweet";

class Users {
  private id: string;
  private username: string;
  private email: string;
  private name: string;
  private password: string;
  private tweets: Tweet[];

  constructor(
    name: string,
    email: string,
    username: string,
    password: string,
    tweets?: Tweet[]
  ) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.tweets = [];
  }
}

export { Users };
