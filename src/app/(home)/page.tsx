'use client'

// context
import { useLinkContext } from '@/context/link'

// components
import GenericSector from '@/components/generic-sector'
import CardGroupSkeleton from '@/components/skeleton/card-group'

export default function PortalPage() {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  return (
    <div className="grid min-h-screen min-w-full grid-cols-1">
      {/* title */}
      <div className="cols-span-1 grid w-full place-items-center bg-primary py-10">
        <h1 className="text-heading-3 font-bold text-white md:text-heading-2 lg:text-heading-1">
          Portal do Colaborador
        </h1>
      </div>

      {!data && <CardGroupSkeleton />}

      {data &&
        data.map((page, index) => {
          return (
            <GenericSector
              key={index}
              link={page}
              variant={page.variant ?? 'primary'}
              hasHeader
            />
          )
        })}
    </div>
  )
}
