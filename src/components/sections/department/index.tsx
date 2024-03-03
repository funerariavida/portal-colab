'use client'

import SectionProps from '@/types/section'

import { useLinkContext } from '@/context/link'

import { LinkCard } from '@/components/link-card'
import CardGroupSkeleton from '@/components/skeleton/card-group'

const DepartmentSection = ({ ...props }: SectionProps) => {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  return (
    <section {...props}>
      <h2 className="text-lg font-semibold text-secondary lg:text-2xl">
        Setores
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-4">
        {/* Card link */}
        {data[2].infos.map((link, index) => {
          return (
            <LinkCard.Root
              key={index}
              variant="secondary"
              linkPath={link.linkPath}
            >
              <LinkCard.Content
                variant="secondary"
                title={link.title}
                description={link.description}
                icon={link.icon}
              />
              <LinkCard.Icon variant="secondary" />
            </LinkCard.Root>
          )
        })}
      </div>
    </section>
  )
}

export default DepartmentSection
