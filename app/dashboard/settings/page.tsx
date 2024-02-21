import { ModulesForm } from '@/components/form/modules-form'
import { PermissionsForm } from '@/components/form/permissions-form'
import { SettingsForm } from '@/components/form/settings-form'
import { PageTitle } from '@/components/page-title'

async function SettingsPage() {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <PageTitle title='Settings' />
      </div>
      <div className='rounded-md border p-5'>
        <SettingsForm />
      </div>
      <div className='rounded-md border p-5'>
        <ModulesForm />
      </div>
      <div className='rounded-md border p-5'>
        <PermissionsForm />
      </div>
    </div>
  )
}

export default SettingsPage
