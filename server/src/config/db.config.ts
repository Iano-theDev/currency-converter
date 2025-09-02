import { Pool } from 'pg'
import {config} from './main.config'

export const pool = new Pool({
    user: config.pg_user,
    port: config.pg_port,
    password: config.pg_pass,
    database: config.pg_db,
    host: config.pg_host
})
