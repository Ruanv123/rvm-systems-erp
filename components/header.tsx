'use client'
import {
  Box,
  Boxes,
  Contact,
  Home,
  LogOut,
  LucideIcon,
  Menu,
  Truck,
  User,
} from 'lucide-react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { ModeToggle } from './theme-toggle'
import { AccountMenu } from './account-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Button } from './ui/button'
import { logout } from '@/actions/logout'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface IHeaderLinks {
  href: string
  label: string
  icon: LucideIcon
}

const HeaderLinks: IHeaderLinks[] = [
  // {
  //   href: '/dashboard',
  //   label: 'Início',
  //   icon: Home,
  // },
  {
    href: '/dashboard/produtos',
    label: 'Produtos',
    icon: Box,
  },
  {
    href: '/dashboard/fornecedor',
    label: 'Fornecedores',
    icon: Truck,
  },
  {
    href: '/dashboard/users',
    label: 'Users',
    icon: User,
  },
  {
    href: '/dashboard/clients',
    label: 'Clients',
    icon: Contact,
  },
]

export const Header = () => {
  const pathname = usePathname()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className='sticky border-b'>
      <div className='flex h-16 items-center justify-between gap-6 px-6 sm:justify-normal'>
        <Link href='/dashboard'>
          <div className='flex select-none items-center gap-2'>
            <Boxes className='h-6 w-6' />
            <h3>Rvm Systems</h3>
          </div>
        </Link>
        <Separator orientation='vertical' className='hidden h-6 sm:visible' />
        <nav className='hidden items-center space-x-4 sm:flex lg:space-x-6'>
          {HeaderLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium text-muted-foreground',
                pathname === link.href ? 'text-sky-500' : null
              )}
            >
              <link.icon className='h-4 w-4' />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* conta e mudança de tema */}
        <div className='ml-auto  hidden items-center space-x-2 sm:flex'>
          <Separator orientation='vertical' className='h-6' />
          <ModeToggle />
          <AccountMenu />
        </div>

        {/* Menu Responsivo */}
        <div className='sm:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <Separator className='my-5' />
              <nav className='mt-5 flex flex-col items-start gap-3'>
                {HeaderLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='flex gap-1.5 font-medium text-muted-foreground'
                  >
                    <link.icon className='h-6 w-6' />
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div></div>
              <Separator className='my-5' />
              <SheetFooter className='mt-auto'>
                <Button
                  variant='outline'
                  className='justify-start gap-2 text-rose-500 dark:text-rose-400'
                  onClick={handleLogout}
                >
                  <LogOut />
                  <span className='text-base font-semibold'>Logout</span>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
