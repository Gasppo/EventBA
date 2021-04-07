import express from "express";
import {
  getEvents,
  getUserByEmail,
  getUserById,
  getUsers,
  registerUser,
} from "./queries";
const app = express();
const port = 5000;

//calls
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (_, res) => {
  res.status(200).send("Conexión");
});

app.get("/api/users", getUsers);
app.get("/api/events", getEvents);
app.get("/api/users/email/:email", getUserByEmail);
app.get("/api/users/id/:id", getUserById);
app.post("/api/users", registerUser);
app.listen(port, () => console.log(`Running on port ${port}`));
