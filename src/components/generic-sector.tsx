import { LinkCard } from '@/components/link-card'
import LinkProps from '@/types/links'

import { ComponentProps } from 'react'

import cn from 'classnames'

type Props = ComponentProps<'section'> & {
  link: LinkProps
  hasHeader?: boolean
  variant: 'default-primary' | 'default-secondary' | 'primary' | 'secondary'
  cardOrientation?: 'vertical' | 'horizontal'
}

const variantSchema = {
  default: {
    primary: {
      section: 'bg-primary',
      header: 'text-background',
      card: 'default',
      text: 'primary',
      icon: 'primary',
    },
    secondary: {
      section: 'bg-secondary',
      header: 'text-background',
      card: 'default',
      text: 'secondary',
      icon: 'secondary',
    },
  },
  primary: {
    section: 'bg-background',
    header: 'text-foreground',
    card: 'primary',
    text: 'default',
    icon: 'default',
  },
  secondary: {
    section: 'bg-background',
    header: 'text-foreground',
    card: 'secondary',
    text: 'default',
    icon: 'default',
  },
}

function getVariantSchemma(
  variant: 'default-primary' | 'default-secondary' | 'primary' | 'secondary',
) {
  const schemma = {
    'default-primary': variantSchema.default.primary,
    'default-secondary': variantSchema.default.secondary,
    primary: variantSchema.primary,
    secondary: variantSchema.secondary,
  }

  return schemma[variant] ?? schemma['default-primary']
}

export default function GenericSector({
  hasHeader = false,
  variant,
  cardOrientation = 'horizontal',
  link,
  ...props
}: Props) {
  const theme = getVariantSchemma(variant)

  return (
    <section
      className={cn(
        'grid min-w-full grid-rows-[max_content_auto] place-items-center gap-3',
        theme.section,
      )}
      {...props}
    >
      {/* header */}
      {hasHeader && (
        <div
          className={cn(
            'flex h-20 min-w-full flex-col items-center justify-center',
            theme.section,
          )}
        >
          <h1 className={cn('text-2xl font-bold', theme.header)}>
            {link.name}
          </h1>
        </div>
      )}

      {/* cards */}
      <div
        className={cn(
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
              variant={theme.card}
              linkPath={info.linkPath}
              target="blank"
            >
              <LinkCard.Content
                variant={theme.text}
                title={info.title}
                description={info.description}
                icon={info.icon}
              />
              <LinkCard.Icon variant={theme.icon} />
            </LinkCard.Root>
          )
        })}
      </div>
    </section>
  )
}
