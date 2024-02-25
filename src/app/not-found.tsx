import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-zinc-100 w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl text-primary font-bold mb-5">404</h1>
      <h2 className="text-xl text-foreground font-bold">
        Página não encontrada
      </h2>
      <p className="text-base text-center font-medium text-zinc-500">
        A página procurada não existe, navegue para uma das nossas páginas
        existentes
      </p>
      <div className="mt-6 grid items-center justify-center grid-cols-1 sm:grid-cols-2 gap-2">
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
