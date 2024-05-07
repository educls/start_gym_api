const nodemailer = require('nodemailer');
const generate_code = require('../generate/generate_code')
import { BASE_URL } from '../constants/constants';

function sendMailVerify(email: String, name: String) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'startgymsuporte@gmail.com',
            pass: 'lqhz sixu xoyy jjxl',
        },
    });
    const codVerify =  generate_code()

    const mailOptions = {
        from: 'startgymsuporte@gmail.com',
        to: email,
        subject: 'Redefinição de Senha StartGym',
        html: `
            <p><img src="cid:logo_for_email" width=500></p>
            <br>
            <p>Olá ${name},</p>
            <p>Foi feita uma solicitação para redefinição de senha em sua conta <br>Por favor, clique no link abaixo para redefinir sua senha:</p>
            <br>
            <h2><a href="${BASE_URL}/reset-password?email=${email}">Redefinir Senha</a></h2>
            <p>Se você não solicitou essa redefinição de senha, ignore este e-mail.</p>
            <br>
            <p>Atenciosamente.</p>
            <p>Equipe de suporte</p>
            <p>Start Gym</p>
        `,
        attachments: [
            {
                filename: 'img_logo_email.jpg',
                path: 'src/assets/img_logo_email.jpg',
                cid: 'logo_for_email'
            }
        ]
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error: Error, info: any) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('E-mail de redefinição de senha enviado: ' + info.response);
                resolve(codVerify);
            }
        });
    });
}

module.exports = sendMailVerify;