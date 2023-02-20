interface IUserEntitie{

    username: string,
    email: string,
    password: string,
    confirmpassword: string

}

export class UserEntitie{

    public props: IUserEntitie

    constructor(props: IUserEntitie){
        this.props = props
    }

}