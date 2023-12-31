import express,{Express, Request, Response} from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// initializing env
dotenv.config()

// initializing app
const app:Express = express();
const port:String = process.env.PORT || '5000'

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.get("/",async(req:Request,res:Response)=>{
    res.status(200).json({message:"Running successfull"});
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})