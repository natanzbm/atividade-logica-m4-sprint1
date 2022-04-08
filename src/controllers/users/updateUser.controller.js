import updateUserService from "../../services/users/updateUser.service";

const updateUserController = (request, response) => {
    const { id } = request.params;
    const { name, title } = request.body;

    try {
        const user = updateUserService({ id, name, title });
        return response.json(user);
    } catch (err) {
        return response.status(400).json(err.message);
    }
}

export default updateUserController;