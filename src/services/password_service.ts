import Database from '../data/database';
const sendMail = require('../utils/mail/send_mail');


const db = new Database();


class Password{
    private db: Database;
    constructor() {
        this.db = new Database();
    }

    public async sendEmailForResetPassword(email: String, service: String): Promise<any>{
        const result = await sendMail(email);

        return result;
    }
}

export default Password;