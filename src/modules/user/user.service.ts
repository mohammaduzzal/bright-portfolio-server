import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"
import bcryptjs from "bcryptjs";

const createUser = async(payload : Prisma.UserCreateInput) : Promise<User> =>{
    const {password,...rest} = payload

    const hashedPassword = await bcryptjs.hash(password as string, Number(process.env.BCRYPT_SALT_ROUND))
    const createdUser = await prisma.user.create({
        data:{
            ...rest,
            password : hashedPassword
        }
    })
    return createdUser
}


const getAllUsers = async() =>{
    const result =await prisma.user.findMany({
        select :{
               id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            role: true,
          
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

const deleteUser = async(id : number) =>{
   
        const result = await prisma.user.delete({
            where:{
                id
            }
        })
     
        return result
}

export const UserService={
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser
}