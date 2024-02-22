'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'

import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '@/components/theme-toggle'
import { Menu } from 'lucide-react'

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'Features',
  },
  {
    href: '#testimonials',
    label: 'Testimonials',
  },
  {
    href: '#pricing',
    label: 'Pricing',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className='fixed top-0 z-50 w-full border-b-[1px] bg-white dark:border-b dark:bg-background'>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container flex h-14 w-screen justify-between px-4 '>
          <NavigationMenuItem className='flex font-bold'>
            <Link href='/' className='ml-2 flex text-xl font-bold'>
              {/* Logo */}
              Rvm Systems
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className='flex md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className='px-2'>
                <span className='sr-only'>Menu Icon</span>
                <Menu
                  className='flex h-5 w-5 md:hidden'
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side={'right'}>
                <SheetHeader>
                  <SheetTitle className='text-xl font-bold'>
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className='mt-4 flex flex-col items-center justify-center gap-2'>
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href='/login'
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'secondary',
                    })}`}
                  >
                    Login
                  </Link>
                  <Link
                    href='/register'
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'default',
                    })}`}
                  >
                    Register
                  </Link>

                  <ModeToggle />
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className='hidden gap-2 md:flex'>
            {routeList.map((route: RouteProps, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className='hidden gap-2 md:flex'>
            <Link
              href='/auth/login'
              className={`border ${buttonVariants({ variant: 'secondary' })}`}
            >
              Login
            </Link>
            <Link
              href='/auth/register'
              className={` ${buttonVariants({ variant: 'default' })}`}
            >
              Register
            </Link>

            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
