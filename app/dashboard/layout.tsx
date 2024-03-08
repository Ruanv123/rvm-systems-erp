import { Header } from '@/components/header'

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex w-full flex-col'>
      <Header />
      <main className='w-full flex-1 p-10'>{children}</main>
    </div>
  )
}

export default PrivateLayout
