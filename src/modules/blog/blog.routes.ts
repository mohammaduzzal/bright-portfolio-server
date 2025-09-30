import { Router } from "express";
import { BlogController } from "./blog.controller";


const router = Router()
router.get("/",BlogController.getAllBlogs)


router.get("/:id",BlogController.getSingleBlog)

router.patch("/:id",BlogController.updateBlog)

router.delete("/:id",BlogController.deleteBlog)

router.post("/", BlogController.createBlog)



export const blogRouter = router