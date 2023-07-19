import { v4 as uuid } from "uuid";

class Tweet {
  private id: string;

  constructor(content: string, type: string) {
    this.id = uuid();
  }
}

export { Tweet };
