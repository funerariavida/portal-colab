'use client'

import { Button } from '@/components/ui/button'
import { RotateCcw } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Logging the error
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-destructive text-xl font-bold">Algo deu errado!</h2>
      <p className="text-base font-medium">{error.message}</p>
      <Button
        className="mt-5"
        variant={'destructive'}
        onClick={
          // re-renderizando o componente
          () => reset()
        }
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Tente novamente
      </Button>
    </div>
  )
}
