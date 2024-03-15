import { PrismaClient } from '@prisma/client'

declare global {
  var db: PrismaClient | undefined
}

const db =
  global.db ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  })

if (process.env.NODE_ENV === 'development') global.db = db

export default db
