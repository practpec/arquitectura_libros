import {Assignament} from "./Assignament";

export interface AssignamentRepository {
    getByUser(id_user: number): Promise<Assignament[]|null>;
    createAssignament(
        id_user: number,
        id_book: number
    ):Promise<Assignament|null>;
}