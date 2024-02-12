'use client'

import { useQuery } from '@tanstack/react-query'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'

export default function OrderPagination() {
  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })
  return <Pagination currentPage={0} totalPages={2} perPage={20} />
}
