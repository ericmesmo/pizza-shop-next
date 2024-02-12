export function formatToLocaleString(number: number) {
  return new Intl.NumberFormat('pt-BR').format(number)
}
