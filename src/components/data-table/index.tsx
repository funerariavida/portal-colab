'use client'

// react
import { useEffect, useState } from 'react'

// tanstack
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

// components
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import DropdownRadioMenu from '../dropdown-menu/dropdown-radio-menu'

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  hasFilter?: boolean
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  hasFilter,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [filterArray, setFilterArray] = useState<string[]>([])
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    const aux: any = []
    const filterAux: any = []
    columns.map((column) => aux.push(column))
    aux.map(
      (column: { accessorKey: string }) =>
        column.accessorKey !== 'status' && filterAux.push(column.accessorKey),
    )

    setFilterArray(filterAux)
  }, [columns])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      {/* Filter input */}
      {hasFilter && (
        <div className="flex items-center gap-5 py-4">
          <Input
            className="max-w-sm"
            placeholder={
              filter
                ? `Filtrar ${filter.toLowerCase()}...`
                : 'Escolha seu filtro'
            }
            disabled={!filter}
            value={
              (table
                .getColumn(filter.toLowerCase())
                ?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table
                .getColumn(filter.toLowerCase())
                ?.setFilterValue(event.target.value)
            }
          />
          <DropdownRadioMenu
            filterCollumns={filterArray}
            selectedOption={filter}
            setSelectedOption={setFilter}
          />
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="text-base font-bold capitalize text-table-header"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sem resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
