import { StaticImageData } from 'next/image'

export type PaymentStatus = 'pending' | 'failed' | 'completed'

export type Payment = {
  id: string
  amount: number
  status: PaymentStatus
  username: string
  email: string
}

export type Transaction = {
  id: number
  title: string
  badge: string
  image: string | StaticImageData
  count: number
  date: string
}

export type ContentItem = {
  id: number
  title: string
  badge: string
  image: string
  count: number
}

export type UserInfo = {
  name: string
  email: string
  phone: string
  role: 'admin' | 'user'
  avatar: StaticImageData
  joinedAt: string
}
