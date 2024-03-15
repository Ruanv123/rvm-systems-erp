import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTotalSellOrders } from '@/data/orders'
import { formatPrice } from '@/lib/utils'

export const TotalPriceOrdersCard = async () => {
  const totalOrders = await getTotalSellOrders()

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base font-semibold'>
          Revenue (Total)
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold'>
          {formatPrice(totalOrders || 0)}
        </span>
        <p className='text-xs text-muted-foreground'>
          <span className={'text-emerald-500'}>+42.31%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  )
}
