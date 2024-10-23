import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/db"
import { verify } from "jsonwebtoken"
import { compareSync } from "bcrypt";



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
            async authorize (credentials){
                
                const { email, password } = credentials as {email:string, password:string}
                
                
                const user = await prisma.user.findUnique({
                    where: {
                        email: email,
                    }
                })
                
                if (!user) {
                    throw new Error("User not found");
                }else if (user&& compareSync(password,user?.password,)) {
                    return user;
                }else{
                    throw new Error("Incorrect Password");
                }
            }
        })       
        
    ],
    callbacks: {
        async jwt({ user,token }) {
            return {...user,...token}
        },
        async session({ session, token, user }) {
            return {...session, ...user,...token}
        
    },
    },
    pages: {
        signIn: "/user/login"
    },
 
   jwt: {
    secret: process.env.NEXTAUTH_SECRET
   }
})

export { handler as GET, handler as POST }


