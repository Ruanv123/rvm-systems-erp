'use client'
import { ClientSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'

export const ClientsForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ClientSchema>>({
    resolver: zodResolver(ClientSchema),
  })

  const handleCreateClient = (values: z.infer<typeof ClientSchema>) => {
    startTransition(() => {})
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateClient)}
        className='space-y-6'
      >
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <RedText text='*' />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='john doe'
                    disabled={isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <RedText text='*' />
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='email'
                    placeholder='johndoe@gmail.com'
                    disabled={isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='telefone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Telefone <RedText text='*' />
                </FormLabel>
                <FormControl>
                  <PatternFormat
                    format='(##) #####-####'
                    mask='_'
                    allowEmptyFormatting
                    {...field}
                    disabled={isPending}
                    customInput={Input}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type='submit' className='w-full' disabled={isPending}>
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}

const RedText = ({ text }: { text: string }) => {
  return <span className='text-red-500'>{text}</span>
}
