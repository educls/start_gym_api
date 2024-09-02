import { v4 as uuid } from 'uuid';

export class User {
  public readonly id_usuario?: string;

  public tipo_usuario: string;
  public foto?: string;
  public nome: string;
  public telefone?: string;
  public email: string;
  public password: string;
  public bloqueado?: boolean | number;
  public bloqueado_em?: Date;
  public bloqueado_ate?: Date;
  public login_tentativas?: number;
  public criado_em?: Date;
  public atualizado_em?: Date;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);

    if (this.bloqueado == 1) {
      this.bloqueado = true;
    }else{
      this.bloqueado =  false;
    }

    // if (!tipo_usuario) {
    //   this.tipo_usuario = uuid();
    // }
  }
}