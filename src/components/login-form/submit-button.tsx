import { Loader2, LogIn } from 'lucide-react'
import { Button } from '../ui/button'

export default function SubmitButton({
  isDisabled = false,
  isLoading = false,
}: {
  isDisabled: boolean
  isLoading: boolean
}) {
  return (
    <Button
      className="w-full border-0 text-primary hover:bg-secondary hover:text-white"
      variant={'outline'}
      disabled={isDisabled}
      type="submit"
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && <LogIn className="w-4 h-4 mr-2" />} Acessar
    </Button>
  )
}
