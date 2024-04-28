import Database from '../data/database';

const db = new Database();

class VerifyEmail{
    private db: Database;
    constructor() {
        this.db = new Database();
    }

    public async setTokenAndEmailOnDBForVerifyEmail(token: String, email: String): Promise<any>{
        await db.connect();

        const rows: any[] = await db.query('INSERT INTO emailverificationrequests (token, email) values (?, ?)', [token, email]);

        await db.close();
        return rows;
    }
}

export default VerifyEmail;