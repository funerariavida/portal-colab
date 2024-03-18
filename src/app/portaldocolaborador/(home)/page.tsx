import DepartmentSection from '@/components/sections/department'
import TrainingSection from '@/components/sections/training'
import UtilsSection from '@/components/sections/utilities'

export default function PortalPage() {
  return (
    <div className="grid grid-cols-1 grid-rows-[max-content_auto_384px_auto] w-full min-h-screen">
      {/* title */}
      <div className="w-full bg-primary py-10 cols-span-1 grid place-items-center">
        <h1 className="font-bold text-white text-heading-3 md:text-heading-2 lg:text-heading-1">
          Portal do Colaborador
        </h1>
      </div>

      {/* Utils section */}
      <UtilsSection />

      {/* Training section */}
      <TrainingSection />

      {/* Department section */}
      <DepartmentSection />
    </div>
  )
}
