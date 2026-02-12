import { currentUser } from '@/constants/user'
import { Transaction } from '@/types'

export const latestTransactions: Transaction[] = [
  {
    id: 1,
    title: currentUser.name,
    badge: 'Renewed subscription',
    image: currentUser.avatar,
    count: 250,
    date: '2026-02-12'
  },
  {
    id: 2,
    title: 'Maria Garcia',
    badge: 'Payment failed',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    count: 130,
    date: '2026-02-11'
  },
  {
    id: 3,
    title: 'James Lee',
    badge: 'Bought product',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    count: 475,
    date: '2026-02-10'
  },
  {
    id: 4,
    title: 'Sophie Turner',
    badge: 'Refund issued',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    count: 90,
    date: '2026-02-09'
  },
  {
    id: 5,
    title: 'David Kim',
    badge: 'Upgraded plan',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    count: 320,
    date: '2026-02-08'
  }
]
