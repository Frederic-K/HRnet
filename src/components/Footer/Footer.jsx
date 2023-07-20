import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearState } from '../../features/userSlice'

import Button from '@mui/material/Button'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

export default function Footer() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handelLogoutClick = () => {
    dispatch(clearState())
    navigate('/')
  }

  return (
    <footer className="footer">
      <div className="footer__copyright">
        Copyright @ {new Date().getFullYear()} Whealth Health
      </div>
      <div>
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
          <ExitToAppIcon className="footer__logout--btn" />
        </Button>
      </div>
    </footer>
  )
}
