import { Request, Response } from "express";

import { GetByIdBookUseCase } from "../../application/GetByIdBookUseCase";

export class GetByIdBookController {
  constructor(readonly getByIdBookUseCase: GetByIdBookUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const book = await this.getByIdBookUseCase.run(id);

      if (book)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: book.id,
            name: book.name,
            category: book.category,
            quantity: book.quantity,
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
