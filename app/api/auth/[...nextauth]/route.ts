import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/db"
import { sign } from "jsonwebtoken"



const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: 'Email', type: "text"
                },
                password: {
                    label: "Password", type: "password"
                }
            },
            authorize: async function (credentials){
                const { email, password } = credentials as {email:string, password:string}
                const encoded = sign(password, process.env.JWT_SECRET as string)
          
                const user = await prisma.user.findUnique({
                    where: {
                        email: email,
                        password: encoded
                    }
                })
                if (user) {
                    return user;
                }
                throw new Error("User not found");
                    
            }
        })       
        
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log(user)
            console.log(token)
            return {token, ...user}
        },
        async session({ session, token }) {
            return session
        
    },
    },
   
    secret: process.env.JWT_SECRET
})

export { handler as GET, handler as POST }