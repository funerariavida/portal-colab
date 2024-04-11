import { Button } from '@/components/ui/button'
import { portalTools } from '@/configs/data'
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
      <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-3 sm:w-1/2">
        <Button variant={'outline'} asChild>
          <Link href="/">Página principal</Link>
        </Button>

        {portalTools.map((tool, index) => {
          return (
            <Button key={index} variant={'outline'} asChild>
              <Link href={tool.link}>{tool.title}</Link>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
