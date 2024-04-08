import { model, models, Schema } from "mongoose"
import { Keyboard } from "../interfaces/Keyboard"

const KeyboardSchema = new Schema<Keyboard>({
    color: { type: String, required: true, trim: true, lowercase: true },
    brand: { type: String, required: true, trim: true, lowercase: true, values: ["logitech", "RedDragon", "VSG", "Genuis", "ASUS ROG"] },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    wireless: { type: Boolean, required: true }
})


const KeyboardModel = model('keyboards', KeyboardSchema);
export default KeyboardModel;