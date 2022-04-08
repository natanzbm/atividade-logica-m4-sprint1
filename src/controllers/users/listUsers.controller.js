import listUsersService from "../../services/users/listUsers.service";

const listUsersController = (request, response) => {
    const users = listUsersService();

    return response.json(users);
}

export default listUsersController;