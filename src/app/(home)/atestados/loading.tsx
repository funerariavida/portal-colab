import DataTableSkeleton from '@/components/skeleton/data-table-skeleton'
import HeaderSkeleton from '@/components/skeleton/header-skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export default function CertificateLoading() {
  return (
    <div className="grid h-screen w-full max-w-[1920px] bg-background">
      <HeaderSkeleton />
      <div className="grid min-h-full w-full grid-rows-[max-content_auto]">
        <Skeleton className="grid w-full place-items-center bg-secondary py-10" />
        {/* table */}
        <div className="container mx-auto py-10">
          <DataTableSkeleton />
        </div>
      </div>
    </div>
  )
}
