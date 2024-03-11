import DepartmentSection from '@/components/sections/department'
import TrainingSection from '@/components/sections/training'
import UtilsSection from '@/components/sections/utilities'

export default function PortalPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      {/* title */}
      <div className="w-full bg-primary py-10 flex flex-col items-center justify-center">
        <h1 className="font-bold text-white text-heading-3 md:text-heading-2 lg:text-heading-1">
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
