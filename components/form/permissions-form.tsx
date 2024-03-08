'use client'

import { PermissionsSchema } from '@/schemas'
import { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Separator } from '../ui/separator'

export function PermissionsForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof PermissionsSchema>>({})

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
        <div className='space-y-6'>
          <div className='flex w-full justify-between'>
            <div>
              <h3 className='text-md font-semibold'>
                Name <span className='text-red-500'>*</span>
              </h3>
              <p className='text-xs'>Enter name form permission.</p>
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
                      placeholder='enter with name'
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
                User <span className='text-red-500'>*</span>
              </h3>
              <p className='text-xs'>Enter user to get permission.</p>
            </div>
            <FormField
              control={form.control}
              name='userId'
              render={({ field }) => (
                <FormItem>
                  <Select>
                    <FormControl className='w-[500px]'>
                      <SelectTrigger>
                        <SelectValue placeholder='select user' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={'a'} disabled>
                        select user
                      </SelectItem>
                      <SelectItem value='b'>b</SelectItem>
                    </SelectContent>
                  </Select>
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
