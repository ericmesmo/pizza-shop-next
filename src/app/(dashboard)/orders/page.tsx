import { ArrowRight, Search, X } from 'lucide-react'
import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const metadata: Metadata = {
  title: 'Orders',
}

export default function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>

      <div className="space-y-4">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>

          <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
        </form>

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

            <TableBody>
              <TableRow>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">
                  1234
                </TableCell>
                <TableCell className="text-muted-foreground">
                  Há 15 minutos
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">Duda Pelc</TableCell>
                <TableCell className="font-medium">R$ 149,09</TableCell>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Aprovar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="xs">
                    <X className="mr-2 h-3 w-3" />
                    Cancelar
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
