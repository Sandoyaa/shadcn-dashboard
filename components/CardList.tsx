import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { popularContent } from '@/data/popular-content'
import { latestTransactions } from '@/data/transactions'
import dayjs from 'dayjs'
import Image from 'next/image'

export const CardList = ({ title }: { title: string }) => {
  const isTransactions = title !== 'Popular Content'
  const list = isTransactions ? latestTransactions : popularContent
  return (
    <div>
      <h1 className='text-lg font-medium mb-6'>{title}</h1>
      <div className='flex flex-col gap-2'>
        {list.map((item) => (
          <Card key={item.id} className='flex-row items-center justify-between gap-4 p-4'>
            <div className='w-12 h-12 shrink-0 rounded-full relative overflow-hidden'>
              <Image src={item.image} alt={item.title} fill className='object-cover' />
            </div>
            <CardContent className='flex-1 p-0'>
              <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
              <Badge variant='outline' className='text-xs'>
                {item.badge}
              </Badge>
            </CardContent>
            <CardFooter className='flex flex-col items-end p-0'>
              <span className='text-sm font-semibold'>
                {isTransactions ? `$${item.count}` : `${(item.count / 1000).toFixed(1)}K views`}
              </span>
              {'date' in item && (
                <span className='text-xs text-muted-foreground'>{dayjs(item.date).format('MMM D')}</span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
