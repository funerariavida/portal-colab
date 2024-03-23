'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'

import { Home, LogOut } from 'lucide-react'

import useFormatter from '@/hooks/use-formatter'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import HeaderNavigation from '../header-navigation'

export default function HeaderInfo({ ...props }: ComponentProps<'div'>) {
  const clearAll = window.sessionStorage.clear()

  const { username, userrole } = useFormatter()

  return (
    <div {...props}>
      <HeaderNavigation />
      <Separator
        orientation="vertical"
        className="hidden h-full w-[2px] bg-zinc-400 lg:flex"
      />
      <div className="mr-2 hidden flex-col lg:flex">
        <h1 className="text-base font-bold capitalize">
          {username ?? 'Usuário'}
        </h1>
        <h2 className="text-sm uppercase">{userrole ?? 'Cargo'}</h2>
      </div>

      <Button
        asChild
        title="Ir para tela inicial"
        variant={'outline'}
        className="hidden hover:bg-transparent hover:text-primary lg:flex"
      >
        <Link href={'/portaldocolaborador'}>
          <Home className="mr-4 h-4 w-4" />
          <span className="text-base">Tela inicial</span>
        </Link>
      </Button>

      <Button
        asChild
        title="Sair da conta"
        variant={'outline'}
        onClick={() => clearAll}
        className="hidden hover:bg-transparent hover:text-primary lg:flex"
      >
        <Link href={'/portaldocolaborador/login'}>
          <LogOut className="mr-4 h-4 w-4" />
          <span className="text-base">Sair</span>
        </Link>
      </Button>
    </div>
  )
}
