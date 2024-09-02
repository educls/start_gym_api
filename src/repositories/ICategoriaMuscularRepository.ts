import { CategoriaMuscular } from "../entities/Training";

export interface ICategoriaMuscularRepository {
  createCategoria(categoria: CategoriaMuscular): Promise<void>;
  editCategoria(id_categoria: string, column: string, value: string): Promise<number>;
  findCategoria(id_categoria: string): Promise<CategoriaMuscular>;
  findCategorias(): Promise<CategoriaMuscular[]>;
  deleteCategoria(id_categoria: string): Promise<void>;
}