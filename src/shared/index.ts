import { container } from 'tsyringe'

import { IAuthenticateUserRepository } from '../repositories/IAuthenticateUserRepository'
import { ICreateUserRepository } from '../repositories/ICreateUserRepository'

import { AuthenticateUserRepository } from '../repositories/implementation/AuthenticateUserRepository'
import { CreateUserRepository } from '../repositories/implementation/CreateUserRepository'

container.registerSingleton<IAuthenticateUserRepository>(
    "AuthenticateUserRepository",
    AuthenticateUserRepository
)

container.registerSingleton<ICreateUserRepository>(
    "CreateUserRepository",
    CreateUserRepository
)