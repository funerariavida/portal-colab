// cookies

// components
import DepartmentSection from '@/components/sections/department'
import TrainingSection from '@/components/sections/training'
import UtilsSection from '@/components/sections/utilities'

export default function PortalPage() {
  return (
    <div className="grid min-h-screen min-w-full grid-cols-1 grid-rows-[max-content_auto_auto_auto]">
      {/* title */}
      <div className="cols-span-1 grid w-full place-items-center bg-primary py-10">
        <h1 className="text-heading-3 font-bold text-white md:text-heading-2 lg:text-heading-1">
          Portal do Colaborador
        </h1>
      </div>

      {/* Utils section */}
      <UtilsSection />

      {/* Department section */}
      <DepartmentSection />

      {/* Training section */}
      <TrainingSection />
    </div>
  )
}
