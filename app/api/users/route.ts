import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/lib/db'

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method Not Allowed' })
//   }

//   try {
//     const users = await db.user.findMany({
//       select: {
//         id: true,
//         name: true,
//       },
//     })
//     res.status(200).json(users)
//   } catch (error) {
//     console.error('Error fetching users:', error)
//     res.status(500).json({ error: 'Internal Server Error' })
//   }
// }

export async function GET(res: NextApiResponse) {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
      },
    })

    return res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ error: 'occoreu um error!' })
  }
}
