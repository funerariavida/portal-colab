'use client'

// hooks
import { useSessionStorage } from '@/hooks/use-session-storage'

// actions
import getCertificates from '@/actions/get-certificates'

// datatable
import { certificateColumns } from '@/components/data-table/certificates/columns'
import { CertificateDataTable } from '@/components/data-table/certificates/data-table'

// react query
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
        <h1 className="py-10 text-center text-heading-3 font-bold text-white">
          Atestados e Declarações
        </h1>
      </div>

      {isPending && <p>Carregando tabela...</p>}

      {data && (
        <div className="container mx-auto py-10">
          <CertificateDataTable columns={certificateColumns} data={data.data} />
        </div>
      )}
    </div>
  )
}
