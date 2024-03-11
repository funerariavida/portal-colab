import DepartmentSection from '@/components/sections/department'
import TrainingSection from '@/components/sections/training'
import UtilsSection from '@/components/sections/utilities'

export default function PortalPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      {/* title */}
      <div className="w-full bg-primary h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
          Portal do Colaborador
        </h1>
      </div>
      <UtilsSection />

      {/* Training section */}
      <TrainingSection />

      {/* Department section */}
      <DepartmentSection />
    </div>
  )
}
