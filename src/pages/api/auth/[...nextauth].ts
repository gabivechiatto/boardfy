import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, profile }: any) {
      try {
        return {
          ...session,
          id: profile.sub
        }
      } catch {
        return {
          ...session,
          id: null
        }
      }
    },
    async signIn({ user, account, profile }: any) {
      const { email } = user;

      try {
        return true
      } catch (err) {
        console.log('Error', err);
        return false
      }
    }
  }
}

export default NextAuth(authOptions)
