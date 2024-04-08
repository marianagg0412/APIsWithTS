import {Router,Request,Response} from "express";
import {getKeyboards, getKeyboard, createKeyBoard, deleteKeyBoard} from "../controllers/keyboard.controller";

const router = Router();

router.get("/",getKeyboards);
router.get("//:brand",getKeyboard);
router.post("/",createKeyBoard);
router.delete("/:brand",deleteKeyBoard);

export {router};