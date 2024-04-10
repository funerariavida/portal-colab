import classNames from 'classnames'
import { ExternalLink } from 'lucide-react'

type LinkCardIconsProps = {
  iconAlign?: 'top' | 'center'
  variant?: 'default' | 'primary' | 'secondary' | string
}

export default function LinkCardIcons({
  iconAlign = 'top',
  variant = `default`,
}: LinkCardIconsProps) {
  return (
    <div
      className={classNames(
        'col-span-1 row-span-1 flex justify-end',
        {
          'mb-auto': iconAlign === 'top',
        },
        {
          'ms-auto': iconAlign === 'center',
        },
      )}
    >
      <ExternalLink
        className={classNames(
          { 'text-background': variant === 'default' },
          { 'text-primary': variant === 'primary' },
          { 'text-secondary': variant === 'secondary' },
        )}
        size={24}
      />
    </div>
  )
}
