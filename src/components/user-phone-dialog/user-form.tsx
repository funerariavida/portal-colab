'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import InputMask from 'react-input-mask'

import UpdateUserPhone from '@/actions/update-user-phone'
import { useMutation } from '@tanstack/react-query'
import { RotateCw } from 'lucide-react'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'

const formSchema = z.object({
  phone: z.string().min(15).max(20),
})

export default function PhoneForm() {
  // sending user phone info
  const { isPending, mutate, data } = useMutation({
    mutationFn: UpdateUserPhone,
  })

  // defining form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values.phone, {
      onSuccess: () => console.log(data),
    })
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
                <FormLabel className="text-right text-black">
                  Telefone:
                </FormLabel>
                <FormControl>
                  <InputMask
                    placeholder="Ex. (88) 9 9999-9999"
                    className="flex col-span-3 text-zinc-600 h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-black"
                    {...field}
                    mask={'(99) 9 9999-9999'}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            disabled={
              isPending || (!form.formState.isDirty && !form.formState.isValid)
            }
          >
            {isPending && <RotateCw className="w-4 h-4 mr-4 animate-spin" />}
            Continuar
          </Button>
        </div>
      </form>
    </Form>
  )
}
