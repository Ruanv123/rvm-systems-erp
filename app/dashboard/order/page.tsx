import { OrdersModal } from '@/components/modals/order-modal'
import { PageTitle } from '@/components/page-title'
import { Badge } from '@/components/ui/badge'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table'
import { getOrders } from '@/data/orders'
import { Edit, Pencil, Trash } from 'lucide-react'

export default async function Page() {
  const orders = await getOrders()

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <PageTitle title='Orders' />
        <OrdersModal />
      </div>
      <div className='space-y-2.5'>
        <div className='mt-10 space-y-2.5 overflow-hidden rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Nome do Cliente</TableHead>
                <TableHead>Produtos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders && orders.length ? (
                orders?.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      {order.total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge className='cursor-pointer'>{order.status}</Badge>
                    </TableCell>
                    <TableCell>{order.Cliente?.name}</TableCell>
                    <TableCell>
                      {order.produtos?.map((a) => a.name + ', ')}
                    </TableCell>
                    <TableCell className='flex gap-1'>
                      <Pencil size={18} />
                      <Trash size={18} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={11}
                    className='py-10 text-center text-muted-foreground'
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
