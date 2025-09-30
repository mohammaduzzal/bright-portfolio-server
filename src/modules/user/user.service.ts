import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"

const createUser = async(payload : Prisma.UserCreateInput) : Promise<User> =>{

    const createdUser = await prisma.user.create({
        data:payload
    })
    return createdUser
}


const getAllUsers = async() =>{
    const result =await prisma.user.findMany({
        select :{
              
          
        },
        orderBy:{
            createdAt : "desc"
        }
    })
    return result
    
}

const getSingleUser = async(id : number) =>{
   
        const result = await prisma.user.findUnique({
            where:{
                id
            },
            select:{
                id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            role: true,
            }
        })
     
        return result
}


export const UserService={
    createUser,
    getAllUsers,
    getSingleUser
}