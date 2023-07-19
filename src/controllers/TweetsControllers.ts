import { tweets } from "../database";
import { Tweet } from "../models";

class TweetsControllers {
  public add(data: any): void {
    const newTweets = new Tweet(data.content, data.type);

    tweets.push(newTweets);
  }

  public list() {
    console.log(tweets);
  }
}

export default new TweetsControllers();
