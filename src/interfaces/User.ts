import { Auth } from "./Auth";

export interface User extends Auth{
    name: string,
    description: string
}