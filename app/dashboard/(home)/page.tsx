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
import { getModulesByUser } from '@/data/modules'
import Link from 'next/link'

async function DashboardPage() {
  const modules = await getModulesByUser()
  return (
    <>
      <div className='flex flex-col gap-4'>
        <PageTitle title='Dashboard' />

        {modules && modules.length > 0 && (
          <>
            <p>Modulos:</p>
            <div className='flex items-center gap-2'>
              {modules.map((module) => {
                return (
                  <Link href={`/dashboard/${module.route}`} key={module.id}>
                    <div className='flex w-52 items-center justify-center rounded-md border p-5'>
                      <h1>{module.name}</h1>
                    </div>
                  </Link>
                )
              })}
            </div>
          </>
        )}

        <div className='flex flex-col gap-4 md:grid md:grid-cols-4'>
          <TotalOrdersCard />
          <TotalOrdersCard />
          <TotalOrdersCard />
          <TotalOrdersCard />
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
