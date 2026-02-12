import { columns } from '@/app/payments/columns'
import { DataTable } from '@/app/payments/data-table'
import { payments } from '@/data/payments'

export default async function PaymentsPage() {
  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
        <h1 className='font-semibold'>All Payments</h1>
      </div>
      <DataTable columns={columns} data={payments} />
    </div>
  )
}
