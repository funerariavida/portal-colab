'use client'

import { ReactNode, useEffect } from 'react'

import getLinks from '@/actions/get-links'
import { useLinkContext } from '@/context/link'
import HomePageLoader from '@/layout/home-page-loader'
import { useQuery } from '@tanstack/react-query'

type Props = {
  children: ReactNode
}

export default function HomeWrapper({ children }: Props) {
  const { data, isPending } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  const { setLinks } = useLinkContext()

  useEffect(() => {
    if (data) {
      setLinks(data)
    }
  }, [data, setLinks])

  return (
    <div className="min-h-screen min-w-full max-w-[1920px] grid-rows-[5rem_max-content] justify-center">
      {isPending ? <HomePageLoader /> : children}
    </div>
  )
}
