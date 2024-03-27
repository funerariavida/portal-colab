import { LinkCard } from '@/components/cards/link-card'
import LinkProps from '@/types/links'

import { ComponentProps } from 'react'

import classNames from 'classnames'

type Props = ComponentProps<'section'> & {
  link: LinkProps
  hasHeader?: boolean
  cardVariant?: 'default' | 'primary' | 'secondary'
  cardOrientation?: 'vertical' | 'horizontal'
}

export default function GenericSector({
  hasHeader = false,
  cardVariant,
  cardOrientation = 'horizontal',
  link,
  ...props
}: Props) {
  return (
    <section
      className="grid min-w-full grid-rows-[max_content_auto] place-items-center gap-3"
      {...props}
    >
      {/* header */}
      {hasHeader && (
        <div
          className={classNames(
            'flex h-20 min-w-full flex-col items-center justify-center bg-background',
          )}
        >
          <h1
            className={classNames(
              'text-2xl font-bold',
              {
                'text-primary': cardVariant === 'primary',
              },
              {
                'text-secondary': cardVariant === 'secondary',
              },
              {
                'text-black': cardVariant !== 'default',
              },
            )}
          >
            {link.name}
          </h1>
        </div>
      )}

      {/* cards */}
      <div
        className={classNames(
          'flex min-w-full items-center justify-center gap-3 py-6',
          {
            'flex-row flex-wrap': cardOrientation === 'horizontal',
          },
          {
            'flex-col': cardOrientation === 'vertical',
          },
        )}
      >
        {link.infos.map((info, index) => {
          return (
            <LinkCard.Root
              key={index}
              variant={cardVariant}
              linkPath={info.linkPath}
              target="blank"
            >
              <LinkCard.Content
                variant={cardVariant}
                title={info.title}
                description={info.description}
                icon={info.icon}
              />
              <LinkCard.Icon variant={cardVariant} />
            </LinkCard.Root>
          )
        })}
      </div>
    </section>
  )
}
