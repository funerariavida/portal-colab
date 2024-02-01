'use client'

import React, {useEffect, useState} from 'react'

import useCollab from '@/hooks/use-collab'

import callToast from '@/utils/call-toast'

import { useRouter } from 'next/navigation'

import { useCollabContext } from '@/context/collaborator'

// form
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// components
import { Button } from '../ui/button'
import InputMask from 'react-input-mask'

import { Loader2, LogIn } from 'lucide-react'

import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useSessionStorage } from '@/hooks/use-session-storage'

const formSchema = z.object({
  cpf: z.string().min(2, 
    {
      message: 'CPF Inválido'
    }),
})

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setCollab } = useCollabContext();
  const {replace} = useRouter()
  const {data} = useCollab();
  const {setItem} = useSessionStorage('isLogged')


  function Login () {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setItem(true)
      replace('/portaldocolaborador')
    }, 3000)
  }

  // Preparando formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if(data){
      const user = data.find((user) => user.cpf === values.cpf)

      if(user){
        // Setando dados do colaborador no contexto
        setCollab({
           nome: user.nome,
           cargo: user.cargo,
           cpf: user.cpf
        })

        // resetando informações do formulário
        form.reset()

        // Realizando a função de login
        // Login()
        console.log(form.getValues())
      }
      else {
        callToast(
          'Erro',
          'CPF não reconhecido',
          true
        )
      }
    }
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className='flex flex-col items-center justify-center gap-3 w-1/2'>
        {/* cpf */}
        <FormField
          control={form.control}
          name='cpf'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormControl>
                <InputMask 
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black focus:ring-black' 
                  {...field}
                  mask={'999.999.999-99'}
                  placeholder='CPF'/>
              </FormControl>
              <FormMessage className='px-3 text-xs' />
            </FormItem>
          )}
        />
        <Button className='w-full text-primary hover:bg-secondary hover:text-white border-0' 
          variant={'outline'}
          disabled={isLoading} type='submit'>
          {isLoading && <Loader2  className="mr-2 h-4 w-4 animate-spin" />}
          {!isLoading && <LogIn className='mr-2 w-4 h-4'/>} Acessar
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm