import { LinkCard } from '@/components/link-card'
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
      className="grid place-items-center min-w-full grid-rows-[max_content_auto] gap-3"
      {...props}
    >
      {/* header */}
      {hasHeader && (
        <div
          className={classNames(
            'min-w-full h-20 bg-background flex flex-col items-center justify-center',
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
          'min-w-full flex items-center justify-center gap-3 py-6',
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
