import express from "express";

const app = express();

const port = 3456;

app.use(express.json());

app.listen(port, () => {
    console.log(`App running at port ${port}.`);
})

// app.get("/users", (request, response) => {
    //     return response.json(users);
    // })

// app.post("/users", (request, response) => {
//     const { name, email } = request.body;

//     const user = {
//         name,
//         email,
//         id: uuid()
//     }

//     users.push(user);

//     return response.status(201).json(user);
// })

// app.put("/users/:id", (request, response) => {
//     const { id } = request.params;

//     let user = users.filter((user) => user.id === id);

//     if (!user.length) {
//         return response.status(400).json({
//             error: "User not found",
//         })
//     }

//     const { name, email } = request.body;

//     const updatedUser = {
//         name,
//         email,
//         id
//     }

//     users.splice(user);
//     user[0] = updatedUser;

//     users.push(user[0]);

//     return response.json(user[0]);
// })
