'use client'

import doLogin from '@/actions/login'
import useLogin from '@/hooks/use-login'

// form
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// components
import InputMask from 'react-input-mask'

import { Form, FormControl, FormField, FormItem } from '../ui/form'
import SubmitButton from './submit-button'

const formSchema = z.object({
  cpf: z.string().min(2, {
    message: 'CPF Inválido',
  }),
})

const LoginForm = () => {
  const { recallData, isLoading } = useLogin()

  // Preparando formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // recallData(values.cpf)
    doLogin(values.cpf)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-1/2 gap-3"
      >
        {/* cpf */}
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <InputMask
                  disabled={isLoading}
                  className="flex w-full text-zinc-600 h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-black"
                  {...field}
                  mask={'999.999.999-99'}
                  placeholder="CPF"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <SubmitButton isValid={form.formState.isValid} />
      </form>
    </Form>
  )
}

export default LoginForm
