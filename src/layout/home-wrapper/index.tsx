'use client'

import HomePageLoader from '@/components/home-page-loader'
import { useLinkContext } from '@/context/link'
import useLinks from '@/hooks/use-links'
import { ReactNode, useEffect } from 'react'

type Props = {
  children: ReactNode
}

export default function HomeWrapper({ children }: Props) {
  const { data, isLoading } = useLinks()
  const { links, setLinks } = useLinkContext()

  useEffect(() => {
    if (data) {
      setLinks(data)
    }
  }, [data, links, setLinks])

  if (isLoading) return <HomePageLoader />

  if (data && !isLoading) {
    return <div className="min-h-screen w-full">{children}</div>
  }
}
