'use client'

import { useHookFormMask } from 'use-mask-input'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import UpdateUserPhone from '@/actions/update-user-phone'
import { useSessionStorage } from '@/hooks/use-session-storage'
import { SessionCollab } from '@/types/collaborators'
import callToast from '@/utils/call-toast'
import { useMutation } from '@tanstack/react-query'
import { RotateCw } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '../../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { Input } from '../../ui/input'

type phoneFormProps = {
  setDialogState: Dispatch<SetStateAction<boolean>>
}

const phoneRegex = /\(\d\d\)\s\d\d\d\d\d-\d\d\d\d/ // (99) 99999-9999

const formSchema = z.object({
  phone: z
    .string()
    .min(2, {
      message: 'Entrada mínima inválida MIN:2',
    })
    .max(20, {
      message: 'Entrada máxima inválida MAX:20',
    })
    .refine((value) => phoneRegex.test(value ?? ''), {
      message: 'Número inválido EX:(88) 99999-9999',
    }),
})

export default function PhoneForm({ setDialogState }: phoneFormProps) {
  const { getItem, setItem } = useSessionStorage<SessionCollab>(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  const user = getItem()

  // sending user phone info
  const { isPending, mutate } = useMutation({
    mutationFn: UpdateUserPhone,
  })

  // defining form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
    },
  })

  const registerWithMask = useHookFormMask(form.register)

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(
      { cpf: user?.cpf ?? '', telefone: values.phone },
      {
        onSuccess: () => {
          setDialogState(false)
          callToast('Sucesso', 'seu telefone foi atualizado!', 'success')
          setItem({
            name: user?.name ?? '',
            role: user?.role ?? '',
            cpf: user?.cpf ?? '',
            telefone: values.phone,
          })
        },
        onError: (err) =>
          callToast(
            'Ocorreu um erro na requisição!',
            err.message,
            'destructive',
          ),
      },
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="col-span-1 text-right text-black">
                  Telefone:
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...registerWithMask('phone', '(99) 99999-9999')}
                    className="col-span-3"
                    placeholder="Ex. (88) 99999-9999"
                    disabled={isPending}
                    required
                  />
                </FormControl>
                <FormMessage className="col-span-3 col-start-2" />
              </div>
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <Button type="submit" disabled={isPending || !form.formState.isValid}>
            {isPending && <RotateCw className="mr-4 h-4 w-4 animate-spin" />}
            Continuar
          </Button>
        </div>
      </form>
    </Form>
  )
}
