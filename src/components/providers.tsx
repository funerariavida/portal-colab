'use client'

import { queryClient } from '@/configs/react-query'
import { LinkProvider } from '@/context/link'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LinkProvider>{children}</LinkProvider>
    </QueryClientProvider>
  )
}
