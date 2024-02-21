'use client'
import { productRegister } from '@/actions/product'
import { ProductSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

export const ProductForm = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
  })

  const handleCreateProduct = (values: z.infer<typeof ProductSchema>) => {
    startTransition(() => {
      productRegister(values).then((data) => {
        if (data?.success) {
          toast.success(data?.success)
          form.reset()
          router.refresh()
        }

        if (data?.error) {
          form.reset()
          toast.error(data?.error)
        }
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateProduct)}
        className='space-y-6'
      >
        <div className='space-y-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder='product name'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder='product description'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex items-center gap-3'>
            <FormField
              control={form.control}
              name='barCode'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bar Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='bar code'
                      maxLength={13}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='quantity'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='product quantity'
                      type='number'
                      onChange={(e) => {
                        const newValue = parseFloat(
                          e.target.value.replace(/[^\d.-]/g, '')
                        )
                        field.onChange(newValue)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-center gap-3'>
            <FormField
              control={form.control}
              name='costPrice'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Cost</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='price cost'
                      type='number'
                      onChange={(e) => {
                        const newValue = parseFloat(
                          e.target.value.replace(/[^\d.-]/g, '')
                        )
                        field.onChange(newValue)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='buyPrice'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Buy Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='buy price'
                      type='number'
                      onChange={(e) => {
                        const newValue = parseFloat(
                          e.target.value.replace(/[^\d.-]/g, '')
                        )
                        field.onChange(newValue)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='sellPrice'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sell Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='sell price'
                      type='text'
                      onChange={(e) => {
                        const newValue = parseFloat(
                          e.target.value.replace(/[^\d.-]/g, '')
                        )
                        field.onChange(newValue)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type='submit' className='w-full' disabled={isPending}>
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
