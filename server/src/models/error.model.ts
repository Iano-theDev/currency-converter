export interface IAppError extends Error {
    isOperational: boolean,
    statusCode: string
}

export class AppError extends Error {
    statusCode: number;
    isOperatopnal: boolean;

    constructor(message: string, status_code = 500) {
        super(message);
        this.statusCode = status_code;
        this.isOperatopnal = true;

        Error.captureStackTrace(this, this.constructor)
    }
} 