'use client'
import { logout } from '@/actions/logout'
import { useCurrentUser } from '@/lib/auth'
import {
  ChevronDown,
  CreditCard,
  LogOut,
  LucideIcon,
  Settings,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

interface IAccountLinks {
  href: string
  label: string
  icon: LucideIcon
}

const AccountLinks: IAccountLinks[] = [
  {
    href: '/dashboard/profile',
    label: 'Profile',
    icon: User,
  },
  {
    href: '/dashboard/billing',
    label: 'Billing',
    icon: CreditCard,
  },
  {
    href: '/dashboard/settings',
    label: 'Settings',
    icon: Settings,
  },
]

export const AccountMenu = () => {
  const user = useCurrentUser()

  const handleLogout = () => {
    logout()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex select-none items-center gap-2'
        >
          {user ? user.name : <Skeleton className='h-4 w-40' />}
          <ChevronDown className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='flex flex-col'>
          {user ? (
            <>
              {user.name}
              <span className='text-xs font-normal text-muted-foreground'>
                {user.email}
              </span>
            </>
          ) : (
            <div className='space-y-1.5'>
              <Skeleton className='h-4 w-32' />
              <Skeleton className='h-3 w-24' />
            </div>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {AccountLinks.map((current) => (
            <DropdownMenuItem key={current.href} asChild>
              <Link href={current.href} className='cursor-pointer'>
                <current.icon className='mr-2 h-4 w-4' />
                <span>{current.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />
          <DropdownMenuItem
            asChild
            className='text-rose-500 dark:text-rose-400'
          >
            <button className='w-full cursor-pointer' onClick={handleLogout}>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
