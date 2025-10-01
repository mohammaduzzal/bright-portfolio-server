import { Request, Response } from "express";
import { ProjectService } from "./project.service";



const createProject = async(req : Request,res : Response) =>{
    try {
        const result = await ProjectService.createProject(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllProjects = async(req : Request,res : Response) =>{
    try {
        const result = await ProjectService.getAllProjects()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}


const getSingleProject = async(req : Request,res : Response) =>{
    try {
        const result = await ProjectService.getSingleProject(Number(req.params.id))
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}
const updateProject = async(req : Request,res : Response) =>{
    try {
        const result = await ProjectService.updateProject(Number(req.params.id),req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteProject = async(req : Request,res : Response) =>{
    try {
        const result = await ProjectService.deleteProject(Number(req.params.id))
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}


export const ProjectController={
   createProject,
   getAllProjects,
   getSingleProject,
   updateProject,
   deleteProject
}