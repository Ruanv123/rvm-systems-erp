import { auth } from '@/auth'
import { useSession } from 'next-auth/react'

export const currentUser = async () => {
  const session = await auth()

  return session?.user
}

// server side functions
export const currentRole = async () => {
  const session = await auth()

  return session?.user?.role
}

// hook para pegar o usuario
export const useCurrentUser = () => {
  const session = useSession()

  return session.data?.user
}

// hook para pegar a role
export const useCurrentRole = () => {
  const session = useSession()

  return session.data?.user.role
}

/*
 * An array of routes that are public
 *  These routes not required authentication
 * * @type {string[]}
 */
export const publicRoutes = ['/', '/new-verification']

/*
 * An array of routes that use to authentication
 *  These routes not required authentication
 * * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/error',
  '/auth/reset',
  '/auth/new-password',
]

/*
 * An array of routes that use to authentication
 *  These routes not required authentication
 * * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/*
 * An array of routes that use to authentication
 * * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
