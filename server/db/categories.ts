import { PrismaClient } from '@prisma/client/edge'
import db from "../categories.json"
const prisma = new PrismaClient()

export default async function CategoryData(){
    //prisma.$connect()
    await prisma.categories.createMany({
        data:db
    })
}

