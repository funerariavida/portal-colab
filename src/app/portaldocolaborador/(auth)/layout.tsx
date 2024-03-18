import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full max-w-screen-desktop-xl max-h-[1080px] items-center justify-center">
      {children}
    </div>
  )
}
