import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rvm Systems ERP',
  description:
    'O RVM Systems é um ERP completo e intuitivo, projetado para otimizar a gestão empresarial. Com automação avançada e análise em tempo real, simplificamos suas operações para impulsionar sua eficiência e produtividade.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </SessionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
