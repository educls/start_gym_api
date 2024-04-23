import Database from '../data/database';

const db = new Database();


class LoginUser{
    private db: Database;
    constructor() {
        this.db = new Database();
    }

    public async returnIfEmailExists(email: String): Promise<any>{
        await db.connect();

        const [rows]: any[] = await db.query('select email from usuarios where email = ? AND blocked = false', [email]);

        await db.close();
        return rows;
    }

    public async returnUserBasedEmailPassword(email: String, password: String): Promise<any>{
        await db.connect();

        const [rows]: any[] = await db.query('select * from usuarios where email = ? and password = ? AND blocked = false', [email, password]);

        await db.close();
        return rows;
    }

    public async resetAttemptsBasedEmail(email: String){
        await db.connect();

        await db.query('UPDATE usuarios SET login_attempts = 0 WHERE email = ?', [email]);

        await db.close();
    }

    public async verifyIfUserBlocked(email: String): Promise<any>{
        await db.connect();

        const [rows]: any[] = await db.query('SELECT * FROM usuarios WHERE email = ? AND blocked = true', [email]);

        await db.close();
        return rows;
    }

    public async incrementLoginAttemptBasedEmail(email: String){
        await db.connect();

        await db.query('UPDATE usuarios SET login_attempts = login_attempts + 1 WHERE email = ?', [email]);

        await db.close();
    }

    public async returnUserAttempts(email: String): Promise<any>{
        await db.connect();

        const [attempt]: any[] = await db.query('SELECT login_attempts FROM usuarios WHERE email = ?', [email]);

        await db.close();
        return attempt;
    }

    public async blockAccountCertainPeriod(blocked_at: any, blockUntil: any, email: String){
        await db.connect();

        await db.query('UPDATE usuarios SET blocked = true, blocked_at = ?, blocked_until = ? WHERE email = ?', [blocked_at, blockUntil, email]);
        
        await db.close();
    }

    public async returnIfTimeBlockedPass(currentTime: any, email: string): Promise<any>{
        await db.connect();

        const [user] = await db.query('SELECT * FROM usuarios WHERE email = ? AND blocked = true AND blocked_until <= ?', [email, currentTime]);

        await db.close();

        if(user){
            return 'unlock'
        }else{
            return 'block';
        }
    }

    public async unblockUser(email: String){
        await db.connect();

        await db.query('UPDATE usuarios SET blocked = false, blocked_at = NULL, blocked_until = NULL, login_attempts = 0 WHERE email = ?', [email]);

        await db.close();
    }

}

export default LoginUser;