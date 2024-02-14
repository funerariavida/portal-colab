import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

import LinkProps from '@/types/links'

type LinkContextProps = {
  links: LinkProps[] | null
  setLinks: Dispatch<SetStateAction<LinkProps[] | null>>
}

const LinkContext = createContext<LinkContextProps>({} as LinkContextProps)

function LinkProvider({ children }: { children: ReactNode }) {
  const [links, setLinks] = useState<LinkProps[] | null>(null)

  return (
    <LinkContext.Provider value={{ links, setLinks }}>
      {children}
    </LinkContext.Provider>
  )
}

export { LinkContext, LinkProvider }
// eslint-disable-next-line prettier/prettier
