// React
import { NavLink } from 'react-router-dom'
// Componenets
import LiveDate from '../LiveDate/LiveDate'
import LiveClock from '../LiveClock/LiveClock'
// Assets
import Logo from '../../assets/WealthHealth_Logo_1.png'
import addUserIcon from '../../assets/addUser.png'
import manageUsersIcon from '../../assets/manageUsers2.png'

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__nav--home">
        <img src={Logo} alt="Logo Logo Wealth Health" />
        <div className="header__title">WHEALTH HEALTH</div>
      </NavLink>
      <div className="header__period">
        <div className="header__period--liveDate">
          <LiveDate />
        </div>
        <div className="header__period__liveClock">
          <LiveClock />
        </div>
      </div>
      <nav className="header__nav--activity">
        <NavLink
          to="/creation-employee"
          className={({ isActive }) =>
            isActive ? 'nav__link--active' : 'nav__link'
          }
        >
          <div className="nav__link--title">
            <img src={addUserIcon} alt="Add an Employees" />
            <span>
              Create
              <br />
              Employee
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/manage-employees"
          className={({ isActive }) =>
            isActive ? 'nav__link--active' : 'nav__link'
          }
        >
          <div className="nav__link--title">
            <img src={manageUsersIcon} alt="List of Employees" />
            <span>
              Manage
              <br />
              Employees
            </span>
          </div>
        </NavLink>
      </nav>
    </header>
  )
}
