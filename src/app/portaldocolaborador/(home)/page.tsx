import UtilsSection from '@/components/sections/utilities'

import HomeWrapper from '@/layout/home-wrapper'

export default function PortalPage() {
  return (
    <HomeWrapper>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        {/* title */}
        <div className="w-full bg-primary h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            Portal do Colaborador
          </h1>
        </div>
        <UtilsSection
          className="h-full w-full flex flex-col items-between justify-start"
          cardVariant="primary"
        />

        {/* Training section */}
        {/* <TrainingSection
        data={links}
        className="h-[60vh] xl:h-screen bg-primary w-full flex flex-col gap-10 lg:gap-20 items-center justify-center"
      /> */}

        {/* Department section */}
        {/* <DepartmentSection
        data={links}
        cardVariant="secondary"
        className="p-3 h-full lg:h-screen w-full flex flex-col gap-10 items-center justify-center"
      /> */}
      </div>
    </HomeWrapper>
  )
}
