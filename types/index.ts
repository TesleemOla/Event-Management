export interface Regdata{
    email: string,
    firstName: string,
    lastName: string,
    password: string
    role: Role
}


enum Role{
    ADMIN,
    CLIENT
}

export interface userSignIn{
    username: string,
    password: string
}