'use server'

import { RegisterSchema } from '@/schemas'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { getUserByEmail, getUserById } from '@/data/user'
import db from '@/lib/db'

export const userRegister = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, name, password } = validatedFields.data

  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Email already in use!' }
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  })

  return { success: 'Usuario criado com sucesso!' }
}

export async function deleteUser(id: string) {
  const existingUser = await getUserById(id)

  if (!existingUser) {
    return { error: 'User not exist!' }
  }

  await db.user.delete({
    where: {
      id,
    },
  })

  return { success: 'User deleted with success!' }
}
