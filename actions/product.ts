'use server'

import { getProductByBarCode, getProductByID } from '@/data/produtos'
import db from '@/lib/db'
import { ProductSchema } from '@/schemas'
import { z } from 'zod'

export const productRegister = async (
  values: z.infer<typeof ProductSchema>,
) => {
  const validatedFields = ProductSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const {
    name,
    description,
    quantity,
    barCode,
    buyPrice,
    costPrice,
    sellPrice,
  } = validatedFields.data

  const existingProduct = getProductByBarCode(barCode)

  if (!existingProduct) {
    return { error: 'Product with barCode already exist!' }
  }

  await db.produto.create({
    data: {
      name,
      description,
      quantity,
      barCode,
      buyPrice,
      costPrice,
      sellPrice,
    },
  })

  return { success: 'Product create with success!' }
}

export const deleteProduct = async (id: number) => {
  const existingProduct = await getProductByID(id)

  if (!existingProduct) {
    return { error: 'Product not exist!' }
  }

  await db.produto.delete({
    where: {
      id,
    },
  })

  return { success: 'Product deleted with success!' }
}

interface IGetProducts {
  search?: string | undefined
  offset?: number
  limit?: number
}

export async function getProducts({
  search,
  offset = 0,
  limit = 10,
}: IGetProducts) {
  const data = await db.produto.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      id: 'asc',
    },
  })

  const totalCount = await db.produto.count()

  const totalPages = Math.ceil(totalCount / limit)

  return { data, totalCount, totalPages }
}
