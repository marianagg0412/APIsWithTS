import {Router,Request,Response} from "express";

const router = Router();
router.get('/mouses', (req:Request, res:Response) => {
    res.send("Mouses route");
});

export {router}