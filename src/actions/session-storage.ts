'use server'

import { sessionType } from '@/hooks/use-session-storage'

export function getItem(key: string): string | sessionType | null {
  try {
    const item = window.sessionStorage.getItem(key)
    if (item === null) throw new Error('Item desconhecido')
    return item
  } catch (e) {
    console.error(e)
    return null
  }
}

export function setItem(key: string, item: string | sessionType | null): void {
  try {
    if (typeof item === 'string') {
      window.sessionStorage.setItem(key, item)
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(item))
    }
  } catch (e) {
    console.error(e)
  }
}

export function removeItem(key: string): void {
  try {
    window.sessionStorage.removeItem(key)
  } catch (e) {
    console.error(e)
  }
}
