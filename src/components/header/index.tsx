import Image from 'next/image'

import Logo from '@/assets/image/logo.png'

import Link from 'next/link'
import HeaderInfo from './header-info'
import HeaderSheet from './header-sheet'

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full max-w-[1920px] h-20 px-3 py-6 shadow-md bg-background lg:px-5">
      <Link href={'/portaldocolaborador'} className="w-32 ms-7 lg:m-0">
        <Image className="w-full" src={Logo} alt="Logomarca" />
      </Link>
      <HeaderInfo className="flex items-center justify-center h-full gap-4 ms-auto" />
      <HeaderSheet />
    </header>
  )
}
