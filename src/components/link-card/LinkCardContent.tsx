import dynamicIconImports from 'lucide-react/dynamicIconImports'
import DynamicIcon from '../dynamic-icon'

import cn from 'classnames'

type LinkCardContent = {
  title: string
  description: string
  icon?: keyof typeof dynamicIconImports
  variant?: 'default' | 'primary' | 'secondary' | string
}

export default function LinkCardContent({
  title,
  description,
  icon,
  variant = `default`,
}: LinkCardContent) {
  return (
    <div className="col-span-1 row-span-1 flex h-full items-center justify-start gap-4">
      {icon && (
        <DynamicIcon
          name={icon}
          className={cn(
            { 'text-background': variant === 'default' },
            { 'text-primary': variant === 'primary' },
            { 'text-secondary': variant === 'secondary' },
          )}
          width={32}
          height={32}
        />
      )}
      <div>
        <h1
          className={cn(
            'text-base font-bold sm:text-xl',
            { 'text-background': variant === 'default' },
            { 'text-primary': variant === 'primary' },
            { 'text-secondary': variant === 'secondary' },
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            'text-xs font-medium sm:text-base',
            { 'text-background': variant === 'default' },
            { 'text-primary': variant === 'primary' },
            { 'text-secondary': variant === 'secondary' },
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
