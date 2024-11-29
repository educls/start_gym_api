import { MysqlTrainingRepository } from "../../../repositories/implementations/MysqlTrainingRepository";
import { GetTrainingsByIdsUseCase } from "./GetTrainingsByIdsUseCase";
import { GetTrainingsByIdsController } from "./GetTrainingsByIdsController";

const mysqlTrainingRepository = new MysqlTrainingRepository();

const getTrainingsByIdsUseCase = new GetTrainingsByIdsUseCase(
  mysqlTrainingRepository
);

const getTrainingsByIdsController = new GetTrainingsByIdsController(
  getTrainingsByIdsUseCase
);

export { getTrainingsByIdsUseCase, getTrainingsByIdsController };