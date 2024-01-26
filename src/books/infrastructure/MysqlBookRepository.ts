import { query } from "../../database/mysql";
import { Book } from "../domain/Book";
import { BookRepository } from "../domain/BookRepository";

export class MysqlBookRepository implements BookRepository {
  async getByCategory(category: string): Promise<Book[] | null> {
    const sql = "SELECT * FROM book where category = ?";
    const params: any[] = [category];
    console.log("hola")
    try {
      const [data]: any = await query(sql, params);
      const dataBooks = Object.values(JSON.parse(JSON.stringify(data)));
  
      return dataBooks.map(
        (book: any) =>
          new Book(
            book.id,
            book.name,
            book.category,
            book.quantity
          )
      );
    } catch (error) {
      throw error; 
    }
  }

  async getById(userId: number): Promise<Book | null> {
    const sql = "SELECT * FROM book WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      
      return new Book(
        result[0].id,
        result[0].name,
        result[0].category,
        result[0].quantity
      );
    } catch (error) {
      return null;
    }
  }

  async createBook(
    name: string,
    category: string,
    quantity: number
  ): Promise<Book | null> {
    const sql =
      "INSERT INTO book (name, category, quantity) VALUES (?, ?, ?)";
    const params: any[] = [name, category, quantity];
    try {
      const [result]: any = await query(sql, params);
      return new Book(result.insertId, name, category, quantity);
    } catch (error) {
      return null;
    }
  }
}
