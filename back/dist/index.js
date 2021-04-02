"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const queries_1 = require("./queries");
const app = express_1.default();
const port = 5000;
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.status(200).send("Conexión");
});
app.get("/api/users", queries_1.getUsers);
app.post("/api/users", queries_1.registerUser);
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map