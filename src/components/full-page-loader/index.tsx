import classNames from 'classnames'

import { Loader2 } from 'lucide-react'

type Props = {
  variant?: 'default' | 'primary' | 'secondary'
}

const FullPageLoader = ({ variant = 'default' }: Props) => {
  return (
    <div
      className={classNames(
        'h-screen w-full flex items-center justify-center',
        { 'bg-background text-primary': variant === 'default' },
        { 'bg-primary text-background': variant === 'primary' },
        { 'bg-secondary text-background': variant === 'secondary' },
      )}
    >
      <Loader2 className="animate-spin" size={'100'} />
    </div>
  )
}

export default FullPageLoader
