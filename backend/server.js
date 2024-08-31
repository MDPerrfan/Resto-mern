import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
//app config
const app = express();
const port = process.env.PORT || 4000;
app.use('/files', express.static(path.join(__dirname, 'upload')));
//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();


//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('upload'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(` Server Started on https://localhost:${port} `)
})