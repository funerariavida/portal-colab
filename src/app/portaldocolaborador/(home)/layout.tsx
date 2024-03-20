import { ReactNode } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'

import AuthLayout from '@/layout/auth-layout'
import HomeWrapper from '@/layout/home-wrapper'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen min-w-full max-w-screen-desktop-xl flex-col items-center justify-center">
      <AuthLayout>
        <HomeWrapper>
          <Header />
          <main className="mt-20 flex min-h-screen min-w-full flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </HomeWrapper>
      </AuthLayout>
    </div>
  )
}
