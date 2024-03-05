import { ReactNode } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'

import AuthLayout from '@/layout/auth-layout'
import HomeWrapper from '@/layout/home-wrapper'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full items-center mx-auto justify-center">
      <AuthLayout>
        <HomeWrapper>
          <Header />
          <main className="flex mt-20 w-full min-h-screen flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </HomeWrapper>
      </AuthLayout>
    </div>
  )
}
