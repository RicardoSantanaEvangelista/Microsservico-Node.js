import { Pool } from 'pg';

const connectionString = "Coloque aqui a sua credencial String para conectar ao BD(Cando de dados), nesse caso oi usado o ElephantSQL";

const db = new Pool({ connectionString });

export default db;