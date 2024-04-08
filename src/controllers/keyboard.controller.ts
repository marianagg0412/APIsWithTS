import {getKeyBoard, getKeyBoards, createKeyboard, deleteKeyboard} from "../services/keyboard.service";
import {Request,Response} from "express";

export const getKeyboards = async(req: Request, res: Response) => {
    const keyboards = await getKeyBoards();
    return res.status(200).send(keyboards);
}

export const getKeyboard = async(req: Request, res: Response) => {
    const keyboard = await getKeyBoard(req.params.id);
    return res.status(200).send(keyboard);
}

export const createKeyBoard = async(req: Request, res: Response) => {
    try{
        const keyboard = await createKeyboard(req.body);
        return res.status(201).send(keyboard);
    } catch(error){
        return res.status(400).send(error);
    }
}

export const deleteKeyBoard = async(req: Request, res: Response) => {
    const keyboard = await deleteKeyboard(req.params.brand);
    return res.status(200).send(keyboard);
}