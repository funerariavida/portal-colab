'use client'

// hooks
import { useSessionStorage } from '@/hooks/use-session-storage'

// actions
import getCertificates from '@/actions/get-certificates'

// data-table
import DataTable from '@/components/data-table'
import certificateColumns from '@/components/data-table/columns/certificate-columns'

// react query
import DataTableSkeleton from '@/components/skeleton/data-table-skeleton'
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

      {isPending && <DataTableSkeleton />}

      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={certificateColumns} data={data.data} />
        </div>
      )}
    </div>
  )
}
