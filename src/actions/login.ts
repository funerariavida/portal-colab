'use server'

import callToast from '@/utils/call-toast'
import { redirect } from 'next/navigation'
import { setItem } from './session-storage'

export default async function doLogin(cpf: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/login`,
    {
      method: 'POST',
      body: JSON.stringify({
        cpf,
      }),
    },
  )

  const data = await response.json()

  try {
    const user = data.data[0]
    setItem(process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME, {
      name: user.nome,
      role: user.cargo,
      cpf: user.cpf,
    })

    // Retorno visual de sucesso
    callToast('Sucesso', 'CPF validado com sucesso!', 'success')

    // Página principal
    redirect('/portaldocolaborador')
  } catch (e: unknown) {
    // general error
    if (e instanceof Error) {
      callToast(e.name, e.message, 'destructive')
    }
  }
}
