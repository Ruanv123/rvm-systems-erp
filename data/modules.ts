import { currentUser } from '@/lib/auth'
import db from '@/lib/db'

export async function getModulesByUser() {
  const atualUser = await currentUser()

  const user = await db.user.findFirst({
    where: { id: atualUser?.id },
    include: { Permissions: { include: { modules: true } } },
  })

  if (!user) {
    throw new Error('Usuário não encontrado')
  }

  const modules = user.Permissions?.modules ?? []

  return modules
}

export async function getAllModules() {
  try {
    const modules = await db.modules.findMany({})

    return modules
  } catch (error) {
    console.log(error)
  }
}
