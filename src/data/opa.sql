CREATE SCHEMA IF NOT EXISTS `startgymdb2.0` DEFAULT CHARACTER SET utf8;
USE `startgymdb2.0`;

-- -----------------------------------------------------
-- Table `usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `telefone` VARCHAR(45) NULL,
  `tipo_usuario` ENUM('professor', 'aluno', 'admin') NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NULL,
  `foto` MEDIUMBLOB NULL,
  `bloqueado` BOOLEAN DEFAULT FALSE,
  `bloqueado_em` DATETIME NULL,
  `bloqueado_ate` DATETIME NULL,
  `login_tentativas` INT DEFAULT 0,
  `criado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `treino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `treino` (
  `id_treino` INT NOT NULL AUTO_INCREMENT,
  `professor_id` INT NOT NULL,
  `nome_treino` VARCHAR(45) NULL,
  `obs_treino` TEXT NULL,
  PRIMARY KEY (`id_treino`),
  FOREIGN KEY (`professor_id`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `categoria_musc`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `categoria_musc` (
  `id_categoria_musc` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categoria_musc`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `exercicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `exercicio` (
  `id_exercicio` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `n_serie` INT NULL,
  `n_repeticao` INT NULL,
  `descanso` TIME NULL,
  `video` BLOB NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`id_exercicio`),
  FOREIGN KEY (`categoria_id`) REFERENCES `categoria_musc`(`id_categoria_musc`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `aluno_professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aluno_professor` (
  `professor_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  `data_cadastro` DATE NULL,
  PRIMARY KEY (`professor_id`, `aluno_id`),
  FOREIGN KEY (`professor_id`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`aluno_id`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `info_fisica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `info_fisica` (
  `id_info_fisica` INT NOT NULL AUTO_INCREMENT,
  `altura` FLOAT NULL,
  `peso` FLOAT NULL,
  `idade` INT NULL,
  `aluno_id` INT NOT NULL,
  PRIMARY KEY (`id_info_fisica`),
  FOREIGN KEY (`aluno_id`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `historico_saude`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `historico_saude` (
  `id_historico_saude` INT NOT NULL AUTO_INCREMENT,
  `doencas` TEXT NULL,
  `dores` TEXT NULL,
  `adicional` TEXT NULL,
  `data_insercao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `aluno_id` INT NOT NULL,
  PRIMARY KEY (`id_historico_saude`),
  FOREIGN KEY (`aluno_id`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `habitos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `habitos` (
  `id_habitos` INT NOT NULL AUTO_INCREMENT,
  `atividade_fisica` TEXT NULL,
  `dieta` TEXT NULL,
  `suplementos` TEXT NULL,
  `fuma` BOOLEAN NULL,
  `bebida_alcoolica` BOOLEAN NULL,
  `medicamento_controlado` BOOLEAN NULL,
  `cirurgia` BOOLEAN NULL,
  `data_insercao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `aluno_id` INT NOT NULL,
  PRIMARY KEY (`id_habitos`),
  FOREIGN KEY (`aluno_id`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `treino_aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `treino_aluno` (
  `treino_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  PRIMARY KEY (`treino_id`, `aluno_id`),
  FOREIGN KEY (`treino_id`) REFERENCES `treino`(`id_treino`)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`aluno_id`) REFERENCES `usuario`(`id_usuario`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `treino_exercicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `treino_exercicio` (
  `treino_id` INT NOT NULL,
  `exercicio_id` INT NOT NULL,
  PRIMARY KEY (`treino_id`, `exercicio_id`),
  FOREIGN KEY (`treino_id`) REFERENCES `treino`(`id_treino`)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`exercicio_id`) REFERENCES `exercicio`(`id_exercicio`)
    ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;
