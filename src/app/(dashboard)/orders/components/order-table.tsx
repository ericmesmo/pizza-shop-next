'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'
import { TableBody } from '@/components/ui/table'

import { OrderTableRow } from './order-table-row'

export default function OrderTable() {
  const searchParams = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () => getOrders({ pageIndex, orderId, customerName, status }),
  })

  return (
    <TableBody>
      {result &&
        result.orders.map((order) => (
          <OrderTableRow key={order.orderId} order={order} />
        ))}
    </TableBody>
  )
}
