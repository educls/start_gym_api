import Database from '../data/database';

const db = new Database();


class ConfirmEmail{
    private db: Database;
    constructor() {
        this.db = new Database();
    }

    public async confirmEmail(token: String): Promise<any>{
        await db.connect();

        const rows: any[] = await db.query('UPDATE emailverificationrequests SET email_verified = ? where token = ?', [true, token]);

        await db.close();
        return rows;
    }
}

export default ConfirmEmail;