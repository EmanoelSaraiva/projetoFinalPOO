import { users } from "../database";
import validateDataUser from "../middlewares/validateDataUser";
import { Users } from "../models";

class UserControllers {
  public add(data: any): Users | boolean {
    const validated = validateDataUser(data);
    if (validated) {
      const newUser = new Users(
        data.name,
        data.email,
        data.username,
        data.password
      );
      users.push(newUser);
      console.log(`Usuario criado com sucesso!`);
      return newUser;
    } else {
      console.log("Dados invalidos");
      return false;
    }
  }

  public list() {
    console.log(users);
  }
}

export default new UserControllers();
