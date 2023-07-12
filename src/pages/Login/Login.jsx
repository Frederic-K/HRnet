import * as React from 'react'
import { useUser } from '../../services/API/useUser'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearState, userSelector } from '../../features/userSlice'

// import toast from 'react-hot-toast'

import Logo from '../../assets/WealthHealth_Logo_1.png'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Local states
  const userId = useRef()

  // Grab user state (store)
  const { errorMessage } = useSelector(userSelector)

  // Manage login form to authentificate user
  const HandleSubmit = (e) => {
    e.preventDefault()
    // Call api to login
    console.log('userIduseRef', userId.current.value)
    dispatch(useUser(userId.current.value))
  }
  const HandleReset = () => {
    dispatch(clearState())
  }

  return (
    <main className="login__container">
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
              {!errorMessage ? (
                <TextField
                  className="login__form--input"
                  fullWidth
                  id="userId"
                  label="userId"
                  variant="outlined"
                  inputRef={userId}
                />
              ) : (
                <TextField
                  className="login__form--input"
                  error
                  fullWidth
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  inputRef={userId}
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
                  // sx={{ width: 240, maxWidth: '100%' }}
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
                  // sx={{ width: 240, maxWidth: '100%' }}
                >
                  Login
                </Button>
              </Stack>
            </div>
          </Box>
        </div>
      </section>
    </main>
  )
}
