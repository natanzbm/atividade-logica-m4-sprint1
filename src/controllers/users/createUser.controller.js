import createUserService from "../../services/users/createUser.service";

const createUserController = (request, response) => {
    const { name, email } = request.body;

    const user = createUserService({ name, email });

    return response.status(201).json(user);
}

export default createUserController;