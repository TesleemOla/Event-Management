import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
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
            authorize: function (credentials: Record<"username", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
                
                const user={id:'1', name:'User', email: "userexample@gmail.com"}
                return user? user: null
            }
        })
    ],
    pages: {
        signIn: '/auth/signIn'
    }
})