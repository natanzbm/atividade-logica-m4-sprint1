import { v4 as uuid } from "uuid";
import express from "express";

const app = express();

const port = 3456;

let users = [];

app.use(express.json());

app.get("/users", (request, response) => {
    return response.json(users);
})

app.post("/users", (request, response) => {
    const { name, email } = request.body;

    const newUser = {
        name,
        email,
        id: uuid()
    }

    users = [...users, newUser];

    return response.status(201).json(newUser);
})

app.listen(port, () => {
    console.log(`App running at port ${port}.`);
})