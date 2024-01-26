import { Request, Response } from "express";

import { CreateBookUseCase } from "../../application/CreateBookUseCase";
//import { Product } from "../../domain/Product";

export class CreateBookController {
  constructor(readonly createBookUseCase: CreateBookUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const book = await this.createBookUseCase.run(
        data.name,
        data.category,
        data.quantity
      );

      if (book)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: book?.id,
            name: book?.name,
            category: book?.category,
            quantity: book?.quantity,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
