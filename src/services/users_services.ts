import Database from '../data/database';

const db = new Database();

exports.postUser = async (accountType: String, photo: Int8Array[], name: String, numberWhats: String, email: String, password: String) => {

    await db.connect();

    const rows: any[] = await db.query('insert into usuario (tipo_usuario, foto, nome, telefone, email, password) values (?, ?, ?, ?, ?, ?)', [accountType, photo, name, numberWhats, email, password]);

    await db.close();
    return rows;
}

exports.postNewTeacher = async (name: String, email: String, password: String, teachertype: String) => {

    await db.connect();

    const rows: any[] = await db.query('INSERT INTO usuario (tipo_usuario, nome, email, password) values (?, ?, ?, ?)', ['professor', name, email, password]);

    await db.close();
    return rows;
}

exports.postNewAluno = async (name: String, email: String, password: String) => {

    await db.connect();

    const rows: any[] = await db.query('INSERT INTO usuario (tipo_usuario, nome, email, password) values (?, ?, ?, ?)', ['aluno', name, email, password]);

    await db.close();
    return rows;
}

exports.updateUserPhoto = async (userId: number, photo: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuario set foto = ? where id_usuario = ?', [photo, userId]);

    await db.close();
    return rows;
}

exports.updateUserName = async (userId: number, name: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuario set nome = ? where id_usuario = ?', [name, userId]);

    await db.close();
    return rows;
}

exports.updateUserNumberWhats = async (userId: number, numberWhats: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuario set telefone = ? where id_usuario = ?', [numberWhats, userId]);

    await db.close();
    return rows;
}

exports.updateUserEmail = async (userId: number, email: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuario set email = ? where id_usuario = ?', [email, userId]);

    await db.close();
    return rows;
}

exports.updateUserPassword = async (userId: number, password: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuario set password = ? where id_usuario = ?', [password, userId]);

    await db.close();
    return rows;
}


exports.resetPasswordUser = async (email: String, newPassword: String) => {

    await db.connect();

    const rows: any[] = await db.query('UPDATE usuario set password = ? where email = ?', [newPassword, email]);

    await db.close();
    return rows;
}

exports.getImgUser = async (id: Int16Array) => {

    await db.connect();

    const rows = await db.query('SELECT foto FROM usuario WHERE id_usuario = ?', [id]);

    await db.close();
    return rows[0].photo;
}

exports.selectProfessores = async () => {
    await db.connect();

    const rows = await db.query('SELECT id_usuario, nome, telefone, foto from usuario WHERE tipo_usuario = ?', ['professor']);

    await db.close();
    return rows;
}

exports.selectAlunos = async () => {
    await db.connect();

    const rows = await db.query('SELECT id_usuario, nome, telefone, email, foto from usuario WHERE tipo_usuario = ?', ['aluno']);

    await db.close();
    return rows;
}

exports.selectUser = async (id: number) => {
    await db.connect();

    const rows = await db.query('SELECT id_usuario, tipo_usuario, nome, telefone, email, password from usuario WHERE id_usuario = ?', [id]);

    await db.close();
    return rows;
}

exports.insertQuestionaryAvaliacaoFisica = async (id_user: number, Objetivos: String, Peso: String, Altura: String, Nascimento: String) => {
    await db.connect();

    const rows = await db.query(
        'INSERT INTO avaliacao_fisica (id_usuario, objetivos, peso, altura, nascimento) VALUES (?, ?, ?, ?, STR_TO_DATE(?, "%d/%m/%Y"))',
        [id_user, Objetivos, Peso, Altura, Nascimento]
    );

    await db.close();
    return rows;
}

exports.insertQuestionaryHistoricoDoencas = async (id_user: number, Doencas: String, Dores: String, Adicional: String) => {
    await db.connect();

    const rows = await db.query('INSERT INTO historico_doencas (id_usuario, doencas, dores, adicional) VALUES (?, ?, ?, ?)', [id_user, Doencas, Dores, Adicional]);

    await db.close();
    return rows;
}

exports.insertQuestionaryHistoricoAtividades = async (id_user: number, AtividadeFisica: String, Dieta: String, Suplementos: String, Fuma: String, BebidaAlcoolica: String, MedicamentoControlado: String, Cirurgia: String) => {
    await db.connect();

    const rows = await db.query(
        'INSERT INTO historico_atividades (id_usuario, atividade_fisica, dieta, suplementos, fuma, bebida_alcoolica, medicamento_controlado, cirurgia) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [id_user, AtividadeFisica, Dieta, Suplementos, Fuma, BebidaAlcoolica, MedicamentoControlado, Cirurgia]
    );

    await db.close();
    return rows;
}

exports.insertQuestionaryMinhaEvolucao = async (id_user: number, Foto1: String, Foto2: String, Foto3: String) => {
    await db.connect();

    const rows = await db.query(
        'INSERT INTO minha_evolucao (id_usuario, foto1, foto2, foto3) VALUES (?, ?, ?, ?)', 
        [id_user, Foto1, Foto2, Foto3]
    );

    await db.close();
    return rows;
}

exports.selectQuestionary = async (id_user: number, type: String) => {
    await db.connect();

    const rows = await db.query(
        `SELECT * FROM ${type} WHERE id_usuario = ?`, 
        [id_user]
    );

    await db.close();
    return rows;
}