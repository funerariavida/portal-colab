import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-100 px-3">
      <h1 className="mb-5 text-6xl font-bold text-primary">404</h1>
      <h2 className="text-xl font-bold text-foreground">
        Página não encontrada
      </h2>
      <p className="text-center text-base font-medium text-zinc-500">
        A página procurada não existe, navegue para uma das nossas páginas
        existentes
      </p>
      <div className="mt-6 grid grid-cols-1 items-center justify-center gap-2 sm:grid-cols-2">
        <Button variant={'outline'} asChild>
          <Link href="/portaldocolaborador">Página principal</Link>
        </Button>
        <Button variant={'outline'} asChild>
          <Link href="/portaldocolaborador/banco-de-horas">Banco de Horas</Link>
        </Button>
        <Button variant={'outline'} asChild>
          <Link href="/portaldocolaborador/atestados" target="_blank">
            Verificar novidade
          </Link>
        </Button>
      </div>
    </div>
  )
}
