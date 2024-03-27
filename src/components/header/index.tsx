import Image from 'next/image'

import Logo from '@/assets/logo/logo-primary.png'

import Link from 'next/link'
import HeaderInfo from './header-info'
import HeaderSheet from './header-sheet'

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex h-20 w-full max-w-[1920px] items-center justify-center bg-background px-3 py-6 shadow-md lg:px-5">
      <Link href={'/portaldocolaborador'} className="ms-7 w-32 lg:m-0">
        <Image className="w-full" src={Logo} alt="Logomarca" />
      </Link>
      <HeaderInfo className="ms-auto flex h-full items-center justify-center gap-4" />
      <HeaderSheet />
    </header>
  )
}
