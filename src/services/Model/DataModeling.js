export function modelingDate(data) {
  const date = Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(data)
  return date
}
