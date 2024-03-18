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
      <section className="grid grid-rows-[max-content_auto] place-items-center w-full py-6 gap-6">
        <div className="w-full grid place-items-center">
          <h3 className="text-lg text-center font-semibold lg:text-heading-3 text-zinc-800">
            {data[0].name}
          </h3>
        </div>
        <div className="px-2 flex flex-wrap items-center justify-center gap-3">
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
