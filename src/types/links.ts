import LinkCardsProps from './link-card'

type LinkProps = {
  page: string
  page_name: string
  name: string
  infos: LinkCardsProps[]
  variant: 'default-primary' | 'default-secondary' | 'primary' | 'secondary'
}

export default LinkProps
