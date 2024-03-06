'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CompTime } from '@/types/comp-time'
import { CheckCircle2 } from 'lucide-react'

export const columns: ColumnDef<CompTime>[] = [
  {
    accessorKey: 'data',
    header: 'Data',
  },
  {
    accessorKey: 'duração',
    header: 'Duração',
  },
  {
    accessorKey: 'motivo',
    header: 'Motivo',
  },
  {
    accessorKey: 'autorização',
    header: 'Autorização',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status')
      return status === 'Concluído' ? (
        <CheckCircle2 className="w-4 h-4 bg-success" />
      ) : (
        status
      )
    },
  },
]
