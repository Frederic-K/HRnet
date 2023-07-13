import { useState, useEffect } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return (
    <div className="liveClock">
      <div>{time.toLocaleTimeString()}</div>
    </div>
  )
}
