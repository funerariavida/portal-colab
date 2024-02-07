'use client'

import { ReactNode, useLayoutEffect, useState } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'

import HomePageLoader from '@/components/home-page-loader'

import { useSessionStorage } from '@/hooks/use-session-storage'
import { useRouter } from 'next/navigation'

export default function HomeLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const { push } = useRouter()

  useLayoutEffect(() => {
    if (!getItem()) {
      push('/portaldocolaborador/login')
    }
    else setIsLoading(false)
    
  }, [])

  if (isLoading) {
    return <HomePageLoader />
  }

  if(!isLoading) {
    return (
      <div className="h-screen w-full">
          <Header />
          <main className="mt-20 flex w-full min-h-screen flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
      </div>
    )
  }
}
