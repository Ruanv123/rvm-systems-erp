import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { number, string } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
