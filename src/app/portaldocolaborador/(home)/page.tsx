'use client'

import HomePageLoader from '@/components/home-page-loader'

// section
import DepartmentSection from '@/components/sections/department'
import TrainingSection from '@/components/sections/training'
import UtilsSection from '@/components/sections/utilities'

import LinkProps from '@/types/links'

import axios from 'axios'
import { Suspense } from 'react'

export default async function PortalPage() {
  const data: LinkProps[] = await axios({
    url: `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/links`,
    method: 'get',
  }).then((res) => res.data.data)

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Suspense fallback={<HomePageLoader />}>
        <UtilsSection
          className="h-full w-full flex flex-col items-between justify-start"
          cardVariant="primary"
          data={data}
        />

        {/* Training section */}
        <TrainingSection
          data={data}
          className="h-[60vh] xl:h-screen bg-primary w-full flex flex-col gap-10 lg:gap-20 items-center justify-center"
        />

        {/* Department section */}
        <DepartmentSection
          data={data}
          cardVariant="secondary"
          className="p-3 h-full lg:h-screen w-full flex flex-col gap-10 items-center justify-center"
        />
      </Suspense>
    </div>
  )
}
