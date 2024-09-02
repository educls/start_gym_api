import { MysqlTrainingRepository } from "../../../repositories/implementations/MysqlTrainingRepository";
import { GetTrainingController } from "./GetTrainingController";
import { GetTrainingUseCase } from "./GetTrainingUseCase";

const mysqlTrainingRepository = new MysqlTrainingRepository();

const getTrainingUseCase = new GetTrainingUseCase(
  mysqlTrainingRepository,
);

const getTrainingController = new GetTrainingController(
  getTrainingUseCase,
);

export { getTrainingUseCase, getTrainingController }