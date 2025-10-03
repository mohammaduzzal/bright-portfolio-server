import { Request, Response } from "express";
import { BlogService } from "./blog.service";


const createBlog = async (req: Request, res: Response) => {
    try {
        const result = await BlogService.createBlog(req.body)
         res.status(200).json({
            success: true,
            message: "Blog created successfully",
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

const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const result = await BlogService.getAllBlogs()
        res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
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


const getSingleBlog = async (req: Request, res: Response) => {
    try {
        const result = await BlogService.getSingleBlog(Number(req.params.id))
         res.status(200).json(result)
    } catch (error) {
          res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : error
    });
    }
}
const updateBlog = async (req: Request, res: Response) => {
    try {
        const result = await BlogService.updateBlog(Number(req.params.id), req.body)
         res.status(200).json({
            success: true,
            message: "Blog updated successfully",
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


const deleteBlog = async (req: Request, res: Response) => {
    try {
        const result = await BlogService.deleteBlog(Number(req.params.id))
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
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


export const BlogController = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
}