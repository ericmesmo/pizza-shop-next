import { Metadata } from 'next'
import { Suspense } from 'react'

import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import OrderPagination from './components/order-pagination'
import OrderTable from './components/order-table'
import { OrderTableFilters } from './components/order-table-filters'

export const metadata: Metadata = {
  title: 'Orders',
}

export default async function Orders() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

      <div className="space-y-4">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16"></TableHead>
                <TableHead className="w-32">Identificador</TableHead>
                <TableHead className="w-44">Realizado há</TableHead>
                <TableHead className="w-32">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-36">Total de pedido</TableHead>
                <TableHead className="w-40"></TableHead>
                <TableHead className="w-32"></TableHead>
              </TableRow>
            </TableHeader>

            <OrderTable />
          </Table>
        </div>

        <OrderPagination />
      </div>
    </div>
  )
}
