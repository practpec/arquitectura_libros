import { Assignament } from "../domain/Assignament";
import { AssignamentRepository } from "../domain/AssignamentRepository";

export class getByUserAssignamentUseCase {
  constructor(readonly assignamentRepository: AssignamentRepository) {}

  async run(id_user: number): Promise<Assignament[] | null> {
    try {
      const result = await this.assignamentRepository.getByUser(id_user);
      return result;
    } catch (error) {
      return null;
    }
  }
}
