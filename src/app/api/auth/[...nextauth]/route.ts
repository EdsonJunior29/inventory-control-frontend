import NextAuth from "next-auth/next"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    pages: {
        signIn:'/'
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials) {
                return null
            }

            if(credentials.email === 'edsonjos61@gmail.com' && credentials.password === 'Teste@7289') {
                return {
                    id: '1',
                    name: 'Edson Junior',
                    email: 'edsonjos61@gmail.com'
                }
            }

            return null
          }
        })
      ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}