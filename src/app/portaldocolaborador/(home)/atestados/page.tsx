'use client'

import getCertificates from '@/actions/get-certificates'
import { useSessionStorage } from '@/hooks/use-session-storage'
import { useQuery } from '@tanstack/react-query'

export default function CertificatePage() {
  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  const username = JSON.parse(getItem() ?? '').name

  const { data, isPending } = useQuery({
    queryKey: ['certificates'],
    queryFn: () => getCertificates(username),
  })

  return (
    <div className="grid min-h-full w-full grid-rows-[max-content_auto]">
      <div className="grid w-full place-items-center bg-secondary">
        <h1 className="py-10 text-center text-heading-1 font-bold text-white">
          Atestados e Declarações
        </h1>
      </div>

      {isPending && <p>Carregando tabela...</p>}

      <div className="container mx-auto py-10">tabela</div>
    </div>
  )
}
