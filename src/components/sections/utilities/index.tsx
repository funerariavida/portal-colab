'use client'

import { LinkCard } from '@/components/link-card'
import CardGroupSkeleton from '@/components/skeleton/card-group'

import { useLinkContext } from '@/context/link'

export default function UtilsSection() {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  if (data) {
    return (
      <section className="grid grid-rows-[min-content_max-content] items-center justify-center w-full">
        <div className="w-full flex items-center justify-center h-14">
          <h3 className="text-lg flex-1 text-center font-semibold lg:text-heading-3 text-zinc-800">
            {data[0].name}
          </h3>
        </div>
        <div className="flex-1 px-2 py-6 flex flex-wrap items-center justify-center gap-3">
          {/* Card link */}
          {data[0].infos.map((link, index) => {
            return (
              <LinkCard.Root
                key={index}
                variant="primary"
                linkPath={link.linkPath}
                target="blank"
              >
                <LinkCard.Content
                  variant="primary"
                  title={link.title}
                  description={link.description}
                  icon={link.icon}
                />
                <LinkCard.Icon variant="primary" />
              </LinkCard.Root>
            )
          })}
        </div>
      </section>
    )
  }
}
