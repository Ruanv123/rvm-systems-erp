import db from '@/lib/db'
import { faker } from '@faker-js/faker'

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

async function seed() {
  try {
    for (let i = 0; i < 100; i++) {
      await db.produto.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          barCode: faker.string.uuid(),
          costPrice: parseFloat(faker.commerce.price()),
          buyPrice: parseFloat(faker.commerce.price()),
          sellPrice: parseFloat(faker.commerce.price()),
          quantity: faker.number.int({ min: 1, max: 100 }),
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      })
    }
    console.log('Seed completed successfully.')
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await db.$disconnect()
  }
}

// seed()
