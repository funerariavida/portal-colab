'use client'

import GenericSector from '@/components/generic-sector'
import CardGroupSkeleton from '@/components/skeleton/card-group/card-group'
import { useLinkContext } from '@/context/link'

type routeParams = {
  params: {
    setor: string
  }
}

export default function AtendimentoPage({ params }: routeParams) {
  const department =
    params.setor === 'ti' ? 't.i' : params.setor.split('_').join(' ')
  let formatedDepartment = ''
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage(department)

  if (department === 'rh') {
    formatedDepartment = 'Recursos Humanos'
  } else if (department === 'dp') {
    formatedDepartment = 'Departamento Pessoal'
  } else if (department === 't.i') {
    formatedDepartment = 'Tecnologia da Informação'
  }

  if (!data) return <CardGroupSkeleton />

  return (
    <div className="mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]">
      <div className="w-full bg-secondary h-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white capitalize">
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
