'use client'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { z } from 'zod'
import { FornecedorSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { useTransition } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { TipoPessoa } from '@prisma/client'
import { Button } from '../ui/button'
import { fornecedorRegister } from '@/actions/fornecedor'
import { toast } from 'sonner'

export const FornecedorForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof FornecedorSchema>>({
    resolver: zodResolver(FornecedorSchema),
    defaultValues: {
      tipo_pessoa: 'FISICA',
    },
  })

  const handleCreateFornecedor = (values: z.infer<typeof FornecedorSchema>) => {
    startTransition(() => {
      fornecedorRegister(values).then((data) => {
        console.log(values)
        if (data?.success) {
          form.reset()
          toast.success(data?.success)
        }

        if (data?.error) {
          form.reset()
          toast.error(data?.error)
        }
      })
    })
  }

  const tipo_pessoa_watch = form.watch('tipo_pessoa')

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateFornecedor)}
        className='space-y-6'
      >
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='razao_social'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Razao Social <RedText text='*' />
                </FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='nome_fantasia'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nome Fantasia <RedText text='*' />
                </FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tipo_pessoa'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>
                  Tipo Pessoa <RedText text='*' />
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex items-center space-y-1'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem
                          value={TipoPessoa.FISICA}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Pessoa Fisica
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem
                          value={TipoPessoa.JURIDICA}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Pessoa juridica
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <div className='flex gap-2 items-center'>
            {tipo_pessoa_watch === 'FISICA' ? (
              <FormField
                control={form.control}
                name='cpf'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Cpf <RedText text='*' />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} maxLength={11} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ) : tipo_pessoa_watch === 'JURIDICA' ? (
              <FormField
                control={form.control}
                name='cnpj'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Cnpj <RedText text='*' />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} maxLength={14} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ) : null}

            <FormField
              control={form.control}
              name='cep'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Cep <RedText text='*' />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} maxLength={8} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='endereco'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Endereco <RedText text='*' />
                </FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} />
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
                  <Input {...field} disabled={isPending} />
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
                  <Input {...field} disabled={isPending} type='email' />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='site'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Site {/* <RedText text='*' /> */}</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} />
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
