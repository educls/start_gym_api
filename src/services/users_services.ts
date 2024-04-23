import Database from '../data/database';

const db = new Database();

exports.postUser = async (name: String, email: String, password: String) => {

    await db.connect();

    const rows: any[] = await db.query('insert into usuarios (name, email, password) values (?, ?, ?)', [name, email, password]);

    await db.close();
    return rows;
}

exports.resetPasswordUser = async (email: String, newPassword: String) => {

    await db.connect();

    const rows: any[] = await db.query('UPDATE usuarios set password = ? where email = ?', [newPassword, email]);

    await db.close();
    return rows;
}