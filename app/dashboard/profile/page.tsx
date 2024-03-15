import { PageTitle } from '@/components/page-title'

const ProfilePage = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <PageTitle title='Profile' />
      </div>
      <section className='rounded-lg border p-5'></section>
    </div>
  )
}

export default ProfilePage
