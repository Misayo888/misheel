"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const auth_1 = require("../middlewear/auth");
const productRouter = express_1.default.Router();
productRouter.post('/', auth_1.authenticateJWT, productController_1.createProduct);
productRouter.get('/', productController_1.getProducts);
productRouter.put('/:id', auth_1.authenticateJWT, productController_1.updateProduct);
productRouter.delete('/:id', auth_1.authenticateJWT, productController_1.deleteProduct);
exports.default = productRouter;
