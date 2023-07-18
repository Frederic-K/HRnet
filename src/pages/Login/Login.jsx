import { useUser } from '../../services/API/useUser'
import { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { clearState, userSelector } from '../../features/userSlice'

import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

import Logo from '../../assets/WealthHealth_Logo_1.png'
import SpinLoader from '../../components/Loader/spinLoader'
import xcrossClose from '../../assets/close.png'
import LiveClock from '../../components/LiveClock/LiveClock'
import LiveDate from '../../components/LiveDate/LiveDate'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

export default function Login() {
  const dispatch = useDispatch()
  const userId = useRef()
  const [isModalShown, setIsModalShow] = useState(false)

  // let today = new Date()
  // let date =
  //   today.getDate() +
  //   '-' +
  //   parseInt(today.getMonth() + 1) +
  //   '-' +
  //   today.getFullYear()

  // console.log(date)

  const {
    isFetching,
    isError,
    errorMessage,
    successMessage,
    id,
    firstName,
    lastName,
  } = useSelector(userSelector)
  // console.log('id', id)

  // Manage opening the form to update user's names
  const HandleOpenModal = () => {
    // Ensure that the form is closed
    // HandleCloseModal()
    // Manage form's local state
    setIsModalShow(true)
  }

  const HandleCloseModal = () => {
    dispatch(clearState())
    setIsModalShow(false)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    // console.log('userIduseRef', userId.current.value)
    dispatch(useUser(userId.current.value))
  }
  const HandleReset = () => {
    dispatch(clearState())
  }

  const HandleNewInput = () => {
    dispatch(clearState())
  }

  useEffect(() => {
    if (id) {
      toast.success(successMessage)
      HandleOpenModal()
    } else if (isError) {
      toast.error(errorMessage, { position: 'top-center' })
    }
    // eslint-disable-next-line
  }, [isError, id])

  return (
    <>
      <div>
        <Toaster />
      </div>
      <header className="login__header">
        {/* <div className="login__header--date"> {date}</div> */}
        <div className="login__header--date">
          <LiveDate />
        </div>
        {/* <div className="login__header--liveClock">
          <LiveClockUpdate />
        </div> */}
        <div className="login__header--liveClock">
          <LiveClock />
        </div>
        <div className="login__header--title">WHEALTH HEALTH</div>
      </header>
      <main className="login__container">
        {isModalShown ? (
          <div className="modale__activity">
            <div className="modale__activity--container">
              <div
                className="modale__activity--closeBtn"
                onClick={() => HandleCloseModal()}
              >
                <img src={xcrossClose} alt="Close button" />
              </div>
              <div className="modale__activity--logo">
                <img src={Logo} alt="Logo Wealth Health" />
              </div>
              <div className="modale__activity--name">
                Welcome <br /> {firstName} {lastName}
              </div>
              <div className="modale__activity--actionTitle">
                Please choose your activity
              </div>
              <div className="modale__activity--links">
                <NavLink
                  to="/creation-employee"
                  className="modale__activity--link"
                >
                  <Button variant="contained" fullWidth>
                    Add Employee
                  </Button>
                </NavLink>
                <NavLink
                  to="/manage-employees"
                  className="modale__activity--link"
                >
                  <Button variant="contained" fullWidth>
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
                  HandleSubmit(e)
                }}
              >
                <div className="login__form--textField">
                  {!isError ? (
                    <TextField
                      className="login__form--input"
                      fullWidth
                      id="userId"
                      label="userId"
                      name="userId"
                      variant="outlined"
                      inputRef={userId}
                      onChange={() => {
                        HandleNewInput()
                      }}
                    />
                  ) : (
                    <TextField
                      className="login__form--input"
                      error
                      fullWidth
                      id="errorUserId"
                      name="errorUserId"
                      label="errorUserId"
                      // defaultValue="Press Reset"
                      helperText="Incorrect entry."
                      inputRef={userId}
                      onChange={() => {
                        HandleNewInput()
                      }}
                    />
                  )}
                </div>
                <div className="login__form--btn">
                  <Stack direction="row" spacing={2}>
                    <Button
                      className="login__form--btn-reset"
                      variant="outlined"
                      type="reset"
                      startIcon={<DeleteIcon />}
                      fullWidth
                      onClick={() => {
                        HandleReset()
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      className="login__form--btn-submit"
                      variant="contained"
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
