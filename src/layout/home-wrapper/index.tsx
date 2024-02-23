'use client'

import { ReactNode, useEffect } from 'react'

import { useLinkContext } from '@/context/link'
import useLinks from '@/hooks/use-links'

import HomePageLoader from '@/components/home-page-loader'

type Props = {
  children: ReactNode
}

export default function HomeWrapper({ children }: Props) {
  const { data, isLoading } = useLinks()
  const { setLinks } = useLinkContext()

  useEffect(() => {
    if (data) {
      setLinks(data)
    }
  }, [data, setLinks])

  if (isLoading) return <HomePageLoader />

  if (data && !isLoading) {
    return <div className="min-h-screen w-full">{children}</div>
  }
}
