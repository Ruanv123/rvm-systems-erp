import { Header } from '@/components/header'

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <main className='flex-1 p-10 w-full'>{children}</main>
    </div>
  )
}

export default PrivateLayout
