import db from '@/lib/db'

export const getAllFornecedores = async () => {
  try {
    const fornecedores = await db.fornecedor.findMany({
      orderBy: [
        {
          id: 'asc',
        },
      ],
    })

    return fornecedores
  } catch (error) {
    console.error('Erro ao buscar fornecedores:', error)
    throw new Error(
      'Erro ao buscar fornecedores. Por favor, tente novamente mais tarde.'
    )
  }
}

export const getFornecedorByRazaoSocial = async (razao_social: string) => {
  try {
    const fornecedor = await db.fornecedor.findFirst({
      where: {
        razao_social,
      },
    })

    return fornecedor
  } catch (error) {
    console.log(error)
  }
}

export const getFornecedorByID = async (id: number) => {
  try {
    const fornecedor = await db.fornecedor.findUnique({
      where: {
        id,
      },
    })

    return fornecedor
  } catch (error) {
    console.log(error)
  }
}
