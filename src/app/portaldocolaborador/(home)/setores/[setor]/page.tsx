'use client'

import GenericSector from '@/components/generic-sector'
import CardGroupSkeleton from '@/components/skeleton/card-group'

import { useLinkContext } from '@/context/link'

type routeParams = {
  params: {
    setor: string
  }
}

function formatDepartment(department: string): string {
  switch (department) {
    case 'rh': {
      return 'Recursos Humanos'
      break
    }
    case 'dp': {
      return 'Departamento Pessoal'
      break
    }
    case 't.i': {
      return 'Tecnologia da Informação'
      break
    }
    case 'assistencia': {
      return 'Assistência Familiar'
      break
    }
    case 'cobranca': {
      return 'Cobrança'
      break
    }
    case 'cpd': {
      return 'Centro de Processamento de Dados'
      break
    }
    default: {
      return department
      break
    }
  }
}

export default function AtendimentoPage({ params }: routeParams) {
  const department =
    params.setor === 'ti' ? 't.i' : params.setor.split('_').join(' ')
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage(department)

  const formatedDepartment = formatDepartment(department)

  if (!data) return <CardGroupSkeleton />

  return (
    <div className="grid min-h-full min-w-full grid-cols-1 grid-rows-[auto_auto] place-items-center">
      <div className="col-span-1 flex min-w-full flex-col items-center justify-center bg-secondary py-10">
        <h1 className="text-center text-2xl font-bold capitalize text-white">
          {formatedDepartment}
        </h1>
      </div>
      {data.map((link, index) => {
        return (
          <GenericSector
            hasHeader
            key={index}
            link={link}
            variant="secondary"
          />
        )
      })}
    </div>
  )
}
