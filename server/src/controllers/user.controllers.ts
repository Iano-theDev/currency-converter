import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/users.repository";
import { logger } from "../config/logger.config";

const userRepo = new UserRepository()

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username } = req.body;
        const userExist = await userRepo.getByName(username)
        if (userExist) {
            return res.status(409).json({message: "user already exists", user: userExist})
        }
        const user = await userRepo.create(username)
        console.log("User created is: ", user)
        res.status(201).json({message: "user created successfully", user:user})
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id)
        const user = await userRepo.getById(id)
        console.log("User git by id is: ", user)
        res.status(201).json({message: "user fetched successfully", user:user})
    } catch (error) {
        logger.error(error)
        next(error)
    }
}
