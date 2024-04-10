import { model, Schema } from "mongoose";
import { User } from "../interfaces/User";

const UserSchema = new Schema<User>({
  name:{
      type: String
  },
  description:{
    type: String, default: "aaaa"
  },
  email:{
    type: String, required: true, unique: true
  },
  password:{
    type: String, required: true, minlength: 8
  }
})

const userModel = model('User', UserSchema);
export default userModel;