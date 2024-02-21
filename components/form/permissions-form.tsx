'use client'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Separator } from '../ui/separator'

export function PermissionsForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm({})

  function handleSubmit() {}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='mt-6'>
        <div className='flex justify-between'>
          <h1 className='text-lg font-semibold'>Permissions</h1>
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
