import { Request, Response } from "express";

import { CreateAssignamentUseCase } from "../../application/CreateAssignamentUseCase";
//import { Product } from "../../domain/Product";

export class CreateAssignamentController {
  constructor(readonly createAssignamentUseCase: CreateAssignamentUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const assignament = await this.createAssignamentUseCase.run(
        data.id_user,
        data.id_book
      );

      if (assignament)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: assignament?.id,
            id_user: assignament?.id_user,
            id_book: assignament?.id_book
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
