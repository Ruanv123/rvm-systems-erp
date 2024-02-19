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
    <header className='fixed border-b-[1px] top-0 z-50 w-full bg-white dark:border-b-slate-700 dark:bg-background'>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container h-14 px-4 w-screen flex justify-between '>
          <NavigationMenuItem className='font-bold flex'>
            <Link href='/' className='ml-2 font-bold text-xl flex'>
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
                  className='flex md:hidden h-5 w-5'
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side={'right'}>
                <SheetHeader>
                  <SheetTitle className='font-bold text-xl'>
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col justify-center items-center gap-2 mt-4'>
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
          <nav className='hidden md:flex gap-2'>
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

          <div className='hidden md:flex gap-2'>
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
