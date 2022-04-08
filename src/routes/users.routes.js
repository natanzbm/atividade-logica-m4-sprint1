import { Router } from "express";

import createUserController from "../controllers/users/createUser.controller";
// import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
// import updateUserController from "../controllers/users/updateUser.controller";

const usersRouter = Router();

usersRouter.get("", listUsersController);
usersRouter.post("", createUserController);
// usersRouter.put("/:id", updateUserController);
// usersRouter.delete("/:id", deleteUserController);

export default usersRouter;
