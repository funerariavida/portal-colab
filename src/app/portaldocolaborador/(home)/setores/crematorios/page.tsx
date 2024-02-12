'use client'

import axios from 'axios';

import useLinks from '@/hooks/use-links';
import { useEffect } from 'react';

export default function CrematorioPage() {
  const {data, isLoading, error} = useLinks();

  // if (!data) return <HomePageLoader />
  useEffect(() => {
    const res = axios({
      method: 'get',
      url: 'https://n8n.empresavida.com.br/webhook/v3/portal/content/',
      headers: {
        'token': process.env.API_CONTENT_KEY
      }
    }).then((res) => res.data)

    console.log(process.env.API_CONTENT_KEY)
  }, [])
  
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <div className='flex flex-wrap items-center justify-center h-full w-full'>
        <h1>crematorio</h1>
        {/* {}
        <LinkCard 
          title={}
          description='descrição'
          linkPath='/'
          icon={"a-arrow-up"}
          target='blank'
        /> */}
      </div>
    </div>
  ) 
}