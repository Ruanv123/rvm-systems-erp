import NextAuth from 'next-auth'
import authConfig from '@/auth.config'
import { UserRole } from '@prisma/client'
import { getUserById } from './data/user'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
  },
  callbacks: {
    async signIn() {
      return true
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
      }

      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        session.user.isOAuth = token.isOAuth as boolean
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      // const existingAccount = await getAccountByUserId(existingUser.id)

      // token.isOAuth = !!existingAccount
      token.name = existingUser.name
      token.email = existingUser.email
      token.emailVerified = existingUser.emailVerified
      token.picture = existingUser.image
      token.role = existingUser.role
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token
    },
  },
  // adapter: PrismaAdapter(db),
  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },
  ...authConfig,
})
