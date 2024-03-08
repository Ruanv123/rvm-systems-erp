import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const BackLink = () => {
  return (
    <Link
      href='/'
      className={cn(
        buttonVariants({ variant: 'link' }),
        'absolute left-4 top-4 md:left-8 md:top-8',
      )}
    >
      Back
    </Link>
  )
}
