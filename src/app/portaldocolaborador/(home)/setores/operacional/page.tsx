'use client'

import GenericSector from '@/components/sections/generic-sector'

import CardGroupSkeleton from '@/components/skeleton/card-group'

import { useLinkContext } from '@/context/link'

export default function OperacionalPage() {
  const { getLinkByPage } = useLinkContext()

  const data = getLinkByPage('operacional')

  if (!data) return <CardGroupSkeleton />

  return (
    <div className="mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]">
      <div className="w-full bg-secondary h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Operacional</h1>
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
