// react
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen max-h-[1080px] w-full max-w-screen-desktop-xl items-center justify-center">
      {children}
    </div>
  )
}
