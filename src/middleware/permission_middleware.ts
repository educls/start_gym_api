import { Request, Response, NextFunction } from 'express';
import { permissionConfig } from '../config/permissions_config';
import { Permissions } from '../types/permissions';

interface User {
  accounttype: 'aluno' | 'professor' | 'admin';
}

interface CustomRequest extends Request {
  user?: User;
}

const checkPermission = (requiredPermission: Permissions) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    const userPermissions = permissionConfig[user.accounttype];

    if (userPermissions.includes(requiredPermission)) {
      return next();
    } else {
      return res.status(403).json({ message: 'Permissão negada' });
    }
  };
};

export { checkPermission };
