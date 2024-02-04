import { useCallback, useState } from 'react';
import axios from 'axios'

import { axiosInstance } from '@/configs/axios-base-config';

import callToast from '@/utils/call-toast';

import { useRouter } from 'next/navigation';

import { useSessionStorage } from './use-session-storage';
import { AxiosError } from 'axios';

type CollabResponse = {
  code: number,
  message: string,
  nome: string,
  cargo: string,
  cpf: string,
  type_user: string
}

export default function useLogin(){
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {setItem} = useSessionStorage(process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME);
  const {replace} = useRouter();

  const recallData = useCallback((cpf: string) => {
    setIsLoading(true);

    axiosInstance<CollabResponse[]>({
      url: `auth/${cpf}`,
      method: 'get',
    }).then((res) => {
        setItem({
          name: res.data[0].nome,
          role: res.data[0].cargo,
          cpf: res.data[0].cpf,
        })
      // Chamando retorno visual
      callToast('Sucesso', 'CPF validado com sucesso!', 'success')
      
      // redirecionando para a página principal
      replace('/portaldocolaborador')
    }).catch((e: Error | AxiosError) => {
      // axios error
      if(axios.isAxiosError(e)){
        callToast('Erro de requisição', e.response?.data.message, 'destructive')
      }
      // general error
      else {callToast(e.name, e.message, 'destructive')}
    }).finally(() => setIsLoading(false))
  }, [replace, setItem])

  return { recallData, isLoading }
}