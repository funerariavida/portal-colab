'use client'

import { LinkCard } from '@/components/cards/link-card'
import CardGroupSkeleton from '@/components/skeleton/card-group'

import { useLinkContext } from '@/context/link'

export default function UtilsSection() {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  if (data) {
    return (
      <section className="grid w-full grid-rows-[max-content_auto] place-items-center gap-6 py-6">
        <div className="grid w-full place-items-center">
          <h3 className="text-center text-lg font-semibold text-zinc-800 lg:text-heading-3">
            {data[0].name}
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 px-2">
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
