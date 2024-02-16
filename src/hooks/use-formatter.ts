import { useSessionStorage } from '@/hooks/use-session-storage'

const useFormatter = () => {
  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  let username = ''
  let userrole = ''

  // Formatando nome do usuário e seu cargo
  if (getItem() !== null) {
    const item = getItem()?.toString()
    const userInfo = item !== undefined && JSON.parse(item)
    const aux01 = userInfo.name.split(' ')[0].toLowerCase()
    const aux02 = userInfo.name.split(' ')[1].toLowerCase()
    username = aux01 + ' ' + aux02
    userrole = userInfo.role.toLowerCase()
  }

  return { username, userrole }
}

export default useFormatter
