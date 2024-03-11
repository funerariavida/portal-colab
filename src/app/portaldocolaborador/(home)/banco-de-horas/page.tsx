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
    <div className="flex-1 w-full grid grid-rows-[min-content_max-content]">
      <div className="row-span-1 w-full gap-2 py-3 bg-secondary grid place-items-center">
        <h1 className="text-white text-heading-2">Banco de horas</h1>
        <h2 className="text-zinc-300 text-heading-3">
          acompanhe seus lançamentos de horas extras
        </h2>
      </div>
      {isPending && <DataTableSkeleton />}

      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data.registros} />
        </div>
      )}
    </div>
  )
}
