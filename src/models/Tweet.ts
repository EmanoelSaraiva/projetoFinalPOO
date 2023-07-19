import { v4 as uuid } from "uuid";

class Tweet {
  private id: string;
  private content: string;
  private type: string;

  constructor(content: string, type: string) {
    this.id = uuid();
    this.content = content;
    this.type = type;
  }
}

export { Tweet };
