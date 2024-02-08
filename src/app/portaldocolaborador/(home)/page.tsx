'use client'

import useLinks from '@/hooks/use-links'

import HomePageLoader from '@/components/home-page-loader'

// section
import DepartmentSection from '@/components/sections/department'
import TrainingSection from '@/components/sections/training'
import UtilsSection from '@/components/sections/utilities'

export default function PortalColaborador() {
  const {data, isLoading, error} = useLinks()

  if(!data) return <HomePageLoader />

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <UtilsSection
        className='h-full w-full flex flex-col items-between justify-start'
        cardVariant='primary'
        data={data}
        />

      {/* Training section */}
      <TrainingSection 
        data={data}
        className='h-[60vh] xl:h-screen bg-primary w-full flex flex-col gap-10 lg:gap-20 items-center justify-center'
      />

      {/* Department section */}
      <DepartmentSection 
        data={data}
        cardVariant='secondary'
        className='p-3 h-full lg:h-screen w-full flex flex-col gap-10 items-center justify-center'
      />
    </div>
  )
}
