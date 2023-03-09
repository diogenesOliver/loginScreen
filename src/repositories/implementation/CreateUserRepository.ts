import { User } from "../../domain/models/User";
import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

export class CreateUserRepository implements ICreateUserRepository{
    async save(userData: UserEntitie): Promise<UserEntitie> {
        User.create(userData)
        return userData
    }
}