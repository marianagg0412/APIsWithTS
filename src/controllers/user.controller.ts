import {Request, Response} from "express";
import {loginUserService, registerUser} from "../services/user.service";
import {User} from "../interfaces/User";

export const registerUserController = async (req:Request, res:Response) =>{
    const authUser: User = req.body;
    const registeredUser = await registerUser(authUser);
    res.status(201).send(registeredUser);
}

export const loginUserController = async (req:Request, res:Response) =>{
    const authUser: User = req.body;
    const loggedInUser = await loginUserService(authUser);
    res.status(201).send(loggedInUser);
}