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
  ArrowUpDown,
  CalendarCheck,
  CheckCircle2,
  CircleDashed,
  XCircle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
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
              <XCircle className="mx-auto h-4 w-4 text-destructive" />
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
              <AlertCircle className="h-4 w-4 text-yellow-500" />
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
              <CalendarCheck className="h-4 w-4 text-success text-zinc-400" />
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
              <CircleDashed className="h-4 w-4 animate-spin text-zinc-400" />
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

const compTimeColumns: ColumnDef<CompTime>[] = [
  {
    accessorKey: 'data',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span className="font-bold">Data</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const data: string = row.getValue('data')
      return <span className="text-sm text-table-cell">{data}</span>
    },
  },
  {
    accessorKey: 'duração',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span className="font-bold">Duração</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const duration: string = row.getValue('duração')
      return <span className="text-sm text-table-cell">{duration}</span>
    },
  },
  {
    accessorKey: 'motivo',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span className="font-bold">Motivo</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const motive: string = row.getValue('motivo')
      return <span className="text-sm text-table-cell">{motive}</span>
    },
  },
  {
    accessorKey: 'autorização',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span className="font-bold">Autorização</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const autorization: string = row.getValue('autorização')
      return autorization ? (
        <span className="text-sm capitalize text-table-cell">
          {autorization}
        </span>
      ) : (
        <span className="text-sm text-table-cell">Em análise</span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span className="flex items-center justify-center font-bold">
            Status
          </span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status: string = row.getValue('status')
      const authorization: string = row.getValue('autorização')
      return (
        <div className="mx-auto flex items-center justify-center">
          {authorization && status === ''
            ? getStatus('Pendente')
            : getStatus(status)}
        </div>
      )
    },
  },
]

export default compTimeColumns
