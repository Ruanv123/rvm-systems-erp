import { ModulesForm } from '@/components/form/modules-form'
import { PermissionsForm } from '@/components/form/permissions-form'
import { SettingsForm } from '@/components/form/settings-form'
import { PageTitle } from '@/components/page-title'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAllModulesPagination } from '@/data/modules'
import { currentRole } from '@/lib/auth'

async function SettingsPage() {
  const userRole = await currentRole()
  const modules = await getAllModulesPagination(1)

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <PageTitle title='Settings' />
      </div>
      <Tabs defaultValue='account' className=' w-full'>
        <TabsList>
          <TabsTrigger value='account'>Account</TabsTrigger>
          {userRole === 'ADMIN' && (
            <TabsTrigger value='permissions'>Permissions</TabsTrigger>
          )}
        </TabsList>
        <div>
          <TabsContent value='account'>
            <div className='rounded-md border p-5'>
              <SettingsForm />
            </div>
          </TabsContent>
          {userRole === 'ADMIN' && (
            <TabsContent value='permissions'>
              <div className='flex flex-col gap-5'>
                <div className='rounded-md border p-5'>
                  <ModulesForm />
                  <section className='rounded-md border'>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Route</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {modules?.map((mod, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{mod.id}</TableCell>
                            <TableCell>{mod.name}</TableCell>
                            <TableCell>{mod.description}</TableCell>
                            <TableCell>{mod.route}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </section>
                  <Pagination className='mt-2'>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href='#' />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#'>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href='#' />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
                <div className='rounded-md border p-5'>
                  <PermissionsForm />
                </div>
              </div>
            </TabsContent>
          )}
        </div>
      </Tabs>
    </div>
  )
}

export default SettingsPage
