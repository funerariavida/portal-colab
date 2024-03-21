'use client'

// hooks
import { useSessionStorage } from '@/hooks/use-session-storage'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useHookFormMask } from 'use-mask-input'

// actions
import userLogin from '@/actions/user-login'

// utils

// form
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { CollabResponse } from '@/types/collaborators'

// components
import callToast from '@/utils/call-toast'
import { Loader2, LogIn } from 'lucide-react'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const cpfRegex = /\d\d\d\.\d\d\d\.\d\d\d-\d\d/

const formSchema = z.object({
  cpf: z
    .string()
    .min(2, {
      message: 'Entrada mínima inválida MIN:2',
    })
    .max(15, {
      message: 'Entrada máxima inválida MAX:15',
    })
    .refine((value) => cpfRegex.test(value ?? ''), {
      message: 'CPF inválido Ex:000.000.000-00',
    }),
})

export default function LoginForm() {
  const { replace } = useRouter()

  const { setItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const { isPending, mutate } = useMutation({
    mutationKey: ['user-login'],
    mutationFn: userLogin,
  })

  // Preparando formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: '',
    },
  })

  const registerWithMask = useHookFormMask(form.register)

  function onSubmit(values: z.infer<typeof formSchema>) {
    // sending POST request
    mutate(values.cpf, {
      onSuccess: (data: CollabResponse) => {
        form.reset()

        // on request Error
        if (data.code !== 200) {
          callToast(
            'Ocorreu um erro ao realizar o login',
            data.message ?? '',
            'destructive',
          )
          console.log(data.message)
        } else {
          // Calling visual return
          callToast('Sucesso', 'CPF validado com sucesso!', 'success')

          // setting the user info on session storage
          setItem({
            name: data.nome,
            role: data.cargo,
            cpf: data.cpf,
            telefone: data.telefone,
          })

          // redirecting to home page
          replace('/portaldocolaborador')
        }
      },
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col items-center justify-center gap-3"
      >
        {/* cpf */}
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem className="grid w-full">
              <FormControl>
                <Input
                  {...field}
                  {...registerWithMask('cpf', '999.999.999-99')}
                  disabled={isPending}
                  className="text-black"
                  placeholder="CPF"
                />
              </FormControl>
              <FormMessage className="px-3 py-2 font-semibold text-zinc-900" />
            </FormItem>
          )}
        />
        <Button
          className="w-full border-0 text-primary hover:bg-secondary hover:text-white"
          variant={'outline'}
          disabled={isPending}
          type="submit"
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {!isPending && <LogIn className="mr-2 h-4 w-4" />} Acessar
        </Button>
      </form>
    </Form>
  )
}
