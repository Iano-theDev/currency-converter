import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.controllers";

const userRoutes =  Router();

userRoutes.post("/", createUser);
userRoutes.get("/:id", getUserById);

export default userRoutes