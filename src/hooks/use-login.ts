import axios, { AxiosError } from 'axios'

import { useCallback, useState } from 'react'

import callToast from '@/utils/call-toast'

import { useRouter } from 'next/navigation'

import { useSessionStorage } from './use-session-storage'

type CollabResponse = {
  data: [
    {
      code: number
      message: string
      nome: string
      cargo: string
      cpf: string
      type_user: string
    },
  ]
}

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const { replace } = useRouter()

  const recallData = useCallback(
    (cpf: string) => {
      setIsLoading(true)

      axios<CollabResponse>({
        url: `https://www.empresavida.com.br/api/login`,
        method: 'post',
        data: {
          cpf,
        },
      })
        .then((res) => {
          const data = res.data.data[0]
          setItem({
            name: data.nome,
            role: data.cargo,
            cpf: data.cpf,
          })
          // Chamando retorno visual
          callToast('Sucesso', 'CPF validado com sucesso!', 'success')

          // redirecionando para a página principal
          replace('/portaldocolaborador')
        })
        .catch((e: Error | AxiosError) => {
          // axios error
          if (axios.isAxiosError(e)) {
            callToast('Erro de requisição', e.message, 'destructive')
          }
          // general error
          else {
            callToast(e.name, e.message, 'destructive')
          }
          console.log(e)
        })
        .finally(() => setIsLoading(false))
    },
    [replace, setItem],
  )

  return { recallData, isLoading }
}
