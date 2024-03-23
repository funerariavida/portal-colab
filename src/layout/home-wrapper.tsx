'use client'

import { useQuery } from '@tanstack/react-query'
import { ReactNode, useEffect } from 'react'

import getLinks from '@/actions/get-links'
import { useLinkContext } from '@/context/link'

import { useSessionStorage } from '@/hooks/use-session-storage'

import NewsDialog from '@/components/dialog/news-dialog'
import UserPhoneDialog from '@/components/dialog/user-phone-dialog'
import HomePageLoader from '@/layout/home-page-loader'
import { SessionCollab } from '@/types/collaborators'

type Props = {
  children: ReactNode
}

export default function HomeWrapper({ children }: Props) {
  const { data, isPending } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  const { getItem } = useSessionStorage<SessionCollab>(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  const user = getItem()

  const { setLinks } = useLinkContext()

  useEffect(() => {
    if (data) {
      setLinks(data)
    }
  }, [data, setLinks])

  return (
    <div className="grid min-h-screen min-w-full place-items-center">
      {isPending ? <HomePageLoader /> : children}
      {!isPending && data && !user?.telefone && <UserPhoneDialog />}
      <NewsDialog hasTrigger={false} />
    </div>
  )
}
