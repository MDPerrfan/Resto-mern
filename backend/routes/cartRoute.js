import express from "express"
import authMiddleware from "../middleware/auth.js";
import { addTOcart, removeFromcart, getCart } from "../controllers/cartController.js"

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addTOcart);
cartRouter.post("/remove", authMiddleware, removeFromcart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;