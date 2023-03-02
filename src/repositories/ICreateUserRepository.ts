import { UserEntitie } from "../entities/User";

export interface ICreateUserRepository{
    save(userData: UserEntitie): Promise<UserEntitie>
}