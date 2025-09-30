import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router()
router.get("/",UserController.getAllUsers)


router.get("/:id",UserController.getSingleUser)

router.post("/", UserController.createUser)



export const userRouter = router