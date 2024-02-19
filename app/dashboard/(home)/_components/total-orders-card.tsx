import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const TotalOrdersCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base font-semibold'>
          Orders (total)
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <span className='text-2xl font-bold'>R$ 1.299,99</span>
        <p className='text-xs text-muted-foreground'>
          <span className={'text-emerald-500'}>+42.31%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  )
}
