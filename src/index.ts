import TweetsControllers from "./controllers/TweetsControllers";
import UserControllers from "./controllers/UserControllers";

const user1 = UserControllers.add({
  name: "Emanoel",
  username: "saraivas",
  email: "emanoelsaraivas@gmail.com",
  password: "1234",
});

const tweet1 = TweetsControllers.add({ content: "Ola mundo", type: "text" });

UserControllers.list();
TweetsControllers.list();
