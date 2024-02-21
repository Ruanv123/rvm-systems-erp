import { DeleteUser } from '@/components/delete-user'
import { PageTitle } from '@/components/page-title'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getAllUsers } from '@/data/user'

async function PageUsers() {
  const usersData = await getAllUsers()
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <PageTitle title='Usuários' />
      </div>
      <div>
        <div className='mt-10 space-y-2.5 overflow-hidden rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Email Verified</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Two Factor Enabled</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData && usersData.length ? (
                usersData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge>{user.emailVerified ? 'Yes' : 'No'}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge>{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge>{user.isTwoFactorEnabled ? 'Yes' : 'No'}</Badge>
                    </TableCell>
                    <TableCell>
                      <DeleteUser id={user.id} />
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

export default PageUsers
