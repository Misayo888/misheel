import productRouter from "./productRoutes";
import UserRouter from "./userRoutes"

import express from "express"

const router = express.Router();

router.use("/user",UserRouter)
router.use("/product",productRouter)

export default router;
