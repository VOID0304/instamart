import express,{ Express,Request,Response } from "express";
import { getproducts } from "../controllers/product";
const router:Express = express()

router.get("/getCategories",getproducts)

export default router
