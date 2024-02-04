'use client'

import React from 'react'

import useLogin from '@/hooks/use-login'

// form
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// components
import { Button } from '../ui/button'
import InputMask from 'react-input-mask'

import { Loader2, LogIn } from 'lucide-react'

import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'


const formSchema = z.object({
  cpf: z.string().min(2, 
    {
      message: 'CPF Inválido'
    }),
})

const LoginForm = () => {
  const {recallData, isLoading} = useLogin();

  // Preparando formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    recallData(values.cpf);
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
              <FormMessage className='px-3 text-xs font-bold text-secondary' />
            </FormItem>
          )}
        />
        <Button className='w-full text-primary hover:bg-secondary hover:text-white border-0' 
          variant={'outline'}
          disabled={isLoading || !form.formState.isValid} type='submit'>
          {isLoading && <Loader2  className="mr-2 h-4 w-4 animate-spin" />}
          {!isLoading && <LogIn className='mr-2 w-4 h-4'/>} Acessar
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm