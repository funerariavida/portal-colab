import { useCallback, useState } from 'react';

import { axiosInstance } from '@/configs/axios-base-config';

import callToast from '@/utils/call-toast';

import { useRouter } from 'next/navigation';

import { useSessionStorage } from './use-session-storage';

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
  const {setItem} = useSessionStorage(process.env.SESSION_STORAGE_NAME);
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
      // redirecionando para a página principal
      replace('/portaldocolaborador')
    }).catch((e: Error) => {
      callToast('Erro', e.message, true)
    }).finally(() => setIsLoading(false))
  }, [replace, setItem])

  return { recallData, isLoading }
}