import dynamic from 'next/dynamic'

import { LucideProps } from 'lucide-react'

import dynamicIconImports from 'lucide-react/dynamicIconImports'

type Props = LucideProps & {
  name: keyof typeof dynamicIconImports
}

const DynamicIcon = ({ name, ...props }: Props) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
}

export default DynamicIcon
