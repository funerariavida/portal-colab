'use client'

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
  city: string
  country: string
  region: string
  latitude: string
  longitude: string
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
        url: `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/login`,
        method: 'post',
        data: {
          cpf,
        },
      })
        .then((res) => {
          const data = res.data.data[0]
          const city = res.data.city
          const country = res.data.country
          const region = res.data.region
          const latitude = res.data.latitude
          const longitude = res.data.longitude
          setItem({
            name: data.nome,
            role: data.cargo,
            cpf: data.cpf,
          })
          console.log('cidade:', city)
          console.log('pais:', country)
          console.log('region:', region)
          console.log('latitude:', latitude)
          console.log('longitude:', longitude)
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
        })
        .finally(() => setIsLoading(false))
    },
    [setItem],
  )

  return { recallData, isLoading }
}
