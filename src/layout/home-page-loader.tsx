import { Skeleton } from '@/components/ui/skeleton'

export default function HomePageLoader() {
  return (
    <div className="h-screen w-full max-w-[1920px] grid bg-background">
      <header className="fixed top-0 z-10 flex items-center justify-between w-full max-w-[1920px] h-20 p-3 shadow-md bg-background">
        <Skeleton className="h-full w-28 rounded-lg" />
        <div className="hidden lg:flex h-full items-center justify-center gap-3">
          <Skeleton className="h-full w-24 rounded-lg" />
          <Skeleton className="h-full w-24 rounded-lg" />
          <Skeleton className="h-full w-24 rounded-lg" />
        </div>
        <Skeleton className="lg:hidden h-full w-20" />
      </header>
      <main className="mt-20 bg-background w-full grid grid-cols-1 grid-rows-[max-content_auto_auto_auto] place-items-center">
        <div className="col-span-1 w-full h-20 grid place-items-center">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="py-6 gap-4 flex items-center justify-center flex-wrap">
          <Skeleton className="h-32 md:h-40 w-96" />
          <Skeleton className="h-32 md:h-40 w-96" />
          <Skeleton className="h-32 md:h-40 w-96" />
          <Skeleton className="h-32 md:h-40 w-96" />
          <Skeleton className="h-32 md:h-40 w-96" />
          <Skeleton className="h-32 md:h-40 w-96" />
        </div>
      </main>
    </div>
  )
}
