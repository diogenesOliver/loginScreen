import { Router, Request, Response } from "express";

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

export { routes }