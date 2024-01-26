import {User} from "./User";

export interface UserRepository {
    createUser(
        name: string,
    ):Promise<User|null>;
}