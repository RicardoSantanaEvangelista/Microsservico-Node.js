import { Pool } from 'pg';

const connectionString = "postgres://oguatyqy:KsQm3yE-Amp9tHdWv3foGtptXZVV3wXs@kesavan.db.elephantsql.com/oguatyqy";

const db = new Pool({ connectionString });

export default db;