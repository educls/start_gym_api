import { Permissions } from '../types/permissions';
import { PermissionList } from '../types/permission_list';

export const permissionConfig: PermissionList = {
  aluno: [
    Permissions.VIEW_USER,
    Permissions.UPDATE_USER,
  ],
  professor: [
    Permissions.CREATE_USER,
    Permissions.VIEW_USER,
    Permissions.UPDATE_USER,
  ],
  admin: [
    Permissions.CREATE_USER,
    Permissions.VIEW_USER,
    Permissions.UPDATE_USER,
    Permissions.DELETE_USER,
  ],
};
