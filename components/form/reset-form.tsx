'use client'
import { useForm } from 'react-hook-form'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import { useTransition } from 'react'
import { CardWrapper } from '../card-wrapper'

export const ResetForm = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm({})

  const handleSubmitResetEmail = () => {
    startTransition(() => {})
  }

  return (
    <CardWrapper
      headerTitle='Forgot Password'
      headerLabel='Forgot your Password?'
      backButtonlabel='Back to login'
      backButtonHref='/auth/login'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitResetEmail)}>
          <div></div>
          <Button type='submit' className='w-full' disabled={isPending}>
            Send reset email
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
