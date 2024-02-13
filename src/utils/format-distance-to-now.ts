import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDistanceToNowFn(
  date: string | number | Date,
  addSuffix = true,
) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix,
  })
}
