import { AppAreaChart } from '@/components/AppAreaChart'
import { AppBarChart } from '@/components/AppBarChart'
import { AppPieChart } from '@/components/AppPieChart'
import { CardList } from '@/components/CardList'
import { DashboardCard } from '@/components/DashboardCard'
import { TodoList } from '@/components/TodoList'

export default function Homepage() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
      <DashboardCard className='lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppBarChart />
      </DashboardCard>
      <DashboardCard>
        <CardList title='Latest Transactions' />
      </DashboardCard>
      <DashboardCard>
        <AppPieChart />
      </DashboardCard>
      <DashboardCard>
        <TodoList />
      </DashboardCard>
      <DashboardCard className='lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppAreaChart />
      </DashboardCard>
      <DashboardCard>
        <CardList title='Popular Content' />
      </DashboardCard>
    </div>
  )
}
