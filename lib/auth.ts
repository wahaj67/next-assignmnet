import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const {handlers,signIn,signOut,auth} = NextAuth({
    providers:[
        Github({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_ClIENT_SECRET
        }),
        GoogleProvider({
            clientId:process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET
        }),
        // Facebook({
        //     clientId:process.env.AUTH_FACEBOOK_ID,
        //     clientSecret:process.env.AUTH_FACEBOOK_SECRET
        // })
    ]
})

