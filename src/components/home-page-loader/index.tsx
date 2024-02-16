import { Skeleton } from '@/components/ui/skeleton'

const HomePageLoader = () => {
  return (
    <div className="h-screen w-full bg-background">
      <header className="fixed top-0 z-10 flex items-center justify-between w-full h-20 p-3 shadow-md bg-background">
        <Skeleton className="h-full w-28 rounded-lg" />
        <div className="hidden lg:flex h-full items-center justify-center gap-3">
          <Skeleton className="h-full w-24 rounded-lg" />
          <Skeleton className="h-full w-24 rounded-lg" />
          <Skeleton className="h-full w-24 rounded-lg" />
        </div>
        <Skeleton className="lg:hidden h-full w-20" />
      </header>
      <main className="h-full bg-background w-full flex flex-col items-center justify-between">
        <div className="w-full">
          <Skeleton className="h-32 md:h-40 w-full" />
        </div>
        <div className="py-5 gap-3 flex items-center justify-center flex-wrap">
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

export default HomePageLoader
