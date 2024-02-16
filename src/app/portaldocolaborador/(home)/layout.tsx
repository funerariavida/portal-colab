import { ReactNode } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'

import Providers from '@/components/providers'
import AuthLayout from '@/layout/auth-layout'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full">
      <AuthLayout>
        <Providers>
          <Header />
          <main className="mt-20 flex w-full min-h-screen flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </Providers>
      </AuthLayout>
    </div>
  )
}
