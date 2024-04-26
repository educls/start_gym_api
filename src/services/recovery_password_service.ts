import Database from '../data/database';
const sendMail = require('../utils/mail/send_mail');


const db = new Database();


class PasswordRecovery{
    private db: Database;
    constructor() {
        this.db = new Database();
    }

    public async sendEmailForResetPassword(email: String, name: String): Promise<any>{
        const result = await sendMail(email, name);

        return result;
    }
}

export default PasswordRecovery;