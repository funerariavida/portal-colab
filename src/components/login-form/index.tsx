'use client'

// hooks
import useLogin from '@/hooks/use-login'
import { useHookFormMask } from 'use-mask-input'

// form
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// components

import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import SubmitButton from './submit-button'

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
  const { recallData, isLoading } = useLogin()

  // Preparando formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: '',
    },
  })

  const registerWithMask = useHookFormMask(form.register)

  function onSubmit(values: z.infer<typeof formSchema>) {
    recallData(values.cpf)
    form.reset()
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
                  disabled={isLoading}
                  className="text-black"
                  placeholder="CPF"
                />
              </FormControl>
              <FormMessage className="px-3 py-2 font-semibold text-slate-800" />
            </FormItem>
          )}
        />
        <SubmitButton
          isDisabled={isLoading || !form.formState.isValid}
          isLoading={isLoading}
        />
      </form>
    </Form>
  )
}
