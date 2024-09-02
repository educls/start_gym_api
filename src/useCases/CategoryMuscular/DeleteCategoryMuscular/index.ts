import { MysqlCategoriaRepository } from "../../../repositories/implementations/MysqlICategoriaMuscularRepository";
import { DeleteCategoryMuscularUseCase } from "./DeleteCategoryMuscularUseCase";
import { DeleteCategotyMuscularController } from "./DeleteCategoryMuscularController";

const mysqlCategoriaRepository = new MysqlCategoriaRepository();

const deleteCategoryMuscularUseCase = new DeleteCategoryMuscularUseCase(
  mysqlCategoriaRepository
);

const deleteCategotyMuscularController = new DeleteCategotyMuscularController(
  deleteCategoryMuscularUseCase
);

export { deleteCategoryMuscularUseCase, deleteCategotyMuscularController }