import { LucideIcon, icons } from 'lucide-react'
import { HTMLAttributeAnchorTarget } from 'react'

type portalToolsProps = {
  title: string
  link: string
  target?: HTMLAttributeAnchorTarget
  icon?: LucideIcon
}

export const portalTools: portalToolsProps[] = [
  {
    title: 'Visualizar banco de horas',
    link: '/portaldocolaborador/banco-de-horas',
    target: '_self',
    icon: icons.Clock4,
  },
  {
    title: 'Atestados e declarações',
    link: '/portaldocolaborador/atestados',
    target: '_self',
    icon: icons.FilePlus,
  },
]
