import { Pool } from 'pg';

const connectionString = "Coloque sua String de conexão aqui";

const db = new Pool({ connectionString });

export default db;