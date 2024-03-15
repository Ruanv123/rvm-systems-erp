import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { getLastOrders } from '@/data/orders'
import { formatPrice } from '@/lib/utils'

export async function RecentSales() {
  const t = await getLastOrders()

  return (
    <Card className='col-span-3 w-full'>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>
          You made {t?.totalToMont || 0} sales this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {t?.data?.map((current, idx) => (
            <div className='flex items-center' key={idx}>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {current.Cliente?.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {current.Cliente?.email}
                </p>
              </div>
              <div className='ml-auto font-medium'>
                {formatPrice(current.total)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
