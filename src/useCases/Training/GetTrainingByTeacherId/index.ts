import { MysqlTrainingRepository } from "../../../repositories/implementations/MysqlTrainingRepository";
import { GetTrainingByTeacherIdUseCase } from "./GetTrainingByTeacherIdUseCase";
import { GetTrainingByTeacherIdController } from "./GetTrainingByTeacherIdController";


const mysqlTrainingRepository = new MysqlTrainingRepository();

const getTrainingByTeacherIdUseCase = new GetTrainingByTeacherIdUseCase(
  mysqlTrainingRepository
);

const getTrainingByTeacherIdController = new GetTrainingByTeacherIdController(
  getTrainingByTeacherIdUseCase
);

export { getTrainingByTeacherIdUseCase, getTrainingByTeacherIdController };