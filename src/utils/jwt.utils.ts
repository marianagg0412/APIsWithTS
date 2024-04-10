import 'dotenv';
import {sign, verify} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'secret'
export const signToken = async (id: string)=>{
    const jwt = sign({id}, JWT_SECRET, {expiresIn: '2h'});
    return jwt;
}

export const verifyToken = async (token: string)=>{
   return verify(token, JWT_SECRET); //If it's ok, it will return the decoded token
}
