'use client'

import { settings } from '@/actions/settings'
import { useCurrentUser } from '@/lib/auth'
import { SettingsSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { PasswordInput } from '../password-input'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { Switch } from '../ui/switch'

export const SettingsForm = () => {
  const user = useCurrentUser()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      isTwoFactorEnabled: user?.isTwoFactorEnabled,
      role: user?.role,
    },
  })

  const handleSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values).then((data) => {
        if (data.error) {
          form.reset()
          toast.error(data.error)
        }

        if (data.success) {
          toast.success(data.success)
        }
      })
    })
  }

  const handleCancel = () => {
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='flex justify-between'>
          <h1 className='font-semibold text-lg'>General</h1>
          <div className='flex gap-2'>
            <Button variant='secondary' type='button' onClick={handleCancel}>
              Cancel
            </Button>
            <Button type='submit' disabled={isPending}>
              Save Changes
            </Button>
          </div>
        </div>
        <Separator className='my-3' />
        <div className='space-y-6'>
          <div className='flex w-full justify-between'>
            <div>
              <h3 className='text-md font-semibold'>
                Your Name <span className='text-red-500'>*</span>
              </h3>
              <p className='text-xs'>
                Enter your full name without titles or special characters.
              </p>
            </div>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      className='w-[500px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className='my-3' />
          <div className='flex w-full justify-between'>
            <div>
              <h3 className='text-md font-semibold'>
                Your Email <span className='text-red-500'>*</span>
              </h3>
              <p className='text-xs'>Please enter your email address.</p>
            </div>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type='email'
                      className='w-[500px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className='my-3' />
          <div className='flex w-full justify-between'>
            <div>
              <h3 className='text-md font-semibold'>
                Your Password <span className='text-red-500'>*</span>
              </h3>
              <p className='text-xs'>Enter your password.</p>
            </div>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      disabled={isPending}
                      placeholder='******'
                      className='w-[500px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className='my-3' />
          <div className='flex w-full justify-between'>
            <div>
              <h3 className='text-md font-semibold'>
                Your New Password <span className='text-red-500'>*</span>
              </h3>
              <p className='text-xs'>Enter your new password.</p>
            </div>
            <FormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      disabled={isPending}
                      placeholder='******'
                      className='w-[500px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className='my-3' />
          <div className='flex w-full justify-between'>
            <div>
              <h3 className='text-md font-semibold'>
                Two Factor Authentication
              </h3>
              <p className='text-xs'>
                Enable two factor authentication for your account
              </p>
            </div>
            <FormField
              control={form.control}
              name='isTwoFactorEnabled'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Switch
                      disabled={isPending}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}
