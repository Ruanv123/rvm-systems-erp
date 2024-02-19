import { SettingsForm } from '@/components/form/settings-form'
import { PageTitle } from '@/components/page-title'

const SettingsPage = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <PageTitle title='Settings' />
      </div>
      <div className='border p-5 rounded-md'>
        <SettingsForm />
      </div>
    </div>
  )
}

export default SettingsPage
