'use client'
import { deleteProduct } from '@/actions/product'
import { deleteUser } from '@/actions/user'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

export const DeleteUser = ({ id }: { id: string }) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubmitDeleteUser = () => {
    startTransition(() => {
      deleteUser(id).then((data) => {
        if (data?.success) {
          toast.success(data?.success)
          router.refresh()
        }

        if (data?.error) {
          toast.error(data?.error)
        }
      })
    })
  }
  return (
    <>
      <button onClick={handleSubmitDeleteUser} disabled={isPending}>
        <Trash2 className='h-5 w-5 text-red-400' />
      </button>
    </>
  )
}
