import { Training } from "../../../entities/Training";
import { ITrainingRepository } from "../../../repositories/ITrainingRepository";
import { IGetTrainingsByIdsRequestDTO } from "./GetTrainingsByIdsDTO";


export class GetTrainingsByIdsUseCase {
  constructor(
    private trainingRepository: ITrainingRepository
  ) { }

  async execute(data: IGetTrainingsByIdsRequestDTO): Promise<Training[]> {
    
    if (data.ids.length == 0) {
      throw new Error("No ids provided");
    }

    return await this.trainingRepository.getTrainingByIds(data.ids);
  }
}