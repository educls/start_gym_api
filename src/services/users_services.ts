import Database from '../data/database';

const db = new Database();

exports.postUser = async (accountType: String, photo: Int8Array[], name: String, numberWhats: String, email: String, password: String) => {

    await db.connect();

    const rows: any[] = await db.query('insert into usuarios (accounttype, photo, name, numberwhats, email, password) values (?, ?, ?, ?, ?, ?)', [accountType, photo, name, numberWhats, email, password]);

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