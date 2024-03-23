'use server'

import { CollabResponse } from '@/types/collaborators'
import { cookies } from 'next/headers'

export default async function userLogin(cpf: string): Promise<CollabResponse> {
  const cookieStore = cookies()

  // setting the news dialog cookie
  cookieStore.set({
    name: 'isNewsViewed',
    value: 'true',
  })

  cookieStore.set({
    name: 'user',
    value: JSON.stringify({
      name: 'Nome ficticio',
      idade: 'Idade ficticia',
    }),
  })

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/login`,
    {
      method: 'POST',
      body: JSON.stringify({ cpf }),
    },
  )

  const data = await response.json()

  return data
}
