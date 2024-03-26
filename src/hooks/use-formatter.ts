import { useSessionStorage } from '@/hooks/use-session-storage'
import { SessionCollab } from '@/types/collaborators'

const useFormatter = () => {
  const { getItem } = useSessionStorage<SessionCollab>(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  // Formatando nome do usuário e seu cargo
  const item = getItem()
  const slicedArray = item?.name.split(' ').slice(0, 3)
  const username = slicedArray?.join(' ') ?? ''
  const userrole = item?.role.toLowerCase() ?? ''

  return { username, userrole }
}

export default useFormatter
