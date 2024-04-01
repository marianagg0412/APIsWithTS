import {Router,Request,Response} from "express";

const router = Router();

router.get("/",(req:Request,res:Response)=>{
    res.send({data: "Web con Sebas", message:"BD con Sebas"});
});

export {router};