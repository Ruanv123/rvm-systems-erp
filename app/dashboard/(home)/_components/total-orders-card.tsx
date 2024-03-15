import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTotalOrders } from '@/data/orders'

export const TotalOrdersCard = async () => {
  const totalOrders = await getTotalOrders()
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base font-semibold'>
          Orders (total)
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold'>{totalOrders?.toFixed()}</span>
        <p className='text-xs text-muted-foreground'>
          {/* <span className={'text-emerald-500'}>+42.31%</span> em relação ao mês
          passado */}
          Total orders
        </p>
      </CardContent>
    </Card>
  )
}
