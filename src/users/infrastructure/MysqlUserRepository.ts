import { query } from "../../database/mysql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class MysqlUserRepository implements UserRepository {
  

  async createUser(
    name: string,
  ): Promise<User | null> {
    const sql =
      "INSERT INTO user (name) VALUES (?)";
    const params: any[] = [name];
    try {
      const [result]: any = await query(sql, params);
      return new User(result.insertId, name);
    } catch (error) {
      return null;
    }
  }
}
