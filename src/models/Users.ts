import { v4 as uuid } from "uuid";
import { Tweet } from "./Tweet";
import { tweets } from "../database";

export class Users {
  private id: string;
<<<<<<< HEAD
  public username: string;
  private email: string;
  private name: string;
  private password: string;
  private follow: string[];

  constructor(name: string, email: string, username: string, password: string) {
=======
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
>>>>>>> 82fae40ea50f97de1511354d87568ed139e8d7de
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
<<<<<<< HEAD
    this.follow = [];
  }

  public getDetails() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      follow: this.getFollwing(),
      Tweet: tweets.map((tweet) => tweet.getDatails()),
    };
  }

  public followUser(user: Users) {
    if (user !== this && !this.follow.includes(user.getFollwing())) {
      this.follow.push(user.getDetails().id);
      console.log(`${this.name} começou a seguir ${user.getName()}`);
    } else {
      console.log("Não é permitido seguir a si mesmo e usuários duplicados");
    }
  }

  public getFollwing() {
    return this.follow.join("");
  }

  public getName(): string {
    return this.name;
  }

  public getId(): string {
    return this.id;
  }

  public addTweets(tweet: Tweet) {
    tweets.push(tweet);
  }

  public getReplays() {
    return tweets.map((tweet) => tweet.getDatails().content);
=======
    this.tweets = [];
>>>>>>> 82fae40ea50f97de1511354d87568ed139e8d7de
  }
}
