import { UserEntitie } from "../../entities/User";
import { IAuthenticateUserRepository } from "../IAuthenticateUserRepository";

export class AuthenticateUserRepository implements IAuthenticateUserRepository{
    async authenticate(dataAuth: UserEntitie): Promise<UserEntitie> {
        /* Qeury */
        return dataAuth
    }
}