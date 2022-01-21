CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

/*Criando tabelas do banco de dados*/

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

/*Criando os usuarios para complementar os dados*/

INSERT INTO application_user (username, password) VALUES ('Ricardo', crypt('admin', 'my_salt'));

INSERT INTO application_user (username, password) VALUES ('João', crypt('joao', 'my_salt'));

