import { Response,Request } from "express"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export const getproducts = async(req:Request,res:Response) => {
    const data = await prisma.categories.findMany({})
    
    res.status(200).json({"data":data})
} 