import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from 'path'

const parentDirectory = path.dirname(__dirname)
const logDirectory = path.join(parentDirectory, 'logs')

export const logger =  createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({format: 'YYYY-MM-DD HH:mm:SS'}),
        format.printf((info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
    ),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(logDirectory, `app-%DATE%.log`),
            datePattern: `YYYY-MM-DD`,
            maxFiles: '14d',
            zippedArchive: true,
            level: 'info'
        })   
    ]
})
