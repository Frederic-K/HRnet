import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearState } from '../../features/userSlice'

import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

export default function Footer() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handelHomeClick = () => {
    navigate('/')
  }

  const handelLogoutClick = () => {
    dispatch(clearState())
    navigate('/')
  }

  return (
    <footer className="footer">
      <div className="footer__blocks">
        <Button
          variant="outlined"
          size="small"
          className="footer__navHome"
          onClick={() => {
            handelHomeClick()
          }}
        >
          <LoginIcon className="footer__navHome--btn" />
        </Button>
        <div className="footer__copyright">
          Copyright @ {new Date().getFullYear()} Whealth Health
        </div>
      </div>
      <div className="footer__blocks">
        <a className="footer__mail" href="mailto:contact@wealthhealth.com">
          Contact
        </a>
        <a className="footer__mail" href="mailto:assistance@wealthhealth.com">
          Assistance
        </a>
        <Button
          variant="outlined"
          size="small"
          className="footer__logout"
          onClick={() => {
            handelLogoutClick()
          }}
        >
          <LogoutIcon className="footer__logout--btn" />
        </Button>
      </div>
    </footer>
  )
}
