'use client'

import { LinkProvider } from '@/context/link'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return <LinkProvider>{children}</LinkProvider>
}
