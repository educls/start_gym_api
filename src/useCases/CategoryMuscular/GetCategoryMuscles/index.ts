import { MysqlCategoriaRepository } from "../../../repositories/implementations/MysqlICategoriaMuscularRepository";
import { GetCategoryMusclesController } from "./GetCategoryMusclesController";
import { GetCategoryMusclesUseCase } from "./GetCategoryMusclesUseCase";

const mysqlCategoriaRepository = new MysqlCategoriaRepository();

const getCategoryMusclesUseCase = new GetCategoryMusclesUseCase(
  mysqlCategoriaRepository
);

const getCategoryMusclesController = new GetCategoryMusclesController(
  getCategoryMusclesUseCase
);

export { getCategoryMusclesUseCase, getCategoryMusclesController }