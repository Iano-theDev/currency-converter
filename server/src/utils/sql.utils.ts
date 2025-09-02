import fs from 'fs';
import path from 'path'
import { AppError } from '../models/error.model';

const sqlCache = new Map<string, string>();

export  function loadSql(filename: string): string {
    if (sqlCache.has(filename)) {
        return sqlCache.get(filename)!
    }

    try {
        const sqlPath = path.join(__dirname, '../sql', filename)
        const sql = fs.readFileSync(sqlPath, 'utf-8')
        const trimmedSql = sql.trim()
        sqlCache.set(filename, trimmedSql)
        return trimmedSql
    } catch (error) {
        throw new Error(`Failed to load SQL file '${filename}': ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}