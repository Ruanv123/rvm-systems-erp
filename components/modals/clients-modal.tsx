import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export const ClientsModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Add Client</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastrar Cliente</DialogTitle>
            <DialogDescription>Cadastre o cliente desejado</DialogDescription>
          </DialogHeader>
          {/* <ClientsForm /> */}
        </DialogContent>
      </Dialog>
    </>
  )
}
