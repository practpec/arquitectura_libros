import { Book } from "../domain/Book";
import { BookRepository } from "../domain/BookRepository";

export class GetByIdBookUseCase {
  constructor(readonly bookRepository: BookRepository) {}

  async run(id: number): Promise<Book | null> {
    try {
      const result = await this.bookRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
