'use server'

import {
  getFornecedorByID,
  getFornecedorByRazaoSocial,
} from '@/data/fornecedor'
import db from '@/lib/db'
import { FornecedorSchema } from '@/schemas'
import { z } from 'zod'

export const fornecedorRegister = async (
  values: z.infer<typeof FornecedorSchema>,
) => {
  try {
    const vailidatedFields = FornecedorSchema.safeParse(values)

    if (!vailidatedFields.success) {
      return { error: 'Invalid fields!' }
    }

    const {
      cep,
      email,
      endereco,
      nome_fantasia,
      razao_social,
      telefone,
      site,
      tipo_pessoa,
      cnpj,
      cpf,
    } = vailidatedFields.data

    const existingFornecedor = getFornecedorByRazaoSocial(razao_social)

    if (!existingFornecedor) {
      return { error: 'Fornecedor already exist!' }
    }

    await db.fornecedor.create({
      data: {
        nome_fantasia,
        razao_social,
        email,
        endereco,
        cep,
        telefone,
        site,
        tipo_pessoa,
        cpf,
        cnpj: cnpj,
      },
    })
    return { success: 'Forncedor created with success!' }
  } catch (error) {
    console.log(error)
  }
}

export const deleteFornecedor = async (id: number) => {
  const existingFornecedor = await getFornecedorByID(id)

  if (!existingFornecedor) {
    return { error: 'Fornecedor not exist!' }
  }

  await db.produto.delete({
    where: {
      id,
    },
  })

  return { success: 'Fornecedor deleted with success!' }
}

interface IGetFornecedor {
  search?: string | undefined
  offset?: number
  limit?: number
}

export async function getFornecedores({
  search,
  offset = 0,
  limit = 10,
}: IGetFornecedor) {
  const data = await db.fornecedor.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      id: 'asc',
    },
  })

  const totalCount = await db.fornecedor.count()

  const totalPages = Math.ceil(totalCount / limit)

  return { data, totalCount, totalPages }
}
