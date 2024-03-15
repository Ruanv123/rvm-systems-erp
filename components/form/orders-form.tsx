'use client'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { z } from 'zod'
import { Input } from '../ui/input'

export function OrdersForm() {
  const form = useForm({})
  return (
    <Form {...form}>
      <form className='space-y-6'>
        <div className='space-y-20'>
          <FormField
            control={form.control}
            name=''
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}
