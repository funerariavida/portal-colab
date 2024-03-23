'use client'

import Link from 'next/link'

import { ColumnDef } from '@tanstack/react-table'

// types
import { CertificateProps } from '@/types/certificate'

// icons
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { CheckCircle2, ExternalLink, XCircle } from 'lucide-react'

const certificateColumns: ColumnDef<CertificateProps>[] = [
  {
    accessorKey: 'envio',
    header: 'envio',
    cell: ({ row }) => {
      const despatch: string = row.getValue('envio')
      return <span className="text-sm text-table-cell">{despatch}</span>
    },
  },
  {
    accessorKey: 'nome',
    header: 'nome',
    cell: ({ row }) => {
      const name: string = row.getValue('nome')
      return <span className="text-sm text-table-cell">{name}</span>
    },
  },
  {
    accessorKey: 'arquivos',
    header: 'arquivos',
    cell: ({ row }) => {
      const files: string = row.getValue('arquivos')
      return (
        <Link
          href={files}
          target="_blank"
          className="flex items-center hover:underline"
        >
          <span className="mr-3 text-sm text-table-cell">{files}</span>
          <ExternalLink className="h-3 w-3 text-zinc-800" />
        </Link>
      )
    },
  },
  {
    accessorKey: 'status',
    header: () => {
      return <span className="flex items-center justify-center">status</span>
    },
    cell: ({ row }) => {
      const status: string = row.getValue('status')
      return (
        <span className="flex items-center justify-center">
          {/* document accepted */}
          {status === 'Aceito' && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Documento aceito</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {/* document denied */}
          {status === 'Recusado' && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <XCircle className="h-4 w-4 text-destructive" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Documento recusado</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </span>
      )
    },
  },
]

export default certificateColumns
