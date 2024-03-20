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
    <div className="grid w-full flex-1 grid-cols-1 grid-rows-[min-content_auto]">
      <div className="grid h-full w-full place-items-center bg-secondary py-10">
        <h1 className="text-center text-heading-3 font-bold text-white md:text-heading-2 lg:text-heading-1">
          Banco de horas
        </h1>
      </div>

      {isPending && <DataTableSkeleton />}

      {!data && !isPending && (
        <div className="flex h-full w-full items-center justify-center text-center">
          <h2 className="text-base font-semibold text-zinc-400">
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
