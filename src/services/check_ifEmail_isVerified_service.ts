import Database from '../data/database';

const db = new Database();


class CheckIfEmailIsVerified{
    private db: Database;
    constructor() {
        this.db = new Database();
    }

    public async check(email: String): Promise<any>{
        await db.connect();

        const rows = await db.query('SELECT * FROM emailverificationrequests where email = ?', [email]);

        await db.close();
        return rows;
    }
}

export default CheckIfEmailIsVerified;