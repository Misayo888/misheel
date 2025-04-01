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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../database"));
const encryption_1 = require("../utils/encryption");
const encryption_2 = require("../utils/encryption");
exports.userService = {
    registerUser: (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password }) {
        const encryptedPassword = (0, encryption_1.encrypt)(password);
        return database_1.default.user.create({ data: { email, password: encryptedPassword } });
    }),
    loginUser: (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password }) {
        const user = yield database_1.default.user.findUnique({ where: { email } });
        if (!user || !((0, encryption_2.decrypt)(user.password))) {
            throw new Error('Invalid credentials');
        }
        return jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    })
};
