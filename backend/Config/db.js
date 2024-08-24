import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://resto:MDPpc776@cluster0.ohw5n.mongodb.net/resto').then(() => console.log("DB connected"));
}