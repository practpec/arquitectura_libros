import { query } from "../../database/mysql";
import { Assignament } from "../domain/Assignament";
import { AssignamentRepository } from "../domain/AssignamentRepository";

export class MysqlAssignamentRepository implements AssignamentRepository {
  async getByUser(id_user: number): Promise<Assignament[] | null> {

    //asignar el nombre
    const sql = "SELECT * FROM assignament where id_user = ?";
    const params: any[] = [id_user];
    console.log("hola")
    try {
      const [data]: any = await query(sql, params);
      const dataAssignaments = Object.values(JSON.parse(JSON.stringify(data)));
      console.log("hola")
      return dataAssignaments.map(
        (assignament: any) =>
          new Assignament(
            assignament.id,
            assignament.id_user,
            assignament.id_book
          )
      );
    } catch (error) {
      return null;
    }
  }



  async createAssignament(
    id_user: number,
    id_book: number
  ): Promise<Assignament | null> {
    const sql =
      "INSERT INTO assignament (id_user, id_book ) VALUES (?, ?)";
    const params: any[] = [id_user, id_book];
    try {
      const [result]: any = await query(sql, params);
      return new Assignament(result.insertId, id_user, id_book);
    } catch (error) {
      return null;
    }
  }
}
