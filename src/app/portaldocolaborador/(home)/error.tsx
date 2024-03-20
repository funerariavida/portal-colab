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
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-10 text-center">
      <h2 className="text-xl font-bold text-destructive">Algo deu errado!</h2>
      <p className="text-base font-medium">{error.message}</p>
      <Button
        className="mt-5"
        variant={'destructive'}
        onClick={
          // re-rendering component
          () => reset()
        }
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Tente novamente
      </Button>
    </div>
  )
}
