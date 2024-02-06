import { useSessionStorage } from '@/hooks/use-session-storage'

const useFormatter = () => {
  const { getItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  // Formatando nome do usuário e seu cargo
  const item = getItem()?.toString()
  const userInfo = item !== undefined && JSON.parse(item)
  const aux01 = userInfo.name.split(' ')[0].toLowerCase()
  const aux02 = userInfo.name.split(' ')[1].toLowerCase()
  const userName = aux01 + ' ' + aux02
  const userRole = userInfo.role.toLowerCase()

  return { userName, userRole }
}

export default useFormatter
