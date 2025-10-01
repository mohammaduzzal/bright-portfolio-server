import { Router } from "express";
import { ProjectController } from "./project.controller";



const router = Router()

router.get("/",ProjectController.getAllProjects)


router.get("/:id",ProjectController.getSingleProject)

router.patch("/:id",ProjectController.updateProject)

router.delete("/:id",ProjectController.deleteProject)

router.post("/", ProjectController.createProject)



export const projectRouter = router