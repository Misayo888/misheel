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
exports.productService = void 0;
const database_1 = __importDefault(require("../database"));
exports.productService = {
    createProduct: (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, price }) {
        return database_1.default.product.create({ data: { name, price } });
    }),
    getProducts: () => __awaiter(void 0, void 0, void 0, function* () {
        return database_1.default.product.findMany();
    }),
    updateProduct: (id_1, _a) => __awaiter(void 0, [id_1, _a], void 0, function* (id, { name, price }) {
        return database_1.default.product.update({ where: { id: Number(id) }, data: { name, price } });
    }),
    deleteProduct: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return database_1.default.product.delete({ where: { id } });
    })
};
