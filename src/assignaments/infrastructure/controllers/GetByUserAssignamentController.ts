import { Request, Response } from "express";

import { getByUserAssignamentUseCase } from "../../application/GetByUserAssignamentCase";

export class GetByUserAssignamentController {
  constructor(readonly getByUserAssignamentUseCase: getByUserAssignamentUseCase) {}

  async run(req: Request, res: Response) {
    const id_user: number = parseInt(req.params.id);
    try {
      const assignaments = await this.getByUserAssignamentUseCase.run(id_user);
      console.log(assignaments);
      if (assignaments)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: assignaments.map((assignament: any) => {
            return {
              id: assignament.id,
              id_user: assignament.id_user,
              id_book: assignament.id_book
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error:any) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
