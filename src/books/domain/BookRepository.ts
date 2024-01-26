import {Book} from "./Book";

export interface BookRepository {
    getByCategory(category: string): Promise<Book[]|null>;
    getById(id: number): Promise<Book|null>;
    createBook(
        name: string,
        category: string,
        quantity: number
    ):Promise<Book|null>;
    }