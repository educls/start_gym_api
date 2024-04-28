const nodemailerr = require('nodemailer');
const generate_codee = require('../generate/generate_code')

function sendForVerifyEmail(token: String, email: String) {
    const transporter = nodemailerr.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'startgymsuporte@gmail.com',
            pass: 'lqhz sixu xoyy jjxl',
        },
    });
    const codVerify =  generate_codee()

    const mailOptions = {
        from: 'startgymsuporte@gmail.com',
        to: email,
        subject: 'Confirmação de Email StartGym',
        html: `
            <p><img src="cid:logo_for_email" width=500></p>
            <br>
            <p>Olá ${email},</p>
            <p>Foi feita uma solicitação para a criação de uma conta <br>Por favor, clique no link abaixo para confirmar seu email:</p>
            <br>
            <h2><a href="http://192.168.86.11:3000/confirmar-email/${token}">Confirmar Email</a></h2>
            <p>Se você não solicitou essa criação de conta, ignore este e-mail.</p>
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
                console.log('E-mail de confirmação enviado com sucesso: ' + info.response);
                resolve(codVerify);
            }
        });
    });
}

module.exports = sendForVerifyEmail;