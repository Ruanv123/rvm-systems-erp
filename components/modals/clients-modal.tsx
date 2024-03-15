'use client'
import { useState } from 'react'
import { ClientsForm } from '../form/clients-form'
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
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>+ Add Client</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastrar Cliente</DialogTitle>
            <DialogDescription>Cadastre o cliente desejado</DialogDescription>
          </DialogHeader>
          <ClientsForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
