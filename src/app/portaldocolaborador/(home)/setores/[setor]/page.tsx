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
    <div className="grid place-items-center min-w-full min-h-full grid-cols-1 grid-rows-[auto_auto]">
      <div className="col-span-1 min-w-full bg-secondary py-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white text-center capitalize">
          {formatedDepartment}
        </h1>
      </div>
      {data.map((link, index) => {
        return (
          <GenericSector
            hasHeader
            key={index}
            link={link}
            cardVariant="secondary"
          />
        )
      })}
    </div>
  )
}
