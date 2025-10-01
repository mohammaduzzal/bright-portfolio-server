import {  Prisma, Project } from "@prisma/client"
import { prisma } from "../../config/db"

const createProject = async(payload : Prisma.ProjectCreateInput) : Promise<Project> =>{

    const createdProject = await prisma.project.create({
        data:payload
    })
    return createdProject
}


const getAllProjects = async() =>{
    const result =await prisma.project.findMany({
        orderBy:{
            createdAt : "desc"
        }
    })
    return result
    
}

const getSingleProject = async(id : number) =>{
   
        const result = await prisma.project.findUnique({
            where:{
                id
            },
        })
     
        return result
}



const updateProject = async(id : number, payload : Partial<Project>) =>{
   
        const result = await prisma.project.update({
            where:{
                id
            },
            data : payload
        })
     
        return result
}

const deleteProject = async(id : number) =>{
   
        const result = await prisma.project.delete({
            where:{
                id
            }
        })
     
        return result
}


export const ProjectService={
    createProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject
}