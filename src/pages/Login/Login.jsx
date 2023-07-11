import * as React from 'react'
import { useUser } from '../../services/API/useUser'
import { useRef } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import Logo from '../../assets/WealthHealth_Logo_1.png'

export default function Login() {
  const userID = useRef()

  return (
    <main className="login">
      <section className="login__content">
        <div className="login__content--header">
          <img src={Logo} alt="Logo Wealth Health" />
          <h1 className="login__content--title">Welcome to HRnet</h1>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="userID"
                  label="userId required"
                  ref={userID}
                  // defaultValue="Hello World"
                />
              </div>
            </Box>
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
              <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Login
              </Button>
            </Stack>
          </div>
        </form>
      </section>
    </main>
  )
}
