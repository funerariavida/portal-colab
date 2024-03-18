'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react'

import LinkProps from '@/types/links'

type LinkContextProps = {
  links: LinkProps[] | null
  setLinks: Dispatch<SetStateAction<LinkProps[] | null>>
  getLinkByPage: (page: string) => LinkProps[] | undefined
}

const LinkContext = createContext<LinkContextProps>({} as LinkContextProps)

function LinkProvider({
  children
}: { children: ReactNode }) {
  const [links, setLinks] = useState<LinkProps[] | null>(null)

  const getLinkByPage = (page: string) => {
    return links?.filter((element: LinkProps) => element.page === page)
  }

  return (
    <LinkContext.Provider value={{ links, setLinks, getLinkByPage }}>
      {children}
    </LinkContext.Provider>
  )
}
const useLinkContext = () => useContext(LinkContext)

export { LinkProvider, useLinkContext }
// eslint-disable-next-line prettier/prettier
