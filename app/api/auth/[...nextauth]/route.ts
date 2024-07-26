import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/db"
import { verify } from "jsonwebtoken"
import {userSignIn} from "@/types"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Username', type: "text"
                },
                password: {
                    label: "Password", type: "password"
                }
            },
            authorize: function (credentials: userSignIn): Awaitable<User | null> {

                const user = prisma.user.findUnique({
                    where: {
                        email: credentials?.username
                    }
                })
                    const verified = verify(credentials.password, process.env.JWT_SECRET)
                    
                    return verified ? user : null
            }
        })       
        
    ],
    // pages: {
    //     signIn: '/auth/signIn'
    // }
})

export { handler as GET, handler as POST }