import { NavLink } from 'react-router-dom'

import LiveDate from '../LiveDate/LiveDate'
import LiveClock from '../LiveClock/LiveClock'

import Logo from '../../assets/WealthHealth_Logo_1.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header__period">
        <div className="header__period--liveDate">
          <LiveDate />
        </div>
        <div className="header__period__liveClock">
          <LiveClock />
        </div>
      </div>
      <div className="header__logo">
        <img src={Logo} alt="Logo Wealth Health" />
      </div>
      <div className="header__title">WHEALTH HEALTH</div>
    </header>
  )
}
