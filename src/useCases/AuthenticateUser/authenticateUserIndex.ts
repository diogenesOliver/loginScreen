import { container } from "tsyringe";

import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserService } from "./AuthenticateUserService";

const authenticateUserInstance = new AuthenticateUserController(
    container.resolve(AuthenticateUserService)
)

export { authenticateUserInstance }