import users from "../../database/users";

const updateUserService = ({ id, name, email }) => {
    let user = users.find((user) => user.id === id);

    if (!user) {
        throw new Error("User not found!");
    }

    const updatedUser = {
        name,
        email,
        id,
    }

    users.splice(user);
    user = updatedUser;

    users.push(users);

    return user;
}

export default updateUserService;