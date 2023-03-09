import { Router, Request, Response } from "express";

import { createUserUseCaseInstance } from "./useCases/CreateUser/createUserIndex";

const routes = Router()

routes.get('/home-page', (req: Request, res: Response) => {
    res.render('index')
})

routes.get('/login-user', (req: Request, res: Response) => {
    res.render('logar')
})

routes.get('/user-exist', (req: Request, res: Response) => {
    res.render('login')
})

routes.post('/register', (req: Request, res: Response) => {
    return createUserUseCaseInstance.handle(req, res)
})

export { routes }