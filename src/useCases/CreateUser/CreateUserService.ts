import { inject, injectable } from "tsyringe";
import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

@injectable()
export class CreateUserService{

    constructor(
        @inject("CreateUserRepository")
        private createUserService: ICreateUserRepository
    ){}

    async execute(userData: UserEntitie){
        return await this.createUserService.save(userData)
    }

}