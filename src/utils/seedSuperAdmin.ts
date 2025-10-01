import { Prisma, Role } from "@prisma/client";
import { prisma } from "../config/db"
import bcryptjs from "bcryptjs";

export const seedSuperAdmin = async() =>{

    try {

        const isSuperAdminExist = await prisma.user.findFirst({
            where:{
                email : process.env.SUPER_ADMIN_EMAIL
            }
        })

         if (isSuperAdminExist) {
            console.log("Super Admin Already Exists!");
            return;
        }

        console.log("Trying to create Super Admin...");

        const hashedPassword = await bcryptjs.hash(process.env.SUPER_ADMIN_PASSWORD as string, Number(process.env.BCRYPT_SALT_ROUND))

        const payload : Prisma.UserCreateInput = {
            name : "bright",
            email : process.env.SUPER_ADMIN_EMAIL as string,
            password : hashedPassword,
            role : Role.SUPER_ADMIN

        }

        const superAdmin = await prisma.user.create({
            data : payload
        })

         console.log("Super Admin Created Successfuly! \n");
        console.log(superAdmin);
        
    } catch (error) {
        console.error(error)
    }
}