import { Request, Response } from "express";

import { getByCategoryBookUseCase } from "../../application/GetByCategoryBookUseCase";

export class GetByCategoryController {
  constructor(readonly getByCategoryBookUseCase: getByCategoryBookUseCase) {}

  async run(req: Request, res: Response) {
    const category: string = req.body.category;
    try {
      const books = await this.getByCategoryBookUseCase.run(category);
      console.log(books);
      if (books)
        res.status(200).send({
          status: "success",
          data: books.map((book: any) => ({
            id: book.id,
            name: book.name,
            category: book.category,
            quantity: book.quantity,
          })),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema",
        });
    } catch (error: any) {
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error.message, // para obtener el mensaje de error
      });
    }
  }}
