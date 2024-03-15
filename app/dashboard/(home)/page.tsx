import { PageTitle } from '@/components/page-title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MonthPriceOrdersCard } from './_components/month-price-orders-card'
import { MonthOrdersCard } from './_components/order-by-mont'
import { Overview } from './_components/overview'
import { RecentSales } from './_components/recent-sales'
import { TotalOrdersCard } from './_components/total-orders-card'
import { TotalPriceOrdersCard } from './_components/total-price-orders-card'

async function DashboardPage() {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <PageTitle title='Dashboard' />
        <div className='flex flex-col gap-4 md:grid md:grid-cols-4'>
          <TotalOrdersCard />
          <TotalPriceOrdersCard />
          <MonthOrdersCard />
          <MonthPriceOrdersCard />
        </div>

        <div className='flex w-full flex-col gap-4 lg:grid lg:grid-cols-7'>
          <Card className='col-span-4'>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className='w-full pl-2'>
              <Overview />
            </CardContent>
          </Card>

          <RecentSales />
        </div>
      </div>
    </>
  )
}

export default DashboardPage
