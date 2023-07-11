import * as React from 'react'
import { useUser } from '../../services/API/useUser'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSelector } from '../../features/userSlice'

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
  const userID = useRef()

  // Grab user state (store)
  // const { isFetching, token, isError, errorMessage, successMessage } =
  //   useSelector(userSelector)

  // Manage login form to authentificate user
  const HandleSubmit = (e) => {
    e.preventDefault()
    // Call api to login
    console.log('userIduseRef', userID.current.value)
    dispatch(useUser(userID.current.value))
  }

  return (
    <main className="login">
      <section className="login__content">
        <div className="login__content--header">
          <img src={Logo} alt="Logo Wealth Health" />
          <h1 className="login__content--title">Welcome to HRnet</h1>
        </div>
        <div>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              HandleSubmit(e)
            }}
          >
            <div>
              <TextField
                required
                id="userID"
                label="userId required"
                inputRef={userID}
                // defaultValue="Hello World"
              />
            </div>
            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  type="reset"
                  startIcon={<DeleteIcon />}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
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
