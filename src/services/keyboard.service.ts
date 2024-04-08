import {Keyboard} from "../models/teclados.models";

let Keyboards: Keyboard[] = [
    {
        color: "Carbon",
        brand: "Logitech G213",
        size: 100,
        price: 80,
        wireless: false,
    },
    {
        color: "Black",
        brand: "Logitech tkl 255",
        size: 65,
        price: 50,
        wireless: false,
    },
    {
        color: "White",
        brand: "Red Dragon Kumara k2552",
        size: 65,
        price: 45,
        wireless: true,
    },
    {
        color: "White",
        brand: "VSG",
        size: 75,
        price: 100,
        wireless: false,
    }]

export const getKeyBoards = async() => {
    return Keyboards;
}
export const getKeyBoard = async(brand: string) => {
    return Keyboards.find((keyboard) => keyboard.brand === brand);
}

export const createKeyboard = async(keyboard:Keyboard)=>{
    Keyboards.push(keyboard); //Keyboards=[...Keyboards];
    return keyboard;
}

export const deleteKeyboard = async(brand: string) => {
    return Keyboards.filter((keyboard) => keyboard.brand !== brand);
}





