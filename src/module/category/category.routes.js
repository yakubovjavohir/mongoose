import { Router } from "express";
import { categoryController } from "./category.controller.js";

const router = Router();

router.get("/getAll", categoryController.getAll.bind(categoryController));
router.post("/create", categoryController.create.bind(categoryController));
router.delete("/delete/:id", categoryController.deleteById.bind(categoryController));
router.put("/update/:id", categoryController.updateByID_post.bind(categoryController));
router.patch("/update/:id", categoryController.updateByID_patch.bind(categoryController));



export { router as categoryRoutes };
