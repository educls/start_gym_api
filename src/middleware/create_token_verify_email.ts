const jwtMiddle = require('jsonwebtoken');



function createTokenForVerifyEmail(email: String) {

    const SECRET_KEY: String = 'hsfuihs78fh3whf237hfwh783y982u9hfsju';
    const VerifyEmailModel = {email: email}
  
    const token: String = jwtMiddle.sign(VerifyEmailModel, SECRET_KEY, {expiresIn: '12h'})

    return token;
}

module.exports = createTokenForVerifyEmail;