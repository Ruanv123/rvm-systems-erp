import db from '@/lib/db'

export const getAllProducts = async () => {
  try {
    const products = await db.produto.findMany({
      orderBy: [
        {
          id: 'asc',
        },
      ],
    })

    return products
  } catch (error) {
    console.log(error)
  }
}

export const getProductByBarCode = async (barCode: string) => {
  try {
    const product = db.produto.findFirst({
      where: {
        barCode,
      },
    })

    return product
  } catch (error) {
    console.log(error)
  }
}

export const getProductByID = async (id: number) => {
  try {
    const product = db.produto.findUnique({
      where: {
        id,
      },
    })

    return product
  } catch (error) {
    console.log(error)
  }
}
