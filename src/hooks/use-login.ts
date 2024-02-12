import axios, { AxiosError } from 'axios'

import { useCallback, useState } from 'react'


import callToast from '@/utils/call-toast'

import { useRouter } from 'next/navigation'

import { useSessionStorage } from './use-session-storage'

type CollabResponse = {
  code: number
  message: string
  nome: string
  cargo: string
  cpf: string
  type_user: string
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

      axios<CollabResponse[]>({
        url: `https://n8n.empresavida.com.br/webhook/bea2eed4-5182-4597-b1b5-f58ae937a03f/v3/portal/auth/${cpf}`,
        // url: `auth/${cpf}`,
        method: 'get',
        // method: 'post',
        // headers: {
        //   token: process.env.API_LOGIN_KEY
        // }
      })
        .then((res) => {
          setItem({
            name: res.data[0].nome,
            role: res.data[0].cargo,
            cpf: res.data[0].cpf,
          })
          // Chamando retorno visual
          callToast('Sucesso', 'CPF validado com sucesso!', 'success')

          // redirecionando para a página principal
          replace('/portaldocolaborador')
        })
        .catch((e: Error | AxiosError) => {
          // axios error
          if (axios.isAxiosError(e)) {
            callToast(
              'Erro de requisição',
              e.response?.data.message,
              'destructive',
            )
          }
          // general error
          else {
            callToast(e.name, e.message, 'destructive')
          }
        })
        .finally(() => setIsLoading(false))
    },
    [replace, setItem],
  )

  return { recallData, isLoading }
}
