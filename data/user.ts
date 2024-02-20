import db from '@/lib/db'

export async function getAllUsers() {
  try {
    const users = await db.user.findMany({})

    return users
  } catch (error) {
    console.log(error)
  }
}

export const getUserByEmail = async (email: string) => {
  try {
    const user = db.user.findUnique({
      where: { email },
    })

    return user
  } catch (error) {
    console.log(error)
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    })

    return user
  } catch (error) {
    return null
  }
}
