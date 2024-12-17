import { Router } from "express";
import { categoryRoutes } from "./category/category.routes.js";
import {productRoutes} from "./product/product.routes.js"
const router = Router();

router.use("/category", categoryRoutes);
router.use("/product", productRoutes)



export { router };
