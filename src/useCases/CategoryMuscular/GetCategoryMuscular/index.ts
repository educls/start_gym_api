import { MysqlCategoriaRepository } from "../../../repositories/implementations/MysqlICategoriaMuscularRepository";
import { GetCategoryMuscularController } from "./GetCategoryMuscularController";
import { GetCategoryMuscularUseCase } from "./GetCategoryMuscularUseCase";

const mysqlCategoriaRepository = new MysqlCategoriaRepository();

const getCategoryMuscularUseCase = new GetCategoryMuscularUseCase(
  mysqlCategoriaRepository,
);

const getCategoryMuscularController = new GetCategoryMuscularController(
  getCategoryMuscularUseCase,
);

export { getCategoryMuscularUseCase, getCategoryMuscularController }