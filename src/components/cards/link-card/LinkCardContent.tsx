import dynamicIconImports from 'lucide-react/dynamicIconImports'
import DynamicIcon from '../../dynamic-icon'

type LinkCardContent = {
  title: string
  description: string
  icon?: keyof typeof dynamicIconImports
  variant?: 'default' | 'primary' | 'secondary'
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
          className={variant === 'default' ? 'text-primary' : 'text-white'}
          width={32}
          height={32}
        />
      )}
      <div>
        <h1 className="text-base font-bold sm:text-xl">{title}</h1>
        <p className="text-xs font-medium sm:text-base">{description}</p>
      </div>
    </div>
  )
}
