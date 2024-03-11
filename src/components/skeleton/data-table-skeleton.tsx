import { Skeleton } from '../ui/skeleton'

export default function DataTableSkeleton() {
  return (
    <div className="container h-full row-span-1 col-span-1 mx-auto">
      <table className="w-full h-full rounded-md border">
        <thead className="grid grid-cols-5 grid-rows-1 border-b">
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="flex-1 h-5" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="flex-1 h-5" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="flex-1 h-5" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="flex-1 h-5" />
          </th>
          <th className="col-span-1 row-span-1 flex items-center justify-center p-2">
            <Skeleton className="flex-1 h-5" />
          </th>
        </thead>
        <tbody>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
          </tr>
          <tr className="grid grid-cols-5 items-center gap-2 p-2">
            <td className="col-auto items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
            <td className="items-center justify-center">
              <Skeleton className="flex-1 h-5" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
