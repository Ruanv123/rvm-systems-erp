import db from '@/lib/db'

export async function getOrders() {
  try {
    const orders = await db.order.findMany({
      include: {
        produtos: true,
        Cliente: true,
      },
    })

    return orders
  } catch (error) {
    console.log(error)
  }
}

export async function getTotalOrders() {
  try {
    const totalOrders = await db.order.count()

    return totalOrders
  } catch (error) {
    console.log(error)
  }
}

export async function getTotalSellOrders() {
  try {
    const data = await db.order.findMany()
    const total = data.reduce((acc, order) => acc + order.total, 0)

    return total
  } catch (error) {
    console.log(error)
  }
}

export async function getMonthSellOrders() {
  try {
    const now = new Date()
    const month = now.getMonth() + 1

    const data = await db.order.findMany({
      where: {
        status: 'COMPLETO',
        AND: [
          {
            createdAt: { gte: new Date(now.getFullYear(), month - 1, 1) },
          },
        ],
      },
    })

    const total = data.reduce((acc, orders) => acc + orders.total, 0)

    return total
  } catch (error) {
    console.log(error)
  }
}

export async function getOrdersRevenueMonth() {
  try {
    const now = new Date()
    const month = now.getMonth() + 1

    const data = await db.order.count({
      where: {
        status: 'COMPLETO',
        AND: [
          {
            createdAt: { gte: new Date(now.getFullYear(), month - 1, 1) },
          },
        ],
      },
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
export async function getLastOrders() {
  try {
    const hoje = new Date()
    const mesAtual = hoje.getMonth() + 1

    const data = await db.order.findMany({
      where: { status: 'COMPLETO' },
      take: 5,
      include: {
        Cliente: true,
      },
    })

    const totalToMont = await db.order.count({
      where: {
        AND: [
          { createdAt: { gte: new Date(hoje.getFullYear(), mesAtual - 1, 1) } },
        ],
      },
    })

    return { data, totalToMont }
  } catch (error) {
    console.log(error)
  }
}
