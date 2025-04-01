"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRoutes_1 = __importDefault(require("./productRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use("/user", userRoutes_1.default);
router.use("/product", productRoutes_1.default);
exports.default = router;
