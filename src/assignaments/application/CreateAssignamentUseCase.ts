import { Assignament } from "../domain/Assignament";
import { AssignamentRepository } from "../domain/AssignamentRepository";

export class CreateAssignamentUseCase {
  constructor(readonly assignametRepository: AssignamentRepository) {}

  async run(
    id_user: number,
    id_book: number
  ): Promise<Assignament | null> {
    try {
      const assignament = await this.assignametRepository.createAssignament(
        id_user,
        id_book

      );
      return assignament;
    } catch (error) {
      return null;
    }
  }
}
