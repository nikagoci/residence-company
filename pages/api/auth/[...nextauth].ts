import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            type: 'credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Your Username' },
                password: { label: 'Password', type: 'password', placeholder: 'Your Password' },
            },
            async authorize(credentials, req) {
                
                const user = await prisma.user.findFirst({ where: { username: credentials?.username, password: credentials?.password } })

                if(!user){
                    return null
                }

                return {
                    id: "1234",
                    username: credentials?.username
                }
            }

        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})