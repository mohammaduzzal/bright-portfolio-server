import { Request, Response } from "express";
import { UserService } from "./user.service";

// const createUser = async(req : Request,res : Response) =>{
//     try {
//         const result = await UserService.createUser(req.body)
//         res.status(201).json(result)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

const getAllUsers = async(req : Request,res : Response) =>{
    try {
        const result = await UserService.getAllUsers()
         res.status(200).json({
            success: true,
            message: "user created successfully",
            data: result
        })
    } catch (error) {
         res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : error
    });
        
    }
}


const getSingleUser = async(req : Request,res : Response) =>{
    try {
        const result = await UserService.getSingleUser(Number(req.params.id))
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : error
    });
    }
}


const deleteUser = async(req : Request,res : Response) =>{
    try {
        const result = await UserService.deleteUser(Number(req.params.id))
        res.status(200).json({
            success: true,
            message: "user deleted successfully",
            data: result
        })
    } catch (error) {
          res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : error
    });
    }
}


export const UserController={
    // createUser,
    getAllUsers,
    getSingleUser,
    deleteUser
}