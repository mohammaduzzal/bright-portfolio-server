import express from "express";
import compression from "compression";
import cors from "cors";
import { userRouter } from "./modules/user/user.routes";
import { blogRouter } from "./modules/blog/blog.routes";
import { projectRouter } from "./modules/project/project.routes";

const app = express()


// Middleware
app.use(cors()); 
app.use(compression()); 
app.use(express.json()); 

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/user", userRouter)
app.use("/api/v1/blog", blogRouter)
app.use("/api/v1/project", projectRouter)


app.get("/", (_req,res) =>{
    res.send("API is running")
})


// 404 handler
app.use((req,res,next)=>{
    res.status(404).json({
        success : false,
        message : "Route Not Found"
    })
})


export default app;
