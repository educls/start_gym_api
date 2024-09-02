import Database from '../../data/database';
import { CategoriaMuscular } from '../../entities/Training';
import { ICategoriaMuscularRepository } from '../ICategoriaMuscularRepository';

export class MysqlCategoriaRepository implements ICategoriaMuscularRepository{
  private db: Database;
  constructor() {
    this.db = new Database()
  }

  async createCategoria(categoria: CategoriaMuscular): Promise<void> {
    await this.db.connect();
    await this.db.query(
      'insert into categoria_musc (id_categoria_musc, nome', 
      [categoria.id_categoria_musc, categoria.nome],
    );
    await this.db.close();
  }
  async findCategoria(id_categoria: string): Promise<CategoriaMuscular> {
    await this.db.connect();
    const rows: CategoriaMuscular = await this.db.query(
      'select * from categoria_musc where id_categoria_musc = ?', 
      [id_categoria],
    );
    await this.db.close();
    return rows;
  }
  async findCategorias(): Promise<CategoriaMuscular[]> {
    await this.db.connect();
    const rows: CategoriaMuscular[] = await this.db.query(
      'select * from categoria_musc',
      [],
    );
    await this.db.close();
    return rows;
  }
  async editCategoria(id_categoria: string, column: string, value: string): Promise<number> {
    await this.db.connect();
    const rows = await this.db.query(
      `update categoria_musc set ${column} = ? where id_categoria_musc = ?`,
      [value, id_categoria],
    );
    await this.db.close();
    return 1;
  }
  async deleteCategoria(id_categoria: string): Promise<void> {
    await this.db.connect();
    await this.db.query('delete from categoria_musc where id_categoria_musc = ?', [id_categoria]);
    await this.db.close();
  }
}

