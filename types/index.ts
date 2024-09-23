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

export interface eventDetails{
    id?: string,
    eventTitle: string,
    eventDate: string,
    eventTime: string,
    createdAt?: Date,
    updatedAt?: Date | null
}