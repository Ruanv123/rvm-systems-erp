'use client'
import { useState } from 'react'
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
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>+ Add Fornecedor</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastrar Fornecedor</DialogTitle>
            <DialogDescription>
              Cadastre o fornecedor escolhido
            </DialogDescription>
          </DialogHeader>
          <FornecedorForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  )
}
