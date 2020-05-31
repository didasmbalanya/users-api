import express from "express";
import { readFileSync } from "fs";

// set up express server
const app = express();

// read json file contents
const data = readFileSync("./users.json", "utf8");
const users: IUser[] = JSON.parse(data);

// set up routes
app.get("/users", (req, res) => {
  res.status(200).send({ users });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((value) => value.id === Number(id));
  if (!user)
    return res.status(404).send({ error: `user with id '${id}' not found` });
  res.status(200).send({ user });
});

// error handler for unknown routes
app.use("*", (req, res) => {
  res.status(404).send({ error: "route doesn't exist" });
});

// server port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

interface IUser {
  id: number;
  username: string;
  email: string;
}
