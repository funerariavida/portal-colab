import { Suspense } from 'react'

import axios from 'axios'

import LinkProps from '@/types/links'

import GenericSector from '@/components/sections/generic-sector'
import CardGroupSkeleton from '@/components/skeleton/card-group'

export default async function OperacionalPage() {
  const data: LinkProps[] = await axios({
    url: `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/links`,
    method: 'get',
  }).then((res) =>
    res.data.data.filter(
      (element: LinkProps) => element.page === 'operacional',
    ),
  )

  return (
    <div className="mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]">
      <div className="w-full bg-secondary h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Operacional</h1>
      </div>
      <Suspense fallback={<CardGroupSkeleton />}>
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
      </Suspense>
    </div>
  )
}
