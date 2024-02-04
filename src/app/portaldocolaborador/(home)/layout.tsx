'use client'

import { useLayoutEffect, useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import FullPageLoader from "@/components/full-page-loader";

import { useSessionStorage } from "@/hooks/use-session-storage";
import { useRouter } from "next/navigation";
import { CollabContextProvider, useCollabContext } from "@/context/collaborator";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, SetIsLoading] = useState<boolean>(true)
  const {collab} = useCollabContext()
  const {getItem} = useSessionStorage(process.env.SESSION_STORAGE_NAME)
  const {push} = useRouter()

  useLayoutEffect(() => {
    if(!getItem() && !collab){
      push('/portaldocolaborador/login')
    }
    
    setTimeout(() => {
      SetIsLoading(false)
    }, 2000)
  })

  if(isLoading) {
    return <FullPageLoader />
  }

  if(!isLoading){
    return (
      <div className='h-screen w-full'>
        <CollabContextProvider>
          <Header />
          <main className="flex w-full min-h-screen flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
      </CollabContextProvider>
      </div>
    )
  }
}
