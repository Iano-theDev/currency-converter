
import { pool } from '../config/db.config'
import { loadSql } from '../utils/sql.utils'


export class ConversionRepository {
    async create(username: string) {
        const sql = loadSql('conversions/create-conversion.sql');
        const result = await pool.query(sql, [, ]);
        return result.rows[0]
    }
}