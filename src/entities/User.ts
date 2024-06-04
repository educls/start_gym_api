import { uuid } from 'uuidv4';

export class User {
  public readonly id?: string;

  public accounttype: string;
  public teachertype?: string;
  public photo?: string;
  public name: string;
  public numberwhats?: string;
  public email: string;
  public password: string;
  public blocked?: boolean;
  public blocked_at?: Date;
  public blocked_until?: Date;
  public login_attempts?: number;
  public created_at?: Date;
  public updated_at?: Date;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
