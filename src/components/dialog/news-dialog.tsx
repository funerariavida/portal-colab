// hooks
import { useSessionStorage } from '@/hooks/use-session-storage'

// radix
import { ComponentProps } from 'react'

// icons
import { MessageCircleQuestion } from 'lucide-react'

// next
import Image from 'next/image'
import Link from 'next/link'

// components
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require('../../../package.json').version

type newsDialogProps = {
  hasTrigger?: boolean
}

export default function NewsDialog({
  hasTrigger = true,
  onClick,
}: newsDialogProps & ComponentProps<'button'>) {
  const { getItem, setItem } = useSessionStorage<boolean>(
    process.env.NEXT_PUBLIC_NEWS_CONDITION,
  )

  const isNewsViewed = getItem()

  return (
    <Dialog defaultOpen={!isNewsViewed ?? false}>
      {hasTrigger && (
        <DialogTrigger>
          <Button variant={'secondary'} className="mt-3 w-full">
            <span className="mr-4">Novidades</span>
            <MessageCircleQuestion className="h-4 w-4" />
          </Button>
        </DialogTrigger>
      )}
      <DialogContent
        className="max-h-[90%] max-w-[80%] overflow-y-scroll"
        onInteractOutside={() => {
          setItem(true)
        }}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <h2 className="text-xl font-bold">O que há de novo</h2>
            <span className="text-sm font-semibold text-zinc-500">
              Ver. {version}
            </span>
          </DialogTitle>
          <DialogDescription>
            Confira as novidades do portal do colaborador
          </DialogDescription>
        </DialogHeader>
        <div className="mt-3 grid h-full gap-3">
          {/* first content */}
          <Separator className="h-px w-full bg-zinc-400" />
          <div>
            <h2 className="text-base font-semibold text-black">
              Ordenação de tabelas
            </h2>
          </div>
          <p className="text-sm">
            Agora ficou mais fácil visualizar as informações das nossas
            ferramentas
            <br />
            Com a ordenação de colunas, você poderá organizar suas tabelas da
            forma que preferir, para encontrar mais facilmente o que busca.
            <br /> <br />
            Para utilizar este novo complemento, basta navegar para uma das
            tabelas na aba de{' '}
            <strong className="text-primary">ferramentas</strong> e clicar em
            cima de um dos cabeçalhos de cada tabela
          </p>

          {/* second content */}
          <Separator className="h-px w-full bg-zinc-400" />
          <div>
            <h2 className="text-base font-semibold text-black">
              Filtragem de células
            </h2>
          </div>
          <p className="text-sm">
            Com a filtragem de células, você poderá filtrar apenas as
            informações que você deseja ver e encontrar rapidamente o que você
            deseja.
            <br />
            Selecione qual coluna você deseja filtrar e torne suas buscas mais
            precisas
            <br /> <br />
            Para utilizar este novo complemento, basta navegar para uma das
            tabelas na aba de{' '}
            <strong className="text-primary">ferramentas</strong>
          </p>

          {/* images */}
          <div className="mt-3 grid w-full grid-cols-1 grid-rows-[auto_auto] place-items-start gap-3">
            <div className="max-w-[600px] border border-zinc-300">
              <Image
                src={require('@/assets/image/news/image-01.png')}
                alt="news-image"
                className="max-w-full"
                width={100}
                height={100}
              />
            </div>
            <div className="max-w-[600px] border border-zinc-300">
              <Image
                src={require('@/assets/image/news/image-02.png')}
                alt="news-image"
                className="max-w-full"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <DialogFooter className="mt-3 flex flex-wrap justify-end gap-3">
          <DialogClose onClick={onClick} asChild>
            <Button onClick={() => setItem(true)} asChild>
              <Link href="/portaldocolaborador/atestados">
                Atestados e declarações
              </Link>
            </Button>
          </DialogClose>
          <DialogClose onClick={onClick} asChild>
            <Button onClick={() => setItem(true)} asChild>
              <Link href="/portaldocolaborador/banco-de-horas">
                Banco de horas
              </Link>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
