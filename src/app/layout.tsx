import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Toaster } from '@/components/ui/toaster'

import Providers from '@/components/providers'

const inter = Inter({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portal do Colaborador',
  description: 'Site para o portal de colaboradores',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="min-h-screen w-full grid place-items-center">
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  )
}
