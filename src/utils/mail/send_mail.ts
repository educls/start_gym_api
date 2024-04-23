const nodemailer = require('nodemailer');
const generate_code = require('../generate/generate_code')

function sendMailVerify(email: String) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'saudeconectasuporte@gmail.com',
            pass: 'lzun aynt uvlg anxt',
        },
    });
    const codVerify =  generate_code()

    const mailOptions = {
        from: 'saudeconectasuporte@gmail.com',
        to: email,
        subject: 'Reset Password',
        text: `reset de senha \n \n \n http://192.168.86.11:3000/reset-password?email=${email}`,
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