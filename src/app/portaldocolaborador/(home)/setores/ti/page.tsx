'use client'

import { useLinkContext } from '@/context/link'

import GenericSector from '@/components/sections/generic-sector'
import CardGroupSkeleton from '@/components/skeleton/card-group'

export default function TiPage() {
  const { getLinkByPage } = useLinkContext()

  const data = getLinkByPage('t.i')

  if (!data) return <CardGroupSkeleton />

  return (
    <div className="mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]">
      <div className="w-full bg-secondary h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">
          Tecnologia da Informação
        </h1>
      </div>
      {data.map((link, index) => {
        return (
          <GenericSector
            key={index}
            hasHeader
            link={link}
            cardVariant="secondary"
          />
        )
      })}
    </div>
  )
}
