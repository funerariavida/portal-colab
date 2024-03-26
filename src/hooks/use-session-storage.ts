export function useSessionStorage<T>(key: string) {
  const setItem = (value: T): void => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  }

  const getItem = (): T | null => {
    try {
      const item = window.sessionStorage.getItem(key)
      if (item === null) throw new Error('Item desconhecido')
      return JSON.parse(item) as T
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

  const clearAll = (): void => {
    try {
      window.sessionStorage.clear()
    } catch (e) {
      console.error(e)
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
    clearAll,
  }
}
