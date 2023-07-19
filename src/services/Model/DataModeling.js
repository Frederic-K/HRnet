function getDate(data) {
  const startDate = Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(data)
  return startDate
}

export default getDate()
