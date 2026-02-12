import { AppLineChart } from '@/components/AppLineChart'
import { CardList } from '@/components/CardList'
import { DashboardCard } from '@/components/DashboardCard'
import { EditUser } from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { currentUser } from '@/constants/user'
import { BadgeCheck, Crown, Shield, Star } from 'lucide-react'

export async function generateStaticParams() {
  return [{ username: 'Sandoya' }]
}

export default function SingleUserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/users'>Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentUser.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/*CONTAINER*/}
      <div className='mt-4 flex flex-col xl:flex-row gap-8'>
        {/*LEFT*/}
        <div className='w-full xl:w-1/3 space-y-6'>
          <DashboardCard>
            <h1 className='text-xl font-semibold'>User Badges</h1>
            <div className='flex gap-4 mt-4'>
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border border-blue-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Verified User</h1>
                  <p className='text-sm text-muted-foreground'>This user has been verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Crown size={36} className='rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Premium Member</h1>
                  <p className='text-sm text-muted-foreground'>This user has an active premium subscription.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield size={36} className='rounded-full bg-green-500/30 border border-green-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Trusted Seller</h1>
                  <p className='text-sm text-muted-foreground'>This user has completed 50+ successful transactions.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Star size={36} className='rounded-full bg-purple-500/30 border border-purple-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Top Contributor</h1>
                  <p className='text-sm text-muted-foreground'>This user is among the top 5% of content creators.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </DashboardCard>

          <DashboardCard>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit user</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className='space-y-4 mt-4'>
              <div className='flex flex-col gap-2 mb-8'>
                <p className='text-sm text-muted-foreground'>Profile completion</p>
                <Progress value={66} />
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>Username:</span>
                <span>{currentUser.name}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>Email:</span>
                <span>{currentUser.email}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>Phone:</span>
                <span>{currentUser.phone}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-semibold'>Role:</span>
                <Badge>{currentUser.role}</Badge>
              </div>
              <p className='text-sm text-muted-foreground mt-4'>Joined on {currentUser.joinedAt}</p>
            </div>
          </DashboardCard>

          <DashboardCard>
            <CardList title='Recent Transactions' />
          </DashboardCard>
        </div>

        {/*RIGHT*/}
        <div className='w-full xl:w-2/3 space-y-6'>
          <DashboardCard className='space-y-2'>
            <div className='flex items-center gap-2'>
              <Avatar className='size-12'>
                <AvatarImage src={currentUser.avatar.src} />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <h1 className='text-xl font-semibold'>{currentUser.name}</h1>
            </div>
            <p className='text-sm text-muted-foreground'>Lorem ipsum</p>
          </DashboardCard>
          <DashboardCard>
            <h1 className='text-xl font-semibold'>User Activity</h1>
            <AppLineChart />
          </DashboardCard>
        </div>
      </div>
    </div>
  )
}
