import getCompTime from '@/actions/get-comp-time'
import { columns } from '@/components/data-table/comp-time/columns'
import { DataTable } from '@/components/data-table/comp-time/data-table'

export default async function BancoPage() {
  const data = await getCompTime('VICTOR JERRYSSON GAMA BASTOS')

  return (
    <div className="grid w-full grid-rows-[130px_max-content]">
      <div className="row-span-1 w-full gap-3 bg-secondary flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl leading-10">Banco de horas</h1>
        <h2 className="text-zinc-300 text-xl leading-8">
          acompanhe seus lançamentos de horas extras
        </h2>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data.registros} />
      </div>
    </div>
  )
}
