export function formatToLocaleString(number: number) {
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
