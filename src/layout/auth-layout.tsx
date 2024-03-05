'use client'

import { ReactNode, useLayoutEffect, useState } from 'react'

import { useSessionStorage } from '@/hooks/use-session-storage'
import { useRouter } from 'next/navigation'

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const { push } = useRouter()

  useLayoutEffect(() => {
    if (!getItem()) {
      push('/portaldocolaborador/login')
    } else setIsLoading(false)
  }, [getItem, push])

  if (!isLoading) {
    return (
      <div className="min-h-screen w-full items-center justify-center max-w-[1920px]">
        {children}
      </div>
    )
  }
}
