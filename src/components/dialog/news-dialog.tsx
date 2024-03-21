import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { MessageCircleQuestion } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require('../../../package.json').version

export default function NewsDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={'secondary'} className="mt-3 w-full">
          <span className="mr-4">Novidades</span>
          <MessageCircleQuestion className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <h2 className="text-xl font-bold">O que há de novo</h2>
            <span className="text-sm font-semibold text-zinc-500">
              Ver. {version}
            </span>
          </DialogTitle>
          <DialogDescription className="grid grid-rows-2 gap-2">
            <p className="row-span-1 text-base">
              O portal do colaborador agora conta com uma página para visualizar
              <Link
                href={'portaldocolaborador/atestados'}
                target="blank"
                className="mx-1 font-bold text-primary hover:underline"
              >
                atestados e declarações
              </Link>
              enviadas.
              <br /> <br />
              Utilize a mais nova ferramenta através dos links disponíveis no
              cabeçalho
            </p>

            <div className="row-span-1 max-w-[600px]">
              <Image
                src={require('@/assets/image/news/image-01.png')}
                alt="news-image"
                className="max-h-full max-w-full"
                width={600}
                height={600}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
