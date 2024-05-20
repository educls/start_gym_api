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
        accounttype VARCHAR(255) NOT NULL,
        teachertype VARCHAR(255),
        photo blob,
        name VARCHAR(255) NOT NULL,
        numberwhats VARCHAR(255) NOT NULL UNIQUE,
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

    await connection.query(`
      CREATE TABLE avaliacao_fisica (
        id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT,
        objetivos VARCHAR(255),
        peso VARCHAR(255),
        altura VARCHAR(255),
        nascimento DATE,
        data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
      );
    `);
    console.log('Tabela de avaliacao_fisica criada com sucesso!');

    await connection.query(`
      CREATE TABLE historico_doencas (
        id_doenca INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT,
        doencas VARCHAR(255),
        dores VARCHAR(255),
        adicional VARCHAR(255),
        data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
      );  
    `);
    console.log('Tabela de historico_doencas criada com sucesso!');

    await connection.query(`
      CREATE TABLE historico_atividades (
        id_atividade INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT,
        atividade_fisica VARCHAR(255),
        dieta VARCHAR(255),
        suplementos VARCHAR(255),
        fuma VARCHAR(255),
        bebida_alcoolica VARCHAR(255),
        medicamento_controlado VARCHAR(255),
        cirurgia VARCHAR(255),
        data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
      );
    `);
    console.log('Tabela de historico_atividades criada com sucesso!');

    await connection.query(`
      CREATE TABLE minha_evolucao (
        id_evolucao INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT,
        foto1 MEDIUMBLOB,
        foto2 MEDIUMBLOB,
        foto3 MEDIUMBLOB,
        data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
      );
    `);
    console.log('Tabela de minha_evolucao criada com sucesso!');

    await connection.query(`insert into usuarios (accounttype, name, numberwhats, email, password) values ('aluno', 'teste', '123456789', 'teste@teste.br', '000')`);
    console.log('Usuário teste criado!')

    await connection.query(`
      CREATE TABLE IF NOT EXISTS emailverificationrequests (
        token VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        email_verified BOOLEAN DEFAULT FALSE
      )
    `);
    console.log('Tabela para verificação de email criada com sucesso!')

  } catch (error) {
    console.error('Erro ao criar o banco de dados e a tabela de usuários:', error);
  } finally {
    await connection.end();
  }
};

createDatabase();