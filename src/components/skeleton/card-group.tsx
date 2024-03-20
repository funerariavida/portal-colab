import { Skeleton } from '@/components/ui/skeleton'

export default function CardGroupSkeleton() {
  return (
    <div className="grid place-items-center gap-3">
      <Skeleton className="h-32 w-96" />
      <Skeleton className="h-32 w-96" />
      <Skeleton className="h-32 w-96" />
    </div>
  )
}
