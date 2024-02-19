'use client'
import { deleteProduct } from '@/actions/product'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

export const DeleteProductTrash = ({ id }: { id: number }) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubmitDeleteProduct = () => {
    startTransition(() => {
      deleteProduct(id).then((data) => {
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
      <button onClick={handleSubmitDeleteProduct} disabled={isPending}>
        <Trash2 className='h-5 w-5 text-red-400' />
      </button>
    </>
  )
}
