import { MysqlCategoriaRepository } from "../../../repositories/implementations/MysqlICategoriaMuscularRepository";
import { CreateCategoryMuscularController } from "./CreateCategoryMuscularController";
import { CreateCategoryMuscularUseCase } from "./CreateCategoryMuscularUseCase";

const mysqlCategoriaRepository = new MysqlCategoriaRepository();

const createCategoryMuscularUseCase = new CreateCategoryMuscularUseCase(
  mysqlCategoriaRepository
);

const createCategoryMuscularController = new CreateCategoryMuscularController(
  createCategoryMuscularUseCase
);

export { createCategoryMuscularUseCase, createCategoryMuscularController }