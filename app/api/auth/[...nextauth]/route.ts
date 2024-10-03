import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID!,
            clientSecret: process.env.KEYCLOAK_SECRET!,
            issuer: process.env.KEYCLOAK_ISSUER,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                accessToken: token.accessToken as string,
            }
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }