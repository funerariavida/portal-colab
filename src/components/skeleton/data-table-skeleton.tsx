import { Skeleton } from '../ui/skeleton'

export default function DataTableSkeleton() {
  return (
    <div className="container mx-auto py-10">
      <table className="w-full rounded-md border">
        <thead className="grid grid-cols-5 grid-rows-1 border-b">
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="h-8 flex-1" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="h-8 flex-1" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="h-8 flex-1" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="h-8 flex-1" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="h-8 flex-1" />
          </th>
        </thead>
        <tbody>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="h-5 flex-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
