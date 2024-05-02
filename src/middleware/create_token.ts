const jwt = require('jsonwebtoken');



function createToken(id: Int16Array, accounttype: String, name: String, email: String, password: String) {

    const SECRET_KEY: String = 'hsfuihs78fh3whf237hfwh783y982u9hfsju';
    const LoginModel = {id: id, accounttype: accounttype, name: name, email: email, password: password}
  
    const token: String = jwt.sign(LoginModel, SECRET_KEY, {expiresIn: '12h'})

    return token;
}

module.exports = createToken;