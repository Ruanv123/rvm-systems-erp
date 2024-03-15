import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const clients = await db.cliente.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return NextResponse.json({
    code: 200,
    data: clients,
  })
}
