import { ReactNode } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'

import AuthLayout from '@/layout/auth-layout'
import HomeWrapper from '@/layout/home-wrapper'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full">
      <AuthLayout>
        <HomeWrapper>
          <Header />
          <main className="mt-20 flex w-full min-h-screen flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </HomeWrapper>
      </AuthLayout>
    </div>
  )
}
