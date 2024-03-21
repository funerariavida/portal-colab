'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import PhoneForm from './user-form'

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
            Atualizar telefone
          </DialogTitle>
          <DialogDescription className="text-base text-zinc-500">
            Verificamos que seu telefone está desatualizado. Atualize as
            informações pedidas abaixo para continuar
          </DialogDescription>
        </DialogHeader>
        <PhoneForm setDialogState={setIsOpen} />
      </DialogContent>
    </Dialog>
  )
}
