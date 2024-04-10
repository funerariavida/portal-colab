import classNames from 'classnames'
import Link from 'next/link'
import { ComponentProps, ReactNode, forwardRef } from 'react'

type LinkCardRootProps = ComponentProps<'a'> & {
  variant?: 'default' | 'primary' | 'secondary' | string
  linkPath: string
  children: ReactNode
}

const LinkCardRoot = forwardRef<HTMLAnchorElement, LinkCardRootProps>(
  ({ className, linkPath, variant = 'default', children, ...props }, ref) => {
    return (
      <Link
        href={linkPath}
        className={classNames(
          'grid grid-cols-[1fr_min-content] grid-rows-1 items-center justify-center rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-105',
          className,
          {
            'h-32 w-64 sm:h-40 sm:w-96': className === undefined,
          },
          {
            'bg-background': variant === 'default',
          },
          {
            'bg-primary': variant === 'primary',
          },
          {
            'bg-secondary': variant === 'secondary',
          },
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    )
  },
)

LinkCardRoot.displayName = 'LinkCardRoot'

export default LinkCardRoot
