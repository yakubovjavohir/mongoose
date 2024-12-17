import { Router } from "express";
import {productController} from "./product.controller.js"
const router = Router()

router.get("/getAll", productController.getAll.bind(productController))
router.post("/create", productController.create.bind(productController))
router.delete("/delete/:id", productController.deleteById.bind(productController))
router.put("/update/:id", productController.updateByID_put.bind(productController))
router.patch("/update/:id", productController.updateByID_patch.bind(productController))


export {router as productRoutes}