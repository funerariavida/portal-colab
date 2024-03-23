import { useSessionStorage } from '@/hooks/use-session-storage'
import { SessionCollab } from '@/types/collaborators'

const useFormatter = () => {
  const { getItem } = useSessionStorage<SessionCollab>(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  let username = ''
  let userrole = ''

  // Formatando nome do usuário e seu cargo
  const item = getItem()
  const aux01 = item?.name.split(' ')[0].toLowerCase()
  const aux02 = item?.name.split(' ')[1].toLowerCase()
  username = aux01 + ' ' + aux02
  userrole = item?.role.toLowerCase() ?? ''

  return { username, userrole }
}

export default useFormatter
