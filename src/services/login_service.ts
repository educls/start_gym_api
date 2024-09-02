import Database from '../data/database';

const db = new Database();


class LoginUser{
    private db: Database;
    constructor() {
        this.db = new Database();
    }

    public async returnIfEmailExists(email: String): Promise<any>{
        await db.connect();

        const [rows]: any[] = await db.query('select email from usuario where email = ? AND bloqueado = false', [email]);

        await db.close();
        return rows;
    }

    public async returnUserBasedEmailPassword(email: String, password: String): Promise<any>{
        await db.connect();

        const [rows]: any[] = await db.query('select * from usuario where email = ? and password = ? AND bloqueado = false', [email, password]);

        await db.close();
        return rows;
    }

    public async returnUserBasedEmail(email: String): Promise<any>{
        await db.connect();

        const [rows]: any[] = await db.query('select * from usuario where email = ? AND bloqueado = false', [email]);

        await db.close();
        return rows;
    }

    public async resetAttemptsBasedEmail(email: String){
        await db.connect();

        await db.query('UPDATE usuario SET login_tentativas = 0 WHERE email = ?', [email]);

        await db.close();
    }

    public async verifyIfUserBlocked(email: String): Promise<any>{
        await db.connect();

        const [rows]: any[] = await db.query('SELECT * FROM usuario WHERE email = ? AND bloqueado = true', [email]);

        await db.close();
        return rows;
    }

    public async incrementLoginAttemptBasedEmail(email: String){
        await db.connect();

        await db.query('UPDATE usuario SET login_tentativas = login_tentativas + 1 WHERE email = ?', [email]);

        await db.close();
    }

    public async returnUserAttempts(email: String): Promise<any>{
        await db.connect();

        const [attempt]: any[] = await db.query('SELECT login_tentativas FROM usuario WHERE email = ?', [email]);

        await db.close();
        return attempt;
    }

    public async blockAccountCertainPeriod(blocked_at: any, blockUntil: any, email: String){
        await db.connect();

        await db.query('UPDATE usuario SET bloqueado = true, bloqueado_em = ?, bloqueado_ate = ? WHERE email = ?', [blocked_at, blockUntil, email]);
        
        await db.close();
    }

    public async returnIfTimeBlockedPass(currentTime: any, email: string): Promise<any>{
        await db.connect();

        const [user] = await db.query('SELECT * FROM usuario WHERE email = ? AND bloqueado = true AND bloqueado_ate <= ?', [email, currentTime]);

        await db.close();

        if(user){
            return 'unlock'
        }else{
            return 'block';
        }
    }

    public async unblockUser(email: String){
        await db.connect();

        await db.query('UPDATE usuario SET bloqueado = false, bloqueado_em = NULL, bloqueado_ate = NULL, login_tentativas = 0 WHERE email = ?', [email]);

        await db.close();
    }

}

export default LoginUser;