import { CategoriaMuscular } from "../../../entities/Training";
import { ICategoriaMuscularRepository } from "../../../repositories/ICategoriaMuscularRepository";

export class GetCategoryMusclesUseCase {
  constructor(
    private categoryMuscularRespotory: ICategoriaMuscularRepository,
  ) { }

  async execute(): Promise<CategoriaMuscular[]>{
    const categoryMuscles = await this.categoryMuscularRespotory.findCategorias();
    return categoryMuscles;
  }
}