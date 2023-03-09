import { Request, Response } from "express";
import { UserEntitie } from "../../entities/User";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController{

    constructor(
        private createUserController: CreateUserService
    ){}

    async handle(req: Request, res: Response){
        const userData: UserEntitie = req.body
        await this.createUserController.execute(userData)

        res.status(201).render('logar.ejs')
    }

}