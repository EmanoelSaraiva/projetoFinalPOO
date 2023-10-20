import TweetsControllers from "./controllers/TweetsControllers";
import UserControllers from "./controllers/UserControllers";

<<<<<<< HEAD
const user1 = UserControllers.addNewUser(
  "Emanoel",
  "teste@tste.com",
  "Saraivas",
  "teste"
);

const user2 = UserControllers.addNewUser(
  "Everton",
  "teste@tste.com",
  "Ever",
  "teste"
);

const user3 = UserControllers.addNewUser(
  "Thainara",
  "teste@tste.com",
  "Bartolomeu",
  "teste"
);

const tweet1 = TweetsControllers.add(user1!.getId(), "Hello world!", "normal");
const tweet2 = TweetsControllers.add(user2!.getId(), "Agora vai", "normal");
const tweet3 = TweetsControllers.add(user3!.getId(), "Hello world!", "normal");

UserControllers.follow(user2!.getId(), user1!.getId());
UserControllers.follow(user3!.getId(), user1!.getId());

TweetsControllers.getLikeTweets(tweet1!.getId(), user2!.getId());
=======
const user1 = UserControllers.add({
  name: "Emanoel",
  username: "saraivas",
  email: "emanoelsaraivas@gmail.com",
  password: "1234",
});

const tweet1 = TweetsControllers.add({ content: "Ola mundo", type: "text" });

UserControllers.list();
TweetsControllers.list();
>>>>>>> 82fae40ea50f97de1511354d87568ed139e8d7de
