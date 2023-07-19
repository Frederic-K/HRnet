export default function getDate(data) {
  console.log('modeling data', data)
  const startDate = Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(data)

  return startDate
}
