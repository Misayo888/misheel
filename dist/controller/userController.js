"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const userService_1 = require("../services/userService");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        .0;
        const user = yield userService_1.userService.registerUser(req.body);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield userService_1.userService.loginUser(req.body);
        res.json({ token });
    }
    catch (error) {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});
exports.loginUser = loginUser;
