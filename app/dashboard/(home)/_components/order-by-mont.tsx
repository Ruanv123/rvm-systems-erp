import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getOrdersRevenueMonth } from '@/data/orders'

export const MonthOrdersCard = async () => {
  const totalOrders = await getOrdersRevenueMonth()

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base font-semibold'>
          Orders (Month)
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold'>{totalOrders}</span>
        <p className='text-xs text-muted-foreground'>
          <span className={'text-emerald-500'}>+42.31%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  )
}
