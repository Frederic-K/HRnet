import Header from '../../components/Header/Header'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, clearState } from '../../features/userSlice'

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

import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { departmentsDatas } from '../../services/Datas/departementsDatas'
import { statesDatas } from '../../services/Datas/statesDatas'
import useGetStates from '../../services/API/useGetStates'
import useGetDepartements from '../../services/API/useGetDepartements'

export default function CreateEmployee() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useSelector(userSelector)

  useEffect(() => {
    if (!id) {
      dispatch(clearState())
      navigate('/')
    }
  }, [id])

  // let urlDepartements = '../../services/Datas/departementsDatas.json'
  // let urlDepartements = '../../../public/departementsDatas.json'
  // const { data } = useGetDepartements(urlDepartements)
  // console.log('dataFetch', data)

  // const statesNames = statesDatas
  // console.log('statesNames', statesNames)

  const departmentsNames = departmentsDatas

  const [departement, setDepartement] = useState('')

  const handleChangeDepartement = (event) => {
    setDepartement(event.target.value)
  }
  //console.log('departement', departement)

  const stateNames = statesDatas

  const [state, setState] = useState('')

  const handleChangeState = (event) => {
    setState(event.target.value)
  }

  // console.log('state', state)

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
            <Grid xs={12}>
              <h2 className="createEmployee__form--caption">
                Personnal informations
              </h2>
            </Grid>
            <Grid xs={8}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                autoFocus
                required
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
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DatePicker label="Start day" />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth>
                <InputLabel id="departement-label">Departement *</InputLabel>
                <Select
                  labelId="departement"
                  id="departement"
                  name="departement"
                  required
                  value={departement}
                  onChange={handleChangeDepartement}
                  input={<OutlinedInput label="departement" />}
                >
                  {departmentsNames.map((departement) => (
                    <MenuItem key={departement} value={departement}>
                      {departement}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <h2 className="createEmployee__form--caption">
                Address informations
              </h2>
            </Grid>
            <Grid xs={12}>
              <TextField
                id="street"
                name="street"
                label="Street"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                id="city"
                name="city"
                label="City"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                id="zipCode"
                name="zipCode"
                label="Zip Code"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth>
                <InputLabel id="state-label">State *</InputLabel>
                <Select
                  labelId="state"
                  id="state"
                  name="state"
                  value={state}
                  onChange={handleChangeState}
                  input={<OutlinedInput label="state" />}
                >
                  {stateNames.map((state) => (
                    <MenuItem key={state.name} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <Stack direction="row" spacing={2}>
                <Grid xs={6}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    type="reset"
                    fullWidth
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid xs={6}>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                    fullWidth
                  >
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
