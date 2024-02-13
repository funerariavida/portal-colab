import dynamicIconImports from 'lucide-react/dynamicIconImports'

type LinkCardsProps = {
  title: string
  description: string
  icon?: keyof typeof dynamicIconImports
  linkPath: string
}
export default LinkCardsProps
