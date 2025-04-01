"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        res.status(400).json({ error: "Bad request" });
    }
    else if (err instanceof ReferenceError) {
        res.status(500).json({ error: "Internal server error" });
    }
    else if (err instanceof TypeError) {
        res.status(400).json({ error: "Bad request" });
    }
    else if (err instanceof RangeError) {
        res.status(400).json({ error: "Bad request" });
    }
    else if (err instanceof EvalError) {
        res.status(500).json({ error: "Internal server error" });
    }
    else {
        next(err);
    }
});
app.use((err, req, res, next) => {
    res.status(500).json({ error: "Internal server error" });
});
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
