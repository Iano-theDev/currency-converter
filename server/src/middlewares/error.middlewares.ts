import { NextFunction, Request, Response } from "express";
import { AppError, IAppError } from "../models/error.model";
import { logger } from "../config/logger.config";
import { error } from "winston";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const isAppError= err instanceof AppError;

    const statusCode = isAppError ? err.statusCode : 500;
    const message = err.message

    logger.error(`${req.method} ${req.originalUrl} -  ${err.message}\n${err.stack}`);

    res.status(statusCode).json({success: false, message})
}