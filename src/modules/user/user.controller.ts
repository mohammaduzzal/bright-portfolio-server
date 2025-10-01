import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async(req : Request,res : Response) =>{
    try {
        const result = await UserService.createUser(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllUsers = async(req : Request,res : Response) =>{
    try {
        const result = await UserService.getAllUsers()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
        
    }
}


const getSingleUser = async(req : Request,res : Response) =>{
    try {
        const result = await UserService.getSingleUser(Number(req.params.id))
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteUser = async(req : Request,res : Response) =>{
    try {
        const result = await UserService.deleteUser(Number(req.params.id))
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}


export const UserController={
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser
}