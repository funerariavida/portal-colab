import { Skeleton } from '../ui/skeleton'

export default function HeaderSkeleton() {
  return (
    <header className="fixed top-0 z-10 flex h-20 w-full max-w-[1920px] items-center justify-between bg-background p-3 shadow-md">
      <Skeleton className="h-full w-28 rounded-lg" />
      <div className="hidden h-full items-center justify-center gap-3 lg:flex">
        <Skeleton className="h-full w-24 rounded-lg" />
        <Skeleton className="h-full w-24 rounded-lg" />
        <Skeleton className="h-full w-24 rounded-lg" />
      </div>
      <Skeleton className="h-full w-20 lg:hidden" />
    </header>
  )
}
