import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import Database from '../../data/database';
import { IEditUserAffectedRows } from "../../useCases/EditUser/EditUSerDTO";

export class MysqlUsersRepository implements IUsersRepository {
  private db: Database;
  constructor() {
    this.db = new Database()
  }

  async findByEmail(email: string): Promise<User> {
    await this.db.connect();

    const [rows]: any = await this.db.query('select * from usuarios where email = ?', [email]);

    await this.db.close();
    return rows;
  }

  async save(user: User): Promise<void> {
    await this.db.connect();

    await this.db.query('insert into usuarios (id, accounttype, name, email, password) values (?, ?, ?, ?, ?)', [user.id, user.accounttype, user.name, user.email, user.password]);

    await this.db.close();
  }

  async findById(id: string): Promise<User> {
    await this.db.connect();
    console.log(id+'1')
    const [rows]: any = await this.db.query('select * from usuarios where id = ?', [id]);

    await this.db.close();
    return rows;
  }

  async editById(id: string, column: string, value: string): Promise<number> {
    await this.db.connect();

    const rows: IEditUserAffectedRows = await this.db.query(`update usuarios set ${column} = ? where id = ?`, [value, id]);

    await this.db.close();
    return rows.affectedRows;
  }
}