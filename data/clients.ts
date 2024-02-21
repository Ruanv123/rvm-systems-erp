import db from '@/lib/db'

export const getAllClients = async () => {
  try {
    const clients = await db.cliente.findMany({
      orderBy: [
        {
          id: 'asc',
        },
      ],
    })

    return clients
  } catch (error) {
    console.log(error)
  }
}
