import { TipoPessoa, UserRole } from '@prisma/client'
import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required!',
  }),
  password: z.string().min(6, {
    message: 'Password is required!',
  }),
  code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
})

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  barCode: z.string(),
  costPrice: z.number(),
  buyPrice: z.number(),
  sellPrice: z.number(),
  quantity: z.number(),
})

export const SettingsSchema = z
  .object({
    name: z.optional(z.string().min(1)),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false
      }

      return true
    },
    {
      message: 'New password is required!',
      path: ['newPassword'],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false
      }
      return true
    },
    {
      message: 'Password is required!',
      path: ['password'],
    }
  )

export const FornecedorSchema = z.object({
  razao_social: z.string(),
  nome_fantasia: z.string(),
  tipo_pessoa: z.enum([TipoPessoa.FISICA, TipoPessoa.JURIDICA]),
  cnpj: z.optional(z.string()),
  cpf: z.optional(z.string()),
  endereco: z.string(),
  cep: z.string(),
  telefone: z.string(),
  email: z.string().email(),
  site: z.optional(z.string().url()),
})

export const ClientSchema = z.object({
  name: z.string(),
  email: z.string().email(),
})

const EnderecoSchema = z.object({
  rua: z.string(),
  cidade: z.string(),
  estado: z.string(),
  codigoPostal: z.string(),
  pais: z.string(),
})
