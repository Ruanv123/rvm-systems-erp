'use client'

import { ModulesForm } from '@/components/form/modules-form'
import { PermissionsForm } from '@/components/form/permissions-form'
import { SettingsForm } from '@/components/form/settings-form'
import { PageTitle } from '@/components/page-title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCurrentRole } from '@/lib/auth'

function SettingsPage() {
  const userRole = useCurrentRole()

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
