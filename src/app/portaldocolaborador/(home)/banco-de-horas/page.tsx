import getCompTime from '@/actions/get-comp-time'

export default async function BancoPage() {
  const data = await getCompTime('VICTOR JERRYSSON GAMA BASTOS')

  console.log(data)

  return (
    <div className="grid grid-rows-[130px_max-content]">
      <div className="row-span-1 flex items-center justify-center">
        <h1>Banco de horas</h1>
      </div>
      {/* <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div> */}
    </div>
  )
}
