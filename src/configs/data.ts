import { HTMLAttributeAnchorTarget } from 'react'

type portalToolsProps = {
  title: string
  link: string
  target?: HTMLAttributeAnchorTarget
}

export const portalTools: portalToolsProps[] = [
  {
    title: 'Visualizar banco de horas',
    link: '/portaldocolaborador/banco-de-horas',
    target: '_blank',
  },
  {
    title: 'Atestados e declarações',
    link: '/portaldocolaborador/atestados',
    target: '_blank',
  },
]
