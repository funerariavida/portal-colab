import HeaderSkeleton from '@/components/skeleton/header-skeleton'

import { Skeleton } from '@/components/ui/skeleton'

export default function HomePageLoader() {
  return (
    <div className="grid h-screen w-full max-w-[1920px] bg-background">
      <HeaderSkeleton />
      <main className="mt-20 grid w-full grid-cols-1 grid-rows-[max-content_auto_auto_auto] place-items-center bg-background">
        <div className="col-span-1 grid h-20 w-full place-items-center">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 py-6">
          <Skeleton className="h-32 w-96 md:h-40" />
          <Skeleton className="h-32 w-96 md:h-40" />
          <Skeleton className="h-32 w-96 md:h-40" />
          <Skeleton className="h-32 w-96 md:h-40" />
          <Skeleton className="h-32 w-96 md:h-40" />
          <Skeleton className="h-32 w-96 md:h-40" />
        </div>
      </main>
    </div>
  )
}
