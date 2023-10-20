import { users } from "../database";
import ValidateDataUser from "../middlewares/ValidateDataUser";
import { Users } from "../models";

class UserControllers {
  public addNewUser(
    name: string,
    email: string,
    username: string,
    password: string
  ) {
    const validated = ValidateDataUser.validatedUsername(username);

    if (validated) {
      const newUser = new Users(name, email, username, password);
      users.push(newUser);
      console.log(`Usuario criado com sucesso!`);
      return newUser;
    }
  }

  public follow(idUser: string, idUserFollow: string) {
    const idUsers = users.find((id) => id.getId() === idUser);
    const idUsersFollow = users.find((id) => id.getId() === idUserFollow);

    if (!idUsers || !idUsersFollow) {
      console.log("Usuário não encontrado");
      return;
    } else if (idUsersFollow === idUsers) {
      console.log("Voce não pode seguir a si mesmo");
      return;
    }

    return idUsers.followUser(idUsersFollow);
  }

  public getUserId(id: string) {
    const userId = users.find((i) => i.getDetails().id === id);
    if (userId) {
      return userId.getDetails();
    }
  }

  public list() {
    console.log(users);
  }
}

export default new UserControllers();
