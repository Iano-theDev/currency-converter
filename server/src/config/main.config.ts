import dotenv from 'dotenv'
import { IMainConfig } from '../models/main-config.model';

dotenv.config()

const getEnvVar = (name: string): string => { // update to zod later
    const value = process.env[name]

    if (!value) {
        throw new Error(`Missing required environment variable ${name}`)
    }
    return value
}

export const config: IMainConfig = {
    port: getEnvVar("APP_PORT"), 
    pg_user: getEnvVar("PG_USER"),
    pg_pass: getEnvVar("PG_PASS"),
    pg_host: getEnvVar("PG_HOST"),
    pg_db: getEnvVar("PG_DB"),
    pg_port: parseInt(getEnvVar("PG_PORT")),
    exrate_api_key: getEnvVar("EXRATE_API_KEY"),
    exrate_api_url: getEnvVar("EXRATE_API_URL"),
    app_url: getEnvVar("APP_URL")
}

