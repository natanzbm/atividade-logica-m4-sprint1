import express from "express";
import { v4 as uuid } from "uuid";

const app = express();

const port = 3456;

app.use(express.json());

const users = [];

app.get("/users", (request, response) => {
    return response.json(users);
})

app.post("/users", (request, response) => {
    const { name, email } = request.body;

    const user = {
        name,
        email,
        id: uuid()
    }

    users.push(user);

    return response.status(201).json(user);
})

app.listen(port, () => {
    console.log(`App running at port ${port}.`);
}) 