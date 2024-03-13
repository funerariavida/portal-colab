'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { RotateCcw } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Button } from './ui/button'

import InputMask from 'react-input-mask'

export default function UserPhoneDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        {/* header */}
        <DialogHeader>
          <DialogTitle className="text-lg text-black">
            Atualiar telefone
          </DialogTitle>
          <DialogDescription className="text-base text-zinc-500">
            Verificamos que seu telefone está desatualizado. Atualize as
            informações pedidas abaixo para continuar
          </DialogDescription>
        </DialogHeader>
        <PhoneForm />
        <DialogFooter>
          <Button type="submit">
            <RotateCcw className="h-4 w-4 mr-4" />
            Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const formSchema = z.object({
  phone: z.string().min(2).max(20),
})

function PhoneForm() {
  // defining form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
                <FormLabel className="text-right">Telefone</FormLabel>
                <FormControl>
                  <InputMask
                    placeholder="Ex. +55 (88) 9 9999-9999"
                    className="flex w-full text-zinc-600 h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-black"
                    {...field}
                    mask={'+99 9 9999-9999'}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
