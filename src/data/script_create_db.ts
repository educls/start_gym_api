const mysql = require('mysql2/promise');
const config = require('../../knexfile');

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: config.development.connection.host,
    user: config.development.connection.user,
    password: config.development.connection.password,
  });

  // ${config.development.connection.database}


  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.development.connection.database}`);
    console.log('Banco de dados criado com sucesso!');

    await connection.query(`USE ${config.development.connection.database}`);
    console.log('Banco de dados selecionado!');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS usuario (
        id_usuario INT NOT NULL AUTO_INCREMENT,
        telefone VARCHAR(45) NULL,
        tipo_usuario ENUM('professor', 'aluno', 'admin') NOT NULL,
        nome VARCHAR(45) NOT NULL,
        email VARCHAR(45) NOT NULL,
        password VARCHAR(45) NOT NULL,
        data_nascimento DATE NULL,
        foto MEDIUMBLOB NULL,
        bloqueado BOOLEAN DEFAULT FALSE,
        bloqueado_em DATETIME NULL,
        bloqueado_ate DATETIME NULL,
        login_tentativas INT DEFAULT 0,
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id_usuario)
      )
    `);

    console.log('Tabela de usuários criada com sucesso!');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS avaliacao_fisica (
        id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT,
        objetivos VARCHAR(255),
        peso VARCHAR(255),
        altura VARCHAR(255),
        nascimento DATE,
        data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
      );
    `);
    console.log('Tabela de avaliacao_fisica criada com sucesso!');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS historico_doencas (
        id_doenca INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT,
        doencas VARCHAR(255),
        dores VARCHAR(255),
        adicional VARCHAR(255),
        data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
      );  
    `);
    console.log('Tabela de historico_doencas criada com sucesso!');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS historico_atividades (
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
        FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
      );
    `);
    console.log('Tabela de historico_atividades criada com sucesso!');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS minha_evolucao (
        id_evolucao INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT,
        foto1 MEDIUMBLOB,
        foto2 MEDIUMBLOB,
        foto3 MEDIUMBLOB,
        data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
      );
    `);
    console.log('Tabela de minha_evolucao criada com sucesso!');

    await connection.query(`insert into usuario (tipo_usuario, nome, email, password) values ('aluno', 'aluno', 'testAluno@teste.br', '123')`);
    await connection.query(`insert into usuario (tipo_usuario, nome, email, password) values ('professor', 'professor', 'testeProfessor@teste.br', '456')`);
    await connection.query(`insert into usuario (tipo_usuario, nome, email, password) values ('admin', 'admin', 'testeAdmin@teste.br', '789')`);
    console.log('Usuário teste criado!')

    await connection.query(`
      CREATE TABLE IF NOT EXISTS treino (
        id_treino INT NOT NULL AUTO_INCREMENT,
        professor_id INT NOT NULL,
        nome_treino VARCHAR(45) NULL,
        obs_treino TEXT NULL,
        PRIMARY KEY (id_treino),
        FOREIGN KEY (professor_id) REFERENCES usuario(id_usuario)
        
      )
    `);
    console.log('Tabela treino criada com sucesso!')

    await connection.query(`
      CREATE TABLE IF NOT EXISTS categoria_musc (
        id_categoria_musc INT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(45) NULL,
        PRIMARY KEY (id_categoria_musc)
      )
    `);
    console.log('Tabela categoria_musc criada com sucesso!')

    await connection.query(`
      CREATE TABLE IF NOT EXISTS exercicio (
        id_exercicio INT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(45) NULL,
        n_serie INT NULL,
        n_repeticao INT NULL,
        descanso TIME NULL,
        video BLOB NULL,
        categoria_id INT NOT NULL,
        PRIMARY KEY (id_exercicio),
        FOREIGN KEY (categoria_id) REFERENCES categoria_musc(id_categoria_musc)
        ON DELETE NO ACTION ON UPDATE NO ACTION
      )
    `);
    console.log('Tabela exercicio criada com sucesso!')

    await connection.query(`
      CREATE TABLE IF NOT EXISTS aluno_professor (
        professor_id INT NOT NULL,
        aluno_id INT NOT NULL,
        data_cadastro DATE NULL,
        PRIMARY KEY (professor_id, aluno_id),
        FOREIGN KEY (professor_id) REFERENCES usuario(id_usuario)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
        FOREIGN KEY (aluno_id) REFERENCES usuario(id_usuario)
        ON DELETE NO ACTION ON UPDATE NO ACTION
      )
    `);
    console.log('Tabela aluno_professor criada com sucesso!')

    await connection.query(`
      CREATE TABLE IF NOT EXISTS treino_aluno (
        treino_id INT NOT NULL,
        aluno_id INT NOT NULL,
        PRIMARY KEY (treino_id, aluno_id),
        FOREIGN KEY (treino_id) REFERENCES treino(id_treino)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
        FOREIGN KEY (aluno_id) REFERENCES usuario(id_usuario)
        ON DELETE NO ACTION ON UPDATE NO ACTION
      )
    `);
    console.log('Tabela treino_aluno criada com sucesso!')

    await connection.query(`
      CREATE TABLE IF NOT EXISTS treino_exercicio (
        treino_id INT NOT NULL,
        exercicio_id INT NOT NULL,
        PRIMARY KEY (treino_id, exercicio_id),
        FOREIGN KEY (treino_id) REFERENCES treino(id_treino)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
        FOREIGN KEY (exercicio_id) REFERENCES exercicio(id_exercicio)
        ON DELETE NO ACTION ON UPDATE NO ACTION
      )
    `);
    console.log('Tabela treino_exercicio criada com sucesso!')

  } catch (error) {
    console.error(error);
  } finally {
    await connection.end();
  }
};

createDatabase();