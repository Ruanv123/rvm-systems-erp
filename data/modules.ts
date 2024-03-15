import { currentUser } from '@/lib/auth'
import db from '@/lib/db'

export async function getModulesByUser() {
  const atualUser = await currentUser()

  const user = await db.user.findFirst({
    where: { id: atualUser?.id },
    include: { Permissions: { include: { Modules: true } } },
  })

  if (!user) {
    throw new Error('Usuário não encontrado')
  }

  const modules = user.Permissions?.Modules ?? []

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

export async function getAllModulesPagination(page: number) {
  try {
    const modules = await db.modules.findMany({
      skip: 0,
      take: 10,
    })

    return modules
  } catch (error) {
    console.log(error)
  }
}
