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
      <div className="row-span-1 w-full gap-2 py-10 bg-secondary grid place-items-center">
        <h1 className="text-white font-bold text-heading-3 md:text-heading-2 lg:text-heading-1">
          Banco de horas
        </h1>
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
