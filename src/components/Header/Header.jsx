import LiveDate from '../LiveDate/LiveDate'
import LiveClock from '../LiveClock/LiveClock'

export default function Header() {
  return (
    <div className="header">
      <div className="header__liveDate">
        <LiveDate />
      </div>
      <div className="header__liveClock">
        <LiveClock />
      </div>
      <div className="header__title">WHEALTH HEALTH</div>
    </div>
  )
}
