import { FornecedorForm } from '../form/fornecedor-form'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export const FornecedorModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Add Fornecedor</Button>
        </DialogTrigger>
        <DialogContent className='w-[700px]'>
          <DialogHeader>
            <DialogTitle>Cadastrar Fornecedor</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you{"'"}re
              done.
            </DialogDescription>
          </DialogHeader>
          <FornecedorForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
