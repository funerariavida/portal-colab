import dynamicIconImports from 'lucide-react/dynamicIconImports'
import DynamicIcon from '../dynamic-icon'

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
    <div className="col-span-2 row-span-1 flex items-start gap-6">
      {icon && (
        <DynamicIcon
          name={icon}
          className={variant === 'default' ? 'text-primary' : 'text-white'}
          size={32}
        />
      )}
      <div>
        <h1 className="text-base sm:text-xl font-bold">{title}</h1>
        <p className="text-xs sm:text-base font-medium">{description}</p>
      </div>
    </div>
  )
}
