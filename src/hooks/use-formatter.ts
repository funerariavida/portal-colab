import { useSessionStorage } from "@/hooks/use-session-storage"

const useFormatter = () => {
  const {getItem} = useSessionStorage('collab')

    // Formatando nome do usuário e seu cargo
    const item = getItem()?.toString()
    const userInfo = item != undefined && JSON.parse(item)
    const aux_01 = userInfo.name.split(' ')[0].toLowerCase()
    const aux_02 = userInfo.name.split(' ')[1].toLowerCase()
    const userName = aux_01 + ' ' + aux_02
    const userRole = userInfo.role.toLowerCase()

    return {userName, userRole}
}

export default useFormatter;