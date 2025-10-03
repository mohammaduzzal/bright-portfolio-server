import { prisma } from "../../config/db"
import bcryptjs from "bcryptjs";

const loginWithEmailAndPassword = async({email,password} : {email : string, password : string}) =>{
    const user = await prisma.user.findUnique({
        where : {
            email
        }
    })

    if(!user){
        throw new Error("user not found")
    }

    const isPasswordMatch = await bcryptjs.compare(password as string, user.password as string)

    if(isPasswordMatch){
       return user
    }else{
       throw new Error("Password is not correct");
    }
}


export const AuthService = {
    loginWithEmailAndPassword
}