// React
import { useState, useRef, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
// Redux User
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, clearUserState } from '../../features/userSlice'
// Redux Add employee
import { addEmployee } from '../../features/employeeSlice'
// Components
import Header from '../../components/Header/Header'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
// Field nd button
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
// DatePicker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/de'
import 'dayjs/locale/en-gb'

// CustomActionBar for date picker
// import DialogActions from '@mui/material/DialogActions'
// import Menu from '@mui/material/Menu'
// import { useLocaleText } from '@mui/x-date-pickers/internals'
// import { unstable_useId as useId } from '@mui/utils'
// import { Clear } from '@mui/icons-material'

// Dropdown menu
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
// Datas
import { departmentsDatas } from '../../services/Datas/departementsDatas'
import { statesDatas } from '../../services/Datas/statesDatas'
// uuid
import { v4 as uuidv4 } from 'uuid'

export default function CreateEmployee() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useSelector(userSelector)

  useEffect(() => {
    if (!id) {
      dispatch(clearUserState())
      navigate('/')
    }
    // eslint-disable-next-line
  }, [id])

  const departmentsNames = departmentsDatas
  const [departement, setDepartement] = useState('')
  const handleChangeDepartement = (event) => {
    setDepartement(event.target.value)
  }

  const stateNames = statesDatas
  const [locationState, setLocationState] = useState('')
  const handleChangeLocationState = (event) => {
    setLocationState(event.target.value)
  }
  const uniqueID = uuidv4()
  // const shortUniqueID = uniqueID.slice(0, 13)
  const firstNameInput = useRef()
  const dateOfBirthInput = useRef()
  const lastNameInput = useRef()
  const startDateInput = useRef()
  const streetInput = useRef()
  const cityInput = useRef()
  const zipCodeInput = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const creationFormInputs = {
      employeeID: uniqueID,
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      dateOfBirth: dateOfBirthInput.current.value,
      startDate: startDateInput.current.value,
      department: departement,
      street: streetInput.current.value,
      city: cityInput.current.value,
      zipCode: zipCodeInput.current.value,
      state: locationState,
    }
    if (
      creationFormInputs.firstName !== '' &&
      creationFormInputs.lastName !== '' &&
      creationFormInputs.dateOfBirth !== '' &&
      creationFormInputs.startDate !== '' &&
      creationFormInputs.department !== '' &&
      creationFormInputs.street !== '' &&
      creationFormInputs.city !== '' &&
      creationFormInputs.zipCode !== '' &&
      creationFormInputs.state !== ''
    ) {
      console.log('creationFormInputs', creationFormInputs)
      dispatch(addEmployee(creationFormInputs))
    } else {
      toast.error('Emplty fields are not allowed')
    }
  }
  // <<<<<<<<<<<< If action bar on date picker needed >>>>>>>>>>>
  // function CustomActionBar(props) {
  //   const { onAccept, onClear, onCancel, onSetToday, actions, className } =
  //     props
  //   const localeText = useLocaleText()
  //   const [anchorEl, setAnchorEl] = useState(null)
  //   const open = Boolean(anchorEl)
  //   const id = useId()

  //   if (actions == null || actions.length === 0) {
  //     return null
  //   }

  //   const menuItems = actions?.map((actionType) => {
  //     switch (actionType) {
  //       case 'clear':
  //         return (
  //           <MenuItem
  //             data-mui-test="clear-action-button"
  //             onClick={() => {
  //               onClear()
  //               setAnchorEl(null)
  //             }}
  //             key={actionType}
  //           >
  //             {localeText.clearButtonLabel}
  //           </MenuItem>
  //         )

  //       case 'cancel':
  //         return (
  //           <MenuItem
  //             onClick={() => {
  //               setAnchorEl(null)
  //               onCancel()
  //             }}
  //             key={actionType}
  //           >
  //             {localeText.cancelButtonLabel}
  //           </MenuItem>
  //         )

  //       case 'accept':
  //         return (
  //           <MenuItem
  //             onClick={() => {
  //               setAnchorEl(null)
  //               onAccept()
  //             }}
  //             key={actionType}
  //           >
  //             {localeText.okButtonLabel}
  //           </MenuItem>
  //         )

  //       case 'today':
  //         return (
  //           <MenuItem
  //             data-mui-test="today-action-button"
  //             onClick={() => {
  //               setAnchorEl(null)
  //               onSetToday()
  //             }}
  //             key={actionType}
  //           >
  //             {localeText.todayButtonLabel}
  //           </MenuItem>
  //         )

  //       default:
  //         return null
  //     }
  //   })

  //   return (
  //     <DialogActions className={className}>
  //       <Button
  //         id={`picker-actions-${id}`}
  //         aria-controls={open ? 'basic-menu' : undefined}
  //         aria-haspopup="true"
  //         aria-expanded={open ? 'true' : undefined}
  //         onClick={(event) => setAnchorEl(event.currentTarget)}
  //       >
  //         Actions
  //       </Button>
  //       <Menu
  //         id="basic-menu"
  //         anchorEl={anchorEl}
  //         open={open}
  //         onClose={() => setAnchorEl(null)}
  //         MenuListProps={{
  //           'aria-labelledby': `picker-actions-${id}`,
  //         }}
  //       >
  //         {menuItems}
  //       </Menu>
  //     </DialogActions>
  //   )
  // }

  return (
    <>
      <div className="layout__header">
        <Header />
      </div>
      <div>
        <Toaster />
      </div>
      <section className="createEmployee__banner">
        <div className="createEmployee__banner--title">Create employees</div>
      </section>
      <main className="createEmployee__container">
        <Box className="createEmployee__form" component="form">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <h2 className="createEmployee__form--caption">
                Personnal informations <span>(required field *)</span>
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
                inputRef={firstNameInput}
              />
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en"
              >
                <DatePicker
                  label="Birthdate *"
                  inputRef={dateOfBirthInput}
                  // <<<<<<<<<<<< If action bar on date picker needed >>>>>>>>>>>
                  // slots={{
                  //   actionBar: CustomActionBar,
                  // }}
                  slotProps={{
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                  }}
                />
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
                inputRef={lastNameInput}
              />
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en"
              >
                <DatePicker
                  label="Start day *"
                  inputRef={startDateInput}
                  slotProps={{
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                  }}
                />
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
                Address informations <span>(required field *)</span>
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
                inputRef={streetInput}
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
                inputRef={cityInput}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                id="zipCode"
                name="zipCode"
                label="Zip Code"
                variant="outlined"
                type="number"
                required
                fullWidth
                inputRef={zipCodeInput}
              />
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth>
                <InputLabel id="state-label">State *</InputLabel>
                <Select
                  labelId="state"
                  id="state"
                  name="state"
                  value={locationState}
                  onChange={handleChangeLocationState}
                  input={<OutlinedInput label="state" />}
                >
                  {stateNames.map((locationState) => (
                    <MenuItem
                      key={locationState.abbreviation}
                      value={locationState.abbreviation}
                    >
                      {locationState.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <Stack direction="row" spacing={2}>
                <Grid xs={6}>
                  {/* <NavLink to="/">
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      type="button"
                      fullWidth
                    >
                      Cancel
                    </Button>
                  </NavLink> */}

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
                    onClick={(e) => {
                      handleSubmit(e)
                    }}
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
