"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const queries_1 = require("./queries");
const app = express_1.default();
const port = 5000;
//calls
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (_, res) => {
    res.status(200).send("Conexión");
});
app.get("/api/users", queries_1.getUsers);
app.get("/api/events", queries_1.getEvents);
app.get("/api/users/email/:email", queries_1.getUserByEmail);
app.get("/api/users/id/:id", queries_1.getUserById);
app.post("/api/users", queries_1.registerUser);
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map