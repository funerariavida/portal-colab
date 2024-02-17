'use client'

import LinkCard from '@/components/link-card'

import CardGroupSkeleton from '@/components/skeleton/card-group'

import { useLinkContext } from '@/context/link'

import SectionProps from '@/types/section'

export default function UtilsSection({ cardVariant, ...props }: SectionProps) {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  if (data) {
    return (
      <section {...props}>
        <div className="px-2 py-4 flex flex-wrap items-center justify-center w-full gap-3">
          <div className="w-full text-center">
            <h3 className="text-lg font-semibold lg:text-2xl text-secondary">
              {data[0].name}
            </h3>
          </div>
          {/* Card link */}
          {data[0].infos.map((link, index) => {
            return (
              <LinkCard
                variant={cardVariant}
                key={index}
                title={link.title}
                description={link.description}
                icon={link.icon}
                linkPath={link.linkPath}
                target="blank"
              />
            )
          })}
        </div>
      </section>
    )
  }
}
