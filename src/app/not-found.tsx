import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-xl text-foreground font-bold">
        Página não encontrada
      </h1>
      <p className="text-base font-semibold text-muted-foreground">
        A página procurada não existe, navegue para uma das nossas páginas
        existentes
      </p>
      <div className="mt-5 grid items-center justify-center grid-cols-1 sm:grid-cols-2 gap-2">
        <Button variant={'outline'} asChild>
          <Link href="/portaldocolaborador">Página principal</Link>
        </Button>
        {/* <Button variant={'outline'} asChild>
          <Link href="/portaldocolaborador/banco-de-horas">Banco de horas</Link>
        </Button> */}
        <Button variant={'outline'} asChild>
          <Link href="/portaldocolaborador/login">Login</Link>
        </Button>
      </div>
    </div>
  )
}
