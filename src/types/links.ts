import LinkCardsProps from './link-card'

type LinkProps = {
  page: string
  name: string
  infos: LinkCardsProps[]
}

export enum LinkPageEnum {
  'main',
  'atendimento',
  'crematórios',
  'dp',
  'operacional',
  'rh',
  't.i',
}

export default LinkProps
