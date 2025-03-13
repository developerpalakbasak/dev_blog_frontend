import mongoose from "mongoose";

export const ConnectDB = ()=>{
mongoose.connect(process.env.MONGO_URI);
console.log("DB connected")
}
