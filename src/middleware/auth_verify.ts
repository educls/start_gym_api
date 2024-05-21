const jwt = require('jsonwebtoken');
import { Request, Response } from "express";

const SECRET_KEY: String = 'hsfuihs78fh3whf237hfwh783y982u9hfsju';

function verificaToken(req: any, res: Response, next: any) {
    let token = req.header('Authorization');
    if (token == undefined) {
      token = req.params.token;
    }
  
    if (!token) {
      return res.status(401).json(
        {message: 'Token não fornecido'}
      );
    }
  
    jwt.verify(token, SECRET_KEY, (err: Error, decoded: any) => {
      if (err) {
        return res.status(403).json(
          {message: 'Token invalido'});
      }
      req.user = decoded;
      next();
    });
}

module.exports = verificaToken;