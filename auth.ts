import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import authConfig from '@/auth.config'
import db from './lib/db'
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
        session.user.name = token.name
        if (token.email) {
          session.user.email = token.email
        }
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      // const existingAccount = await getAccountByUserId(existingUser.id)

      token.name = existingUser.name
      token.email = existingUser.email
      token.picture = existingUser.image
      token.role = existingUser.role

      return token
    },
  },
  // adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
