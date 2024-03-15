import { OrdersForm } from '../form/orders-form'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export function OrdersModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Add Order</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Order</DialogTitle>
            <DialogDescription>Create product order</DialogDescription>
          </DialogHeader>
          <OrdersForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
