'use client'

import { ReactNode, useLayoutEffect, useState } from 'react'

import { useSessionStorage } from '@/hooks/use-session-storage'
import { SessionCollab } from '@/types/collaborators'
import { useRouter } from 'next/navigation'

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { getItem } = useSessionStorage<SessionCollab>(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const { replace } = useRouter()

  useLayoutEffect(() => {
    if (!getItem()) {
      replace('/portaldocolaborador/login')
    } else setIsLoading(false)
  }, [getItem, replace])

  if (!isLoading) {
    return (
      <div className="flex min-h-full w-full items-center justify-center">
        {children}
      </div>
    )
  }
}
