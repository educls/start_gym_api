const mysql = require('mysql2/promise');
const config = require('../../knexfile');

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: config.development.connection.host,
    user: config.development.connection.user,
    password: config.development.connection.password,
  });

  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.development.connection.database}`);
    console.log('Banco de dados criado com sucesso!');

    await connection.query(`USE ${config.development.connection.database}`);
    console.log('Banco de dados selecionado!');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        blocked BOOLEAN DEFAULT false,
        blocked_at DATETIME,
        blocked_until DATETIME,
        login_attempts INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('Tabela de usuários criada com sucesso!');

    await connection.query(`insert into usuarios (name, email, password) values ('teste', 'teste@teste.br', '000')`);
    console.log('Usuário teste criado!')

  } catch (error) {
    console.error('Erro ao criar o banco de dados e a tabela de usuários:', error);
  } finally {
    await connection.end();
  }
};

createDatabase();