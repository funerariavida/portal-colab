'use server'

export default async function UpdateUserPhone(userInfo: {
  cpf: string
  telefone: string
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/update-phone`,
    {
      cache: 'no-store',
      method: 'PATCH',
      body: JSON.stringify(userInfo),
    },
  )

  const data = await response.json()

  return data
}
