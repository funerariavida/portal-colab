import LinkCardsProps from '@/types/link-card'

import classNames from 'classnames'

import { ExternalLink } from 'lucide-react'

import Link from 'next/link'

import { AnchorHTMLAttributes, forwardRef } from 'react'
import DynamicIcon from '../dynamic-icon'

type componentProps = LinkCardsProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'default' | 'primary' | 'secondary'
    iconAlign?: 'top' | 'center'
  }

const LinkCard = forwardRef<HTMLAnchorElement, componentProps>(
  (
    {
      className,
      iconAlign = 'top',
      icon: iconName,
      title,
      description,
      linkPath,
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        href={linkPath}
        className={classNames(
          'p-6 flex flex-col items-center justify-center gap-2 shadow-md transition-all duration-300 rounded-xl hover:scale-105',
          className,
          {
            'w-4/5 sm:w-96 h-32 sm:h-40': className === undefined,
          },
          {
            'bg-background text-primary': variant === 'default',
          },
          {
            'bg-primary text-white': variant === 'primary',
          },
          {
            'bg-secondary text-white': variant === 'secondary',
          },
        )}
        ref={ref}
        {...props}
        replace
      >
        {/* icon wrapper */}
        <div className="w-full flex items-center justify-end">
          {iconAlign === 'top' && (
            <ExternalLink
              className={variant === 'default' ? 'text-primary' : 'text-white'}
              size={24}
            />
          )}
        </div>

        {/* card info */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center justify-center gap-3">
            {iconName && (
              <div>
                <DynamicIcon
                  name={iconName}
                  className={
                    variant === 'default' ? 'text-primary' : 'text-white'
                  }
                  size={32}
                />
              </div>
            )}
            <div>
              <h1 className="text-base sm:text-xl font-bold">{title}</h1>
              <p className="text-xs sm:text-base font-medium">{description}</p>
            </div>
          </div>
          {iconAlign === 'center' && (
            <ExternalLink
              className={variant === 'default' ? 'text-primary' : 'text-white'}
              size={24}
            />
          )}
        </div>
      </Link>
    )
  },
)

LinkCard.displayName = 'LinkCard'

export default LinkCard
