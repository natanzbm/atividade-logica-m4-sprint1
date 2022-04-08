import users from "../../database/users";
import { v4 as uuid } from "uuid";

const createUserService = ({ name, email }) => {
    const user = {
        name,
        email,
        id: uuid(),
    }

    users.push(user);

    return user;
}

export default createUserService;
