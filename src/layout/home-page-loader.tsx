import { Skeleton } from '@/components/ui/skeleton'

export default function HomePageLoader() {
  return (
    <div className="grid h-screen w-full max-w-[1920px] bg-background">
      <header className="fixed top-0 z-10 flex h-20 w-full max-w-[1920px] items-center justify-between bg-background p-3 shadow-md">
        <Skeleton className="h-full w-28 rounded-lg" />
        <div className="hidden h-full items-center justify-center gap-3 lg:flex">
          <Skeleton className="h-full w-24 rounded-lg" />
          <Skeleton className="h-full w-24 rounded-lg" />
          <Skeleton className="h-full w-24 rounded-lg" />
        </div>
        <Skeleton className="h-full w-20 lg:hidden" />
      </header>
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
