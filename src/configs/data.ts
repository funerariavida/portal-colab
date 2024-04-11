// react
import { HTMLAttributeAnchorTarget } from 'react'

// icons
import { LucideIcon, icons } from 'lucide-react'

type portalToolsProps = {
  title: string
  link: string
  target?: HTMLAttributeAnchorTarget
  icon?: LucideIcon
}

export const portalTools: portalToolsProps[] = [
  {
    title: 'Visualizar banco de horas',
    link: '/banco-de-horas',
    target: '_self',
    icon: icons.Clock4,
  },
  {
    title: 'Atestados e declarações',
    link: '/atestados',
    target: '_self',
    icon: icons.FilePlus,
  },
]
