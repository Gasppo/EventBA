import express from "express";
import { getUsers, registerUser } from "./queries";
const app = express();
const port = 5000;

app.use(express.json());
app.get("/", (_, res) => {
  res.status(200).send("Conexión");
});

app.get("/api/users", getUsers);
app.post("/api/users", registerUser);
app.listen(port, () => console.log(`Running on port ${port}`));
