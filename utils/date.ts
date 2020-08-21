export function dateFormatDots(date: string) {
  const newDate = new Date(date)
  return `${newDate.getFullYear()}. ${
    newDate.getMonth() + 1
  }. ${newDate.getDate()}.`
}
