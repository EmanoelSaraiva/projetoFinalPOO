import { users } from "../database";

class ValidateDataUser {
  public validatedUsername(username: string) {
    const validated = users.some((u) => u.username === username);

    if (!validated === false) {
      console.log("Usuario já cadastrado!");
      return false;
    } else {
      return true;
    }
  }
}

export default new ValidateDataUser();
