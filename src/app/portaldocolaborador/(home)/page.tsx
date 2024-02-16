'use client'

import HomePageLoader from '@/components/home-page-loader'
import DepartmentSection from '@/components/sections/department'
import TrainingSection from '@/components/sections/training'
import UtilsSection from '@/components/sections/utilities'

// section
import { useLinkContext } from '@/context/link'

import axios from 'axios'

import { useEffect } from 'react'

export default function PortalPage() {
  const { links, setLinks } = useLinkContext()

  useEffect(() => {
    axios({
      url: `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/links`,
      method: 'get',
    }).then((res) => {
      setLinks(res.data.data)
    })
  }, [links, setLinks])

  if (!links) return <HomePageLoader />

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <UtilsSection
        className="h-full w-full flex flex-col items-between justify-start"
        cardVariant="primary"
        data={links}
      />

      {/* Training section */}
      <TrainingSection
        data={links}
        className="h-[60vh] xl:h-screen bg-primary w-full flex flex-col gap-10 lg:gap-20 items-center justify-center"
      />

      {/* Department section */}
      <DepartmentSection
        data={links}
        cardVariant="secondary"
        className="p-3 h-full lg:h-screen w-full flex flex-col gap-10 items-center justify-center"
      />
    </div>
  )
}
