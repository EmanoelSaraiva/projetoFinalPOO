import { tweets } from "../database";
import { Tweet } from "../models";
<<<<<<< HEAD
import { Type } from "../models/Type";

class TweetsControllers {
  public add(idUser: string, conteudo: string, tipo: Type) {
    const newTweets = new Tweet(conteudo, idUser, tipo);
    tweets.push(newTweets);
    return newTweets;
  }

  public getTweetsAll() {
    return tweets;
  }

  public getLikeTweets(id: string, idUser: string) {
    const tweet = this.getTweetsAll().find((t) => t.getDatails().id === id);
    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }
    if (idUser === tweet.getDatails().user) {
      console.log("Não pode curtir seu proprio tweet");
      return;
    }
    tweet.likesTweet(idUser);
    return tweet;
  }

  public tweetId(id: string) {
    const tweet = this.getTweetsAll().find((t) => t.getDatails().id === id);

    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }
=======

class TweetsControllers {
  public add(data: any): void {
    const newTweets = new Tweet(data.content, data.type);

    tweets.push(newTweets);
>>>>>>> 82fae40ea50f97de1511354d87568ed139e8d7de
  }

  public list() {
    console.log(tweets);
  }
}

export default new TweetsControllers();
