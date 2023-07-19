import { users } from "../database";
import validateDataUser from "../middlewares/validateDataUser";
import { Users } from "../models";

class UserControllers {
  public add(data: any): Users | boolean {
    const validated = validateDataUser(data);
    if (validated) {
      const newUser = new Users(
        data.name,
        data.username,
        data.password,
        data.email
      );
      users.push(newUser);
      return newUser;
    } else {
      console.log("Dados invalidos");
      return false;
    }
  }
}
