'use client'

import { ReactNode, useLayoutEffect, useState } from 'react'

import Footer from '@/components/footer'
import FullPageLoader from '@/components/full-page-loader'
import Header from '@/components/header'

import { useCollabContext } from '@/context/collaborator'
import { useSessionStorage } from '@/hooks/use-session-storage'
import { useRouter } from 'next/navigation'

export default function HomeLayout({ children }: { children: ReactNode }) {
  const [isLoading, SetIsLoading] = useState<boolean>(true)
  const { collab } = useCollabContext()
  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const { push } = useRouter()

  useLayoutEffect(() => {
    if (!getItem() && !collab) {
      push('/portaldocolaborador/login')
    }
    setTimeout(() => {
      SetIsLoading(false)
    }, 2000)
  })

  if (isLoading) {
    return <FullPageLoader />
  }

  if (!isLoading) {
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
