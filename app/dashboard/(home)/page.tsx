import { PageTitle } from '@/components/page-title'
import { TotalOrdersCard } from './_components/total-orders-card'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Overview } from './_components/overview'
import { RecentSales } from './_components/recent-sales'

const DashboardPage = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <PageTitle title='Dashboard' />

        <div className='flex flex-col md:grid md:grid-cols-4 gap-4'>
          <TotalOrdersCard />
          <TotalOrdersCard />
          <TotalOrdersCard />
          <TotalOrdersCard />
        </div>

        <div className='lg:grid flex flex-col gap-4 lg:grid-cols-7 w-full'>
          <Card className='col-span-4'>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className='pl-2 w-full'>
              <Overview />
            </CardContent>
          </Card>
          <Card className='col-span-3 w-full'>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
