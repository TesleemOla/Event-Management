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
            authorize: function (credentials): Awaitable<User | null> {
                const { password, username} = credentials
                const user = prisma.user.findUnique({
                    where: {
                        email: username
                    }
                })
                    const verified = verify(password, process.env.JWT_SECRET as string)
                    
                    return verified ? user : null
            }
        })       
        
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        session({ session, token }) {
            session.user = token
            return session
        
    },
    }
    // pages: {
    //     signIn: '/auth/signIn'
    // }
})

export { handler as GET, handler as POST }