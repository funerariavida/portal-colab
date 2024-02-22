'use client'

import { Loader2, LogIn } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

export default function SubmitButton({ isValid }: { isValid: boolean }) {
  const { pending } = useFormStatus()

  return (
    <Button
      className="w-full border-0 text-primary hover:bg-secondary hover:text-white"
      variant={'outline'}
      disabled={pending || !isValid}
      type="submit"
    >
      {pending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!pending && <LogIn className="w-4 h-4 mr-2" />} Acessar
    </Button>
  )
}
