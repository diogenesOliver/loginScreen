import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

export class CreateUserRepository implements ICreateUserRepository{
    async save(userData: UserEntitie): Promise<UserEntitie> {
        /* Create Query */
        return userData
    }
}