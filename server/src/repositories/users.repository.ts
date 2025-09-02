import { pool } from '../config/db.config'
import { loadSql } from '../utils/sql.utils'


export class UserRepository {
    async create(username: string) {
        const sql = loadSql('users/create-user.sql');
        const result = await pool.query(sql, [username]);
        return result.rows[0]
    }

    async getById(id: number) {
        const sql = loadSql('users/get-user-by-id.sql');
        const result = await pool.query(sql, [id]);
        return result.rows[0]
    }

    async getByName(username: number) {
        const sql = loadSql('users/get-user-by-name.sql');
        const result = await pool.query(sql, [username]);
        return result.rows[0]
    }
}