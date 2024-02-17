export function formatToLocaleStringByCents(number: number) {
  return (number / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatToLocalString(number: number) {
  return number.toLocaleString('pt-BT')
}
