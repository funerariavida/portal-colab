'use client'

import { ColumnDef } from '@tanstack/react-table'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// types
import { CompTime } from '@/types/comp-time'

// icons
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  CircleDashed,
  XCircle,
} from 'lucide-react'

import { ReactNode } from 'react'

function getStatus(status: string): ReactNode {
  switch (status) {
    case 'Concluído':
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CheckCircle2 className="h-4 w-4 text-success" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Lançamento concluído</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
      break

    case 'Negado':
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <XCircle className="h-4 w-4 text-destructive mx-auto" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Lançamento negado!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
      break

    case 'Pendente':
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircle className="h-4 w-4 text-yellow-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Agendamento pendente</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
      break

    case 'Agendado':
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CalendarCheck className="h-4 w-4 text-zinc-400 text-success" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Agendamento realizado!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
      break

    default:
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CircleDashed className="h-4 w-4 text-zinc-400 animate-spin" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Lançamento em análise!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
      break
  }
}

export const columns: ColumnDef<CompTime>[] = [
  {
    accessorKey: 'data',
    header: 'Data',
    cell: ({ row }) => {
      const data: string = row.getValue('data')
      return <span className="text-sm text-table-cell">{data}</span>
    },
  },
  {
    accessorKey: 'duração',
    header: 'Duração',
    cell: ({ row }) => {
      const duration: string = row.getValue('duração')
      return <span className="text-sm text-table-cell">{duration}</span>
    },
  },
  {
    accessorKey: 'motivo',
    header: 'Motivo',
    cell: ({ row }) => {
      const motive: string = row.getValue('motivo')
      return <span className="text-sm text-table-cell">{motive}</span>
    },
  },
  {
    accessorKey: 'autorização',
    header: 'Autorização',
    cell: ({ row }) => {
      const autorization: string = row.getValue('autorização')
      return autorization ? (
        <span className="capitalize text-sm text-table-cell">
          {autorization}
        </span>
      ) : (
        <span className="text-sm flex align-items justify-center text-table-cell">
          -
        </span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: string = row.getValue('status')
      return (
        <div className="mx-auto flex items-center justify-center">
          {getStatus(status)}
        </div>
      )
    },
  },
]
