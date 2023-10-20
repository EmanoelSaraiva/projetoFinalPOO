import { v4 as uuid } from "uuid";
import { users } from "../database";
import { Type } from "./Type";
import { Reply } from "./Reply";

class Tweet {
  private id: string;
  private content: string;
  private type: Type;
  private user: string;
  private likes: string[];
  private replys: Reply[];

  constructor(content: string, userId: string, type: Type) {
    this.user = this.setUser(userId);
    this.id = uuid();
    this.content = content;
    this.type = type;
    this.setUser(userId);
    this.likes = [];
    this.replys = [];
  }

  public getDatails() {
    return {
      id: this.id,
      user: this.user,
      content: this.content,
      type: this.type,
      likes: this.likes,
      replys: this.replys,
    };
  }

  public getContLikes(): number {
    return this.likes.length;
  }

  public getUser(userId: string) {
    return this.user;
  }

  public likesTweet(userId: string): void {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
      for (const user of users) {
        if (user.getId() === userId) {
          console.log(`${user.getName()} deu like no tweet`);
        }
      }
    }
  }

  public replyTweet(reply: Reply) {
    this.replys.push(reply);
    return reply;
  }

  public deslikesTweet(userId: string): void {
    const i = this.likes.indexOf(userId);
    if (i !== -1) {
      this.likes.splice(i, 1);
    }
  }

  public getId(): string {
    return this.id;
  }

  public setUser(userID: string) {
    const user = users.find((u) => u.getId() === userID);
    if (user) {
      return (this.user = user.getId());
    } else {
      throw new Error("Usuario nao encontrado");
    }
  }
}

export { Tweet };
