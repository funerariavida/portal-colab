'use client'

import LinkCard from '@/components/link-card'
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
      className="mx-auto grid w-full max-w-[1440px] grid-rows-[min_content_max-content] gap-3"
      {...props}
    >
      {/* header */}
      {hasHeader && (
        <div
          className={classNames(
            'w-full h-20 bg-background flex flex-col items-center justify-center',
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
          'flex-1 flex items-center justify-center gap-3 p-6',
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
            <LinkCard
              key={index}
              title={info.title}
              variant={cardVariant}
              description={info.description}
              icon={info.icon}
              linkPath={info.linkPath}
            />
          )
        })}
      </div>
    </section>
  )
}
