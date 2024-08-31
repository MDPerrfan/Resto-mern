import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://resto:MDPpc776@cluster0.ohw5n.mongodb.net/resto', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error.message);
        process.exit(1); // Exit the process with a failure code
    }
};