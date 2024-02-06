'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

import Collaborators from '@/types/collaborators'

type authContextProps = {
  collab: Collaborators | null
  setCollab: Dispatch<SetStateAction<Collaborators | null>>
}

const CollabContext = createContext<authContextProps>({} as authContextProps)

export const CollabContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [collab, setCollab] = useState<Collaborators | null>(null)

  return (
    <CollabContext.Provider value={{ collab, setCollab }}>
      {children}
    </CollabContext.Provider>
  )
}

export const useCollabContext = () => useContext(CollabContext)
