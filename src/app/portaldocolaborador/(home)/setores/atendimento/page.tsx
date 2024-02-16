'use client'

import { useLinkContext } from '@/context/link'

export default function AtendimentoPage() {
  const { links, getLinkByPage } = useLinkContext()

  const data = getLinkByPage('atendimento')

  console.log(links)

  return (
    <div className="mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]">
      <div className="w-full bg-secondary h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Atendimento</h1>
      </div>
      {/* <Suspense fallback={<CardGroupSkeleton />}>
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
      </Suspense> */}
    </div>
  )
}
