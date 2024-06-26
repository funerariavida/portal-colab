'use client'

// hooks
import { useSessionStorage } from '@/hooks/use-session-storage'
import { useQuery } from '@tanstack/react-query'

// types
import { SessionCollab } from '@/types/collaborators'

// actions
import getCompTime from '@/actions/get-comp-time'

// components
import DataTable from '@/components/data-table'
import CompTimeColumns from '@/components/data-table/columns/comp-time-columns'
import DataTableSkeleton from '@/components/skeleton/data-table-skeleton'

export default function BancoPage() {
  const { getItem } = useSessionStorage<SessionCollab>(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  const user = getItem()

  // fetching post data
  const { data, isPending } = useQuery({
    queryKey: ['comp-time'],
    queryFn: () => getCompTime(user?.name ?? ''),
  })

  return (
    <div className="grid w-full flex-1 grid-cols-1 grid-rows-[min-content_auto]">
      <div className="grid h-full w-full place-items-center bg-secondary py-10">
        <h1 className="text-center text-heading-3 font-bold text-white">
          Banco de horas
        </h1>
      </div>

      {!data && !isPending && (
        <div className="flex h-full w-full items-center justify-center text-center">
          <h2 className="text-base font-semibold text-zinc-400">
            Sem registro de horas!
          </h2>
        </div>
      )}

      {isPending && <DataTableSkeleton />}

      {data && (
        <div className="container mx-auto py-10">
          <DataTable
            columns={CompTimeColumns}
            data={data.registros}
            hasFilter
          />
        </div>
      )}
    </div>
  )
}
