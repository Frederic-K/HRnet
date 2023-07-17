import Header from '../../components/Header/Header'

import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import 'dayjs/locale/de'
import 'dayjs/locale/en-gb'

export default function CreateEmployee() {
  return (
    <>
      <div className="layout__header">
        <Header />
      </div>
      <section className="createEmployee__banner">
        <div className="createEmployee__banner--title">Create employees</div>
      </section>
      <main className="createEmployee__container">
        <Box
          className="createEmployee__form"
          component="form"
          sx={{ flexGrow: 1 }}
        >
          <Grid container spacing={2}>
            <Grid xs={8}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DatePicker label="Birthdate" />
              </LocalizationProvider>
            </Grid>
            <Grid xs={8}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* <Grid xs={6}>
              <h2 className="createEmployee__form--birthDate-caption">
                Birtdate
              </h2>
            </Grid> */}
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DatePicker label="Start day" />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12}>
              <Stack direction="row" spacing={2}>
                <Grid xs={6}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    fullWidth
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid xs={6}>
                  <Button variant="contained" endIcon={<SendIcon />} fullWidth>
                    Send
                  </Button>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  )
}
