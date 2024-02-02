import { useCallback, useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/configs/axios-base-config';

import Collaborators from '@/types/collaborators';

import { useCollabContext } from '@/context/collaborator';

import callToast from '@/utils/call-toast';

import { useRouter } from 'next/navigation';

import { useSessionStorage } from './use-session-storage';

export default function useCollab(){
  const [data, setData] = useState<Collaborators[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {setCollab} = useCollabContext();
  const {setItem} = useSessionStorage('collab');
  const {replace} = useRouter();

  const recallData = useCallback((cpf: string) => {
    setIsLoading(true);

    axiosInstance({
      method: 'get',
    }).then((res: AxiosResponse<Collaborators[], any>) => {
      let searchedUser = res.data.find((element) => element.cpf === cpf)
      if(searchedUser) {
        // Setando informações do context de collab
        // setCollab({
        //   nome: searchedUser.nome,
        //   cargo: searchedUser.cargo,
        //   cpf: searchedUser.cpf,
        // })
        setItem({
          name: searchedUser.nome,
          role: searchedUser.cargo,
          cpf: searchedUser.cpf,
          isLogged: true
        })
      }
      else{
        callToast('Erro', 'CPF não encontrado', true)
      }
      // redirecionando para a página principal
      replace('/portaldocolaborador')
    }).catch((e: Error) => {
      callToast('Erro', e.message, true)
    }).finally(() => setIsLoading(false))
  }, [replace, setItem])

  return { recallData, data, isLoading }
}