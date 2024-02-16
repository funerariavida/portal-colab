export type sessionType = {
  name: string
  role: string
  cpf: string
}

export function useSessionStorage<T>(key: string) {
  const setItem = (value: T | string | sessionType): void => {
    try {
      if (typeof value === 'string') {
        window.sessionStorage.setItem(key, value)
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(value))
      }
    } catch (e) {
      console.error(e)
    }
  }

  const getItem = (): string | sessionType | null => {
    try {
      const item = window.sessionStorage.getItem(key)
      if (item === null) throw new Error('Item desconhecido')
      return item
    } catch (e) {
      console.error(e)
      return null
    }
  }

  const removeItem = (): void => {
    try {
      window.sessionStorage.removeItem(key)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
  }
}
