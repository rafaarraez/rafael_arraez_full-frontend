import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";


const scope =
    "user-library-modify user-follow-read user-read-email user-read-private user-library-read";

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: {
                params: { scope },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at!, // milliseconds
                };
            }

            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.username = token.username;
            session.accessTokenExpires = token.accessTokenExpires;
            return session;
        },
    },
    pages: {
        signIn: "/",
        signOut: "/",
        error: "/",
    },
    session: {
        maxAge: 24 * 60 * 60,
    },
    debug: true,
});