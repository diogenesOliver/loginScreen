import { UserEntitie } from "../entities/User";

export interface IAuthenticateUserRepository{
    authenticate(dataAuth: UserEntitie): Promise<UserEntitie>
}