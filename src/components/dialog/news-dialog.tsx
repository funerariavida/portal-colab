// hooks
import { useSessionStorage } from '@/hooks/use-session-storage'
import { ComponentProps } from 'react'

// icons
import { MessageCircleQuestion } from 'lucide-react'

// next
import Image from 'next/image'
import Link from 'next/link'

// components
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
import { Separator } from '@radix-ui/react-separator'
import { Button } from '../ui/button'

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
          <div className="mt-3 grid grid-rows-[max-content_auto] gap-3 overflow-y-auto">
            <Separator className="h-px w-full bg-zinc-400" />
            <div>
              <h2 className="font-semibold text-black">
                Atestados e declarações
              </h2>
            </div>
            <p className="text-base">
              O portal do colaborador agora conta com uma página para visualizar
              atestados e declarações enviadas.
              <br /> <br />
              Utilize a mais nova ferramenta através dos links disponíveis no
              cabeçalho
            </p>

            <div className="max-w-[600px]">
              <Image
                src={require('@/assets/image/news/image-01.png')}
                alt="news-image"
                className="max-h-full max-w-full"
                width={600}
                height={600}
              />
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="justify-end">
          <DialogClose onClick={onClick} asChild>
            <Button onClick={() => setItem(true)} asChild>
              <Link href="/portaldocolaborador/atestados">
                Verificar novidade
              </Link>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
