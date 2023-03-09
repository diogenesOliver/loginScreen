import { container } from "tsyringe";

import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const createUserUseCaseInstance = new CreateUserController(
    container.resolve(CreateUserService)
)

export { createUserUseCaseInstance }