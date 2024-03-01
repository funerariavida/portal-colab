'use client'

import { ReactNode, Suspense, useEffect } from 'react'

import HomePageLoader from '@/components/home-page-loader'
import { useLinkContext } from '@/context/link'
import useLinks from '@/hooks/use-links'

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

  // if (isLoading) return <HomePageLoader />

  return (
    <div className="min-h-screen w-full">
      <Suspense fallback={<HomePageLoader />}>{children}</Suspense>
    </div>
  )
}
