'use client'

import { ComponentProps } from 'react'

import Link from 'next/link'

import { useSessionStorage } from '@/hooks/use-session-storage'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import useFormatter from '@/hooks/use-formatter'
import { LogOut } from 'lucide-react'
import HeaderNavigation from '../header-navigation'

export default function HeaderInfo({ ...props }: ComponentProps<'div'>) {
  const { removeItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )

  const { username, userrole } = useFormatter()

  return (
    <div {...props}>
      <HeaderNavigation />
      <Separator
        orientation="vertical"
        className="w-[2px] h-full hidden lg:flex bg-primary"
      />
      <div className="flex-col hidden mr-2 lg:flex">
        <h1 className="text-base font-bold capitalize">
          {username ?? 'Usuário'}
        </h1>
        <h2 className="text-sm uppercase">{userrole ?? 'Cargo'}</h2>
      </div>
      <Button
        asChild
        variant={'outline'}
        onClick={() => removeItem()}
        className="hidden lg:flex hover:bg-transparent hover:text-primary"
      >
        <Link href={'/portaldocolaborador/login'}>
          <LogOut className="w-4 h-4 mr-4" />
          <span className="text-base">Sair</span>
        </Link>
      </Button>
    </div>
  )
}
