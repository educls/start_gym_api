import Database from '../data/database';

const db = new Database();

exports.postUser = async (accountType: String, photo: Int8Array[], name: String, numberWhats: String, email: String, password: String) => {

    await db.connect();

    const rows: any[] = await db.query('insert into usuarios (accounttype, photo, name, numberwhats, email, password) values (?, ?, ?, ?, ?, ?)', [accountType, photo, name, numberWhats, email, password]);

    await db.close();
    return rows;
}

exports.postNewTeacher = async (name: String, email: String, password: String, teachertype: String, numberwhats: String) => {

    await db.connect();

    const rows: any[] = await db.query('INSERT INTO usuarios (accounttype, name, numberwhats, email, password, teachertype) values (?, ?, ?, ?, ?, ?)', ['professor', name, numberwhats, email, password, teachertype]);

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

exports.selectUser = async (id: number) => {
    await db.connect();

    const rows = await db.query('SELECT id, accounttype, name, numberwhats, email, password from usuarios WHERE id = ?', [id]);

    await db.close();
    return rows;
}