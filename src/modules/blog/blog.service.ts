import { Blog, Prisma } from "@prisma/client"
import { prisma } from "../../config/db"

const createBlog = async(payload : Prisma.BlogCreateInput) : Promise<Blog> =>{

    const createdBlog = await prisma.blog.create({
        data:payload
    })
    return createdBlog
}


const getAllBlogs = async() =>{
    const result =await prisma.blog.findMany({
        orderBy:{
            createdAt : "desc"
        }
    })
    return result
    
}

const getSingleBlog = async(id : number) =>{
   
        const result = await prisma.blog.findUnique({
            where:{
                id
            },
        })
     
        return result
}



const updateBlog = async(id : number, payload : Partial<Blog>) =>{
   
        const result = await prisma.blog.update({
            where:{
                id
            },
            data : payload
        })
     
        return result
}

const deleteBlog = async(id : number) =>{
   
        const result = await prisma.blog.delete({
            where:{
                id
            }
        })
     
        return result
}


export const BlogService={
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
}