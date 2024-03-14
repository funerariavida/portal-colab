'use server'

export default async function UpdateUserPhone(telefone: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/user-phone`,
    {
      method: 'PATCH',
      headers: {
        // token: '',
      },
      body: JSON.stringify({ telefone }),
    },
  )

  const data = await response.json()

  return data
}
