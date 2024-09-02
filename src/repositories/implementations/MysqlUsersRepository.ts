import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import Database from '../../data/database';
import { IEditUserAffectedRows } from "../../useCases/User/EditUser/EditUSerDTO";

export class MysqlUsersRepository implements IUsersRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
  }

  async findByEmail(email: string): Promise<User> {
    await this.db.connect();

    const [rows]: any = await this.db.query('select * from usuario where email = ?', [email]);

    await this.db.close();
    return rows;
  }

  async save(user: User): Promise<void> {
    await this.db.connect();

    await this.db.query('insert into usuario (id_usuario, tipo_usuario, nome, email, password) values (?, ?, ?, ?, ?)', [user.tipo_usuario, user.tipo_usuario, user.nome, user.email, user.password]);

    await this.db.close();
  }

  async findById(id: string): Promise<User> {
    await this.db.connect();
    console.log(id+'1')
    const [rows]: any = await this.db.query('select * from usuario where id_usuario = ?', [id]);

    await this.db.close();
    return rows;
  }

  async editById(id: string, column: string, value: string): Promise<number> {
    await this.db.connect();
    
    const rows: IEditUserAffectedRows = await this.db.query(`update usuario set ${column} = ? where id_usuario = ?`, [value, id]);

    await this.db.close();
    return rows.affectedRows;
  }
}