'use client'
import { useForm } from 'react-hook-form'
import { Form, FormField } from '../ui/form'
import { Button } from '../ui/button'
import { useTransition } from 'react'
import { Separator } from '../ui/separator'
import { getAllModules } from '@/data/modules'

export function ModulesForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm({})

  function handleSubmit() {}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='mt-6'>
        <div className='flex justify-between'>
          <h1 className='text-lg font-semibold'>Modules</h1>
          <div className='flex gap-2'>
            <Button variant='secondary' type='button'>
              Cancel
            </Button>
            <Button type='submit' disabled={isPending}>
              Save Changes
            </Button>
          </div>
        </div>
        <Separator className='my-3' />
        <div className='space-y-6'></div>
      </form>
    </Form>
  )
}
