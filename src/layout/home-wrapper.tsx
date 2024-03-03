'use client'

import { ReactNode, useEffect } from 'react'

import getLinks from '@/actions/get-links'
import HomePageLoader from '@/components/home-page-loader'
import { useLinkContext } from '@/context/link'
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

    console.log(data)
  }, [data, setLinks])

  return (
    <div className="min-h-screen w-full max-w-[1920px] grid-rows-[min-content_max-content]">
      {isPending ? <HomePageLoader /> : children}
    </div>
  )
}
