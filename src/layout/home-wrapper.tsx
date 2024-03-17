'use client'

import { useQuery } from '@tanstack/react-query'
import { ReactNode, useEffect } from 'react'

import getLinks from '@/actions/get-links'
import UserPhoneDialog from '@/components/user-phone-dialog'
import { useLinkContext } from '@/context/link'
import { useSessionStorage } from '@/hooks/use-session-storage'
import HomePageLoader from '@/layout/home-page-loader'

type Props = {
  children: ReactNode
}

export default function HomeWrapper({ children }: Props) {
  const { data, isPending } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  const userPhone = JSON.parse(getItem() ?? '').telefone

  const { setLinks } = useLinkContext()

  useEffect(() => {
    if (data) {
      setLinks(data)
    }
  }, [data, setLinks])

  return (
    <div className="min-h-screen min-w-full max-w-[1920px] grid-rows-[5rem_max-content] justify-center">
      {isPending ? <HomePageLoader /> : children}
      {!isPending && data && !userPhone && <UserPhoneDialog />}
    </div>
  )
}
