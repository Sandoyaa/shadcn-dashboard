import { cn } from '@/lib/utils'

export const DashboardCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('bg-primary-foreground p-4 rounded-lg', className)}>{children}</div>
}
