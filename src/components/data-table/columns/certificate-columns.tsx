'use client'

import { ColumnDef } from '@tanstack/react-table'

// types
import { CertificateProps } from '@/types/certificate'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

// icons

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
          target="blank"
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
      return <span className="flex items-center justify-center">{status}</span>
    },
  },
]

export default certificateColumns
