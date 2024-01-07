import express,{Express, Request, Response} from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import CategoryData from '../db/categories';

// initializing env
dotenv.config({path:".env"})

// initializing app
const app:Express = express();


app.use(cors())
app.use(cookieParser())
app.use(express.json())
CategoryData()
app.get("/",async(req:Request,res:Response)=>{
    res.status(200).json({message:"Running successfull"});
})

export default app;