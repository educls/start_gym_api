import { MysqlCategoriaRepository } from "../../../repositories/implementations/MysqlICategoriaMuscularRepository";
import { EditCategoryMuscularController } from "./EditCategoryMuscularController";
import { EditCategoryMuscularUseCase } from "./EditCategoryMuscularUseCase";

const mysqlCategoriaRepository = new MysqlCategoriaRepository();

const editCategoryMuscularUseCase = new EditCategoryMuscularUseCase(
  mysqlCategoriaRepository
);

const editCategoryMuscularController = new EditCategoryMuscularController(
  editCategoryMuscularUseCase
);

export { editCategoryMuscularUseCase, editCategoryMuscularController }