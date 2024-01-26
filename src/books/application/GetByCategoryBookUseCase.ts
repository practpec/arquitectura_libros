import { Book } from "../domain/Book";
import { BookRepository } from "../domain/BookRepository";

export class getByCategoryBookUseCase {
  constructor(readonly bookRepository: BookRepository) {}

  async run(category: string): Promise<Book[] | null> {
    try {
      const result = await this.bookRepository.getByCategory(category);
      return result;
    } catch (error) {
      return null;
    }
  }
}
