'use client'

import getCompTime from '@/actions/get-comp-time'
import { columns } from '@/components/data-table/comp-time/columns'
import { DataTable } from '@/components/data-table/comp-time/data-table'
import DataTableSkeleton from '@/components/skeleton/data-table-skeleton'

import { useSessionStorage } from '@/hooks/use-session-storage'

import { useQuery } from '@tanstack/react-query'

export default function BancoPage() {
  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const user = JSON.parse(getItem() ?? '')

  // fetching post data
  const { data, isPending } = useQuery({
    queryKey: ['comp-time'],
    queryFn: () => getCompTime(user?.name),
  })

  return (
    <div className="flex-1 w-full grid grid-rows-[80px_1fr] grid-cols-1">
      <div className="w-full h-full bg-secondary grid place-items-center">
        <h1 className="text-white font-bold text-heading-3 md:text-heading-2 lg:text-heading-1">
          Banco de horas
        </h1>
      </div>
      {isPending && <DataTableSkeleton />}

      {!data && !isPending && (
        <div className="flex items-center justify-center text-center h-full w-full">
          <h2 className="text-base text-zinc-400 font-semibold">
            Sem registro de horas!
          </h2>
        </div>
      )}

      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data.registros} />
        </div>
      )}
    </div>
  )
}
