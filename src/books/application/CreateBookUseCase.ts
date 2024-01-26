import { Book } from "../domain/Book";
import { BookRepository } from "../domain/BookRepository";

export class CreateBookUseCase {
  constructor(readonly bookRepository: BookRepository) {}

  async run(
    name: string,
    category: string,
    quantity: number
  ): Promise<Book | null> {
    try {
      const book = await this.bookRepository.createBook(
        name,
        category,
        quantity
      );
      return book;
    } catch (error) {
      return null;
    }
  }
}
