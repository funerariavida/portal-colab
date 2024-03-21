'use server'

import { CollabResponse } from '@/types/collaborators'

export default async function userLogin(cpf: string): Promise<CollabResponse> {
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
