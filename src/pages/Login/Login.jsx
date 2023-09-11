// React
import { GetUserData } from '../../services/API/GetUserData'
import { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { clearUserState, userSelector } from '../../features/userSlice'
import { clearEmployeeState } from '../../features/employeeSlice'
// Toaster
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
// Components
import Logo from '../../assets/WealthHealth_Logo_1.png'
import SpinLoader from '../../components/Loader/spinLoader'
import xcrossClose from '../../assets/close.png'
import LiveClock from '../../components/LiveClock/LiveClock'
import LiveDate from '../../components/LiveDate/LiveDate'
import InputTextField from '../../components/InputTextField/InputTextField'
// Mui components
import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

export default function Login() {
  const dispatch = useDispatch()
  const userId = useRef()
  const [isModalShown, setIsModalShow] = useState(false)

  const { isFetching, isError, errorMessage, id, firstName, lastName } =
    useSelector(userSelector)

  const handleOpenModal = () => {
    setIsModalShow(true)
  }

  const handleCloseModal = () => {
    dispatch(clearUserState())
    dispatch(clearEmployeeState())
    setIsModalShow(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(GetUserData(userId.current.value))
  }
  const handleReset = () => {
    dispatch(clearUserState())
  }

  const handleNewInput = () => {
    if (isError === true) {
      dispatch(clearUserState())
    }
  }

  useEffect(() => {
    if (id) {
      toast.success('Successful connection')
      handleOpenModal()
    } else if (isError) {
      toast.error(errorMessage, { position: 'top-center' })
    } else if (!id) {
      handleCloseModal()
    }
    // eslint-disable-next-line
  }, [isError, id])

  return (
    <>
      <div>
        <Toaster />
      </div>
      <header className="login__header">
        <div className="login__header--date">
          <LiveDate />
        </div>
        <div className="login__header--liveClock">
          <LiveClock />
        </div>
        <div className="login__header--title">WHEALTH HEALTH</div>
      </header>
      <main className="login__container">
        {isModalShown ? (
          <div className="modal__activity">
            <div className="modal__activity--container">
              <div
                className="modal__activity--closeBtn"
                onClick={() => handleCloseModal()}
              >
                <img src={xcrossClose} alt="Close button" />
              </div>
              <div className="modal__activity--logo">
                <img src={Logo} alt="Logo Wealth Health" />
              </div>
              <div className="modal__activity--name">
                Welcome <br /> {firstName} {lastName}
              </div>
              <div className="modal__activity--actionTitle">
                Please choose your activity
              </div>
              <div className="modal__activity--links">
                <NavLink
                  to="/creation-employee"
                  className="modal__activity--link"
                >
                  <Button
                    variant="contained"
                    aria-label="navigate to form"
                    fullWidth
                  >
                    Add Employee
                  </Button>
                </NavLink>
                <NavLink
                  to="/manage-employees"
                  className="modal__activity--link"
                >
                  <Button
                    variant="contained"
                    aria-label="navigate to list"
                    fullWidth
                  >
                    List of Employees
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        ) : isFetching ? (
          <SpinLoader />
        ) : (
          <section className="login">
            <div className="login__hero">
              <img src={Logo} alt="Logo Wealth Health" />
              <h1 className="login__hero--title">Welcome to HRnet</h1>
            </div>
            <div className="login__form-container">
              <Box
                className="login__form"
                component="form"
                sx={{
                  width: 500,
                  maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                  handleSubmit(e)
                }}
              >
                <InputTextField
                  isError={isError}
                  id={'userId'}
                  errorUserId={'errorUserId'}
                  label={'userId'}
                  errorLabel={'errorUserId'}
                  name={'userId'}
                  errorName={'errorUserId'}
                  helperText={'(mocked users : 110 or 120)'}
                  errorHelperText={
                    'Incorrect entry (mocked users : 110 or 120)'
                  }
                  inputRef={userId}
                  onChange={() => {
                    handleNewInput()
                  }}
                />
                <div className="login__form--btn">
                  <Stack direction="row" spacing={2}>
                    <Button
                      className="login__form--btn-reset"
                      variant="outlined"
                      aria-label="reset login"
                      type="reset"
                      startIcon={<DeleteIcon />}
                      fullWidth
                      onClick={() => {
                        handleReset()
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      className="login__form--btn-submit"
                      variant="contained"
                      aria-label="submit login"
                      type="submit"
                      endIcon={<SendIcon />}
                      fullWidth
                    >
                      Login
                    </Button>
                  </Stack>
                </div>
              </Box>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
