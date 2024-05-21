import Database from '../data/database';

const db = new Database();

exports.postUser = async (accountType: String, photo: Int8Array[], name: String, numberWhats: String, email: String, password: String) => {

    await db.connect();

    const rows: any[] = await db.query('insert into usuarios (accounttype, photo, name, numberwhats, email, password) values (?, ?, ?, ?, ?, ?)', [accountType, photo, name, numberWhats, email, password]);

    await db.close();
    return rows;
}

exports.postNewTeacher = async (name: String, email: String, password: String, teachertype: String) => {

    await db.connect();

    const rows: any[] = await db.query('INSERT INTO usuarios (accounttype, name, email, password, teachertype) values (?, ?, ?, ?, ?, ?)', ['professor', name, email, password, teachertype]);

    await db.close();
    return rows;
}

exports.postNewAluno = async (name: String, email: String, password: String) => {

    await db.connect();

    const rows: any[] = await db.query('INSERT INTO usuarios (accounttype, name, email, password) values (?, ?, ?, ?)', ['aluno', name, email, password]);

    await db.close();
    return rows;
}

exports.updateUserPhoto = async (userId: number, photo: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuarios set photo = ? where id = ?', [photo, userId]);

    await db.close();
    return rows;
}

exports.updateUserName = async (userId: number, name: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuarios set name = ? where id = ?', [name, userId]);

    await db.close();
    return rows;
}

exports.updateUserNumberWhats = async (userId: number, numberWhats: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuarios set numberwhats = ? where id = ?', [numberWhats, userId]);

    await db.close();
    return rows;
}

exports.updateUserEmail = async (userId: number, email: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuarios set email = ? where id = ?', [email, userId]);

    await db.close();
    return rows;
}

exports.updateUserPassword = async (userId: number, password: string) => {
    await db.connect();

    const rows: any[] = await db.query('update usuarios set password = ? where id = ?', [password, userId]);

    await db.close();
    return rows;
}


exports.resetPasswordUser = async (email: String, newPassword: String) => {

    await db.connect();

    const rows: any[] = await db.query('UPDATE usuarios set password = ? where email = ?', [newPassword, email]);

    await db.close();
    return rows;
}

exports.getImgUser = async (id: Int16Array) => {

    await db.connect();

    const rows = await db.query('SELECT photo FROM usuarios WHERE id = ?', [id]);

    await db.close();
    return rows[0].photo;
}

exports.selectProfessores = async () => {
    await db.connect();

    const rows = await db.query('SELECT id, name, numberwhats, photo from usuarios WHERE accounttype = ?', ['professor']);

    await db.close();
    return rows;
}

exports.selectAlunos = async () => {
    await db.connect();

    const rows = await db.query('SELECT id, name, numberwhats, email, photo from usuarios WHERE accounttype = ?', ['aluno']);

    await db.close();
    return rows;
}

exports.selectUser = async (id: number) => {
    await db.connect();

    const rows = await db.query('SELECT id, accounttype, name, numberwhats, email, password from usuarios WHERE id = ?', [id]);

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