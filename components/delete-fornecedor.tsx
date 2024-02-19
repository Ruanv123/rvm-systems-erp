'use client'
import { deleteFornecedor } from '@/actions/fornecedor'
import { deleteProduct } from '@/actions/product'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

export const DeleteFornecedorTrash = ({ id }: { id: number }) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleDeleteFornecedor = () => {
    startTransition(() => {
      deleteFornecedor(id).then((data) => {
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
      <button onClick={handleDeleteFornecedor} disabled={isPending}>
        <Trash2 className='h-5 w-5 text-red-400' />
      </button>
    </>
  )
}
