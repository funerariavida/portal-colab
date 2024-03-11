import { Skeleton } from '@/components/ui/skeleton'

export default function CardGroupSkeleton() {
  return (
    <div className="grid place-items-center gap-3">
      <Skeleton className="w-96 h-32" />
      <Skeleton className="w-96 h-32" />
      <Skeleton className="w-96 h-32" />
    </div>
  )
}
