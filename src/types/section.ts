import { ComponentProps } from 'react'
import LinkProps from './links'

type SectionProps = ComponentProps<'section'> & {
  data: LinkProps[]
  cardVariant?: 'default' | 'primary' | 'secondary'
  pageNumber?: number
}

export default SectionProps
