import {encrypt, verify} from "../utils/bcrypts.util";
import {User} from "../interfaces/User";
import UserModel from "../models/User.model";
import {Auth} from "../interfaces/Auth";
import {signToken} from "../utils/jwt.utils";

export const registerUser = async (authUser:User) =>{
    const {email,password, description, name} = authUser;
    console.log(password);
    const exist = await UserModel.findOne({email});
    if(exist){
        return "Email already exists";
    }
    const passwordHash = await encrypt(password);
    console.log(passwordHash);
    return await UserModel.create({email, password: passwordHash, description, name});
}

export const loginUserService = async(authUser:Auth) =>{
    const {email, password} = authUser;
    const userPass = await UserModel.findOne({email});
    if(!userPass){
        return "User not found";
    }
    const passwordHash = userPass.password;
    const isMatch = await verify(password, passwordHash);
    if(!isMatch){
        return 'Invalid credentials';
    }
    const token = await signToken(email);
    return {email, message: "Login successful", token};
}