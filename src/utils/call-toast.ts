import { toast } from '@/components/ui/use-toast'
import classNames from 'classnames'

const callToast = (
  title: string,
  description: string,
  variant?: 'destructive' | 'success' | 'default',
) => {
  toast({
    title,
    description,
    variant: variant === 'destructive' ? 'destructive' : 'default',
    duration: 3000,
    className: classNames({ 'bg-green-500 text-white': variant === 'success' }),
  })
}

export default callToast
