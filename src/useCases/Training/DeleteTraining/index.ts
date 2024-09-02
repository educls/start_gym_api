import { MysqlTrainingRepository } from "../../../repositories/implementations/MysqlTrainingRepository";
import { DeleteTrainingController } from "./DeleteTrainingController";
import { DeleteTrainingUseCase } from "./DeleteTrainingUseCase";

const mysqlTrainingRepository = new MysqlTrainingRepository();

const deleteTrainingUseCase = new DeleteTrainingUseCase(
  mysqlTrainingRepository,
);

const deleteTrainingController = new DeleteTrainingController(
  deleteTrainingUseCase,
);

export { deleteTrainingUseCase, deleteTrainingController }