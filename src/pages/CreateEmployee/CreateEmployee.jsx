// React
import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// Redux User
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, clearUserState } from '../../features/userSlice'
import mockedEmployeesDatas from '../../mockedEmployeesDatas/MOCK_DATA-id.json'
// Redux Add employee
import { addEmployee } from '../../features/employeeSlice'
// Components
import Header from '../../components/Header/Header'
import { Toaster } from 'react-hot-toast'
// My info modal component
import { InfoModal } from 'info-modal-component'
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
import dayjs from 'dayjs'

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
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
// Datas
import { departmentsDatas } from '../../services/Datas/departmentsDatas'
import { statesDatas } from '../../services/Datas/statesDatas'
// uuid
import { v4 as uuidv4 } from 'uuid'

export default function CreateEmployee() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useSelector(userSelector)
  // Modal management
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!id) {
      dispatch(clearUserState())
      navigate('/')
    }
    // eslint-disable-next-line
  }, [id])

  const departmentsNames = departmentsDatas

  const stateNames = statesDatas

  // Generate unique ID
  const uniqueID = uuidv4()

  // To populate employee list with fake employees
  const handlePopulateClick = () => {
    const mockedEmployees = mockedEmployeesDatas
    mockedEmployees.forEach((fakeEmployee) =>
      dispatch(addEmployee(fakeEmployee)),
    )
  }

  // Handle datepicker state
  const [dateOfBirthValue, setDateOfBirthValue] = useState(null)
  const [startDateValue, setStartDateValue] = useState(null)

  // Employee
  const [employeeFormInputFields, setEmployeeFormInputFields] = useState({
    employeeID: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    zipCode: '',
    department: '',
    state: '',
  })

  // Internal management of invalid date from datepicker component
  const [errorDateOfBirth, setErrorDateOfBirth] = useState(null)

  const errorMessageDateOfBirth = useMemo(() => {
    switch (errorDateOfBirth) {
      case 'maxDate': {
        return 'Date required, age > 18yo'
      }

      case 'minDate': {
        return 'Date of birth required, age < 64yo'
      }

      case 'invalidDate': {
        return 'Date of birth is required'
      }

      default: {
        return null
      }
    }
  }, [errorDateOfBirth])

  const [errorStartDate, setErrorStartDate] = useState(null)

  const errorMessageStartDate = useMemo(() => {
    switch (errorStartDate) {
      // case 'maxDate': {
      //   return 'Date required, age > 18yo'
      // }

      case 'minDate': {
        return 'Start Day, age < 64yo'
      }

      case 'invalidDate': {
        return 'Start day is required'
      }

      default: {
        return null
      }
    }
  }, [errorStartDate])

  // Check form to avoid empty field nd invalid input
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const checkInputValues = (inputValues) => {
    let errors = {}
    if (inputValues.employeeID === '') {
      setEmployeeFormInputFields({
        ...employeeFormInputFields,
        employeeID: uniqueID,
      })
      // console.log('employeeId', employeeFormInputFields.employeeID)
    }
    if (inputValues.firstName.length < 2) {
      errors.firstName = 'First name is too short (min char 2)'
    }
    if (inputValues.lastName.length < 2) {
      errors.lastName = 'Last name is too short (min char 2)'
    }
    if (inputValues.street.length < 2) {
      errors.street = `Street's name is too short (min char 2)`
    }
    if (inputValues.city.length < 2) {
      errors.city = `City's name is too short (min char 2)`
    }
    if (inputValues.zipCode.length < 5) {
      errors.zipCode = 'Zip Code is too short (min num 5)'
    }
    if (inputValues.department === '') {
      errors.department = 'Department is required'
    }
    if (inputValues.state === '') {
      errors.state = 'State is required'
    }
    if (dateOfBirthValue === null || errorMessageDateOfBirth !== null) {
      errors.dateOfBirth = 'Invalid date of birth'
      setDateOfBirthValue('error')
      // console.log('dateOfBirth1', dateOfBirthValue)
    }
    if (startDateValue === null || errorMessageStartDate !== null) {
      errors.startDate = 'Invalid start day'
      setStartDateValue('error')
      // console.log('startDate1', startDateValue)
    }
    return errors
  }

  const handleChangeInput = (e) => {
    setEmployeeFormInputFields({
      ...employeeFormInputFields,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    setErrors(
      checkInputValues(
        employeeFormInputFields,
        dateOfBirthValue,
        startDateValue,
      ),
    )
    setSubmitting(true)
  }

  // useEffect(() => {
  //   if (employeeFormInputFields.employeeID === '') {
  //     setEmployeeFormInputFields({
  //       ...employeeFormInputFields,
  //       employeeID: uniqueID,
  //     })
  //     // console.log('employeeId', employeeFormInputFields.employeeID)
  //   }
  //   // eslint-disable-next-line
  // }, [employeeFormInputFields])

  useEffect(() => {
    if (
      dateOfBirthValue !== null &&
      dateOfBirthValue !== 'error' &&
      startDateValue !== null &&
      startDateValue !== 'error'
    ) {
      setEmployeeFormInputFields({
        ...employeeFormInputFields,
        dateOfBirth: dateOfBirthValue,
        startDate: startDateValue,
      })
      // console.log('dateOfBirth-valideForm', dateOfBirthValue)
      // console.log(
      //   'employeeFormInputFields-dateOfBirth',
      //   employeeFormInputFields.dateOfBirth,
      // )
      // console.log('startDateValidFrom', startDateValue)
      // console.log(
      //   'employeeFormInputFields-startDate',
      //   employeeFormInputFields.startDate,
      // )
    }
    // eslint-disable-next-line
  }, [dateOfBirthValue, startDateValue])

  useEffect(() => {
    if (employeeFormInputFields.zipCode !== '') {
      setEmployeeFormInputFields({
        ...employeeFormInputFields,
        zipCode: Number(employeeFormInputFields.zipCode),
      })
      console.log('zipCodeToNumb', employeeFormInputFields.zipCode)
    }
  }, [employeeFormInputFields.zipCode])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      validFormSubmit()
    }
    // eslint-disable-next-line
  }, [errors])

  const validFormSubmit = () => {
    dispatch(addEmployee(employeeFormInputFields))
    setIsModalOpen(true)
    resetEmployeeUniqueID()
  }

  const resetEmployeeUniqueID = () => {
    setEmployeeFormInputFields({
      ...employeeFormInputFields,
      employeeID: '',
    })
  }

  const handleResetClick = () => {
    resetEmployeeUniqueID()
    setDateOfBirthValue(null)
    setStartDateValue(null)
    setEmployeeFormInputFields({
      ...employeeFormInputFields,
      employeeID: '',
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      startDate: null,
      street: '',
      city: '',
      zipCode: '',
      department: '',
      state: '',
    })
    setErrors({})
    setSubmitting(false)
  }

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
              {errors.firstName ? (
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name error"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  required
                  error
                  helperText={`${errors.firstName}`}
                  value={employeeFormInputFields.firstName}
                  onChange={handleChangeInput}
                />
              ) : (
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  required
                  value={employeeFormInputFields.firstName}
                  onChange={handleChangeInput}
                />
              )}
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en"
              >
                <DatePicker
                  id="dateOfBirth"
                  label="Birthdate *"
                  value={dateOfBirthValue}
                  onChange={(newValueDateOfBirth) =>
                    setDateOfBirthValue(
                      dayjs(newValueDateOfBirth).format('MM/DD/YYYY'),
                    )
                  }
                  onError={(newErrorDateOfBirth) =>
                    setErrorDateOfBirth(newErrorDateOfBirth)
                  }
                  // <<<<<<<<<<<< If action bar on date picker needed >>>>>>>>>>>
                  // slots={{
                  //   actionBar: CustomActionBar,
                  // }}
                  slotProps={{
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                    textField: {
                      helperText: errorMessageDateOfBirth,
                    },
                  }}
                  minDate={dayjs().subtract(64, 'year')}
                  maxDate={dayjs().subtract(18, 'year')}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={8}>
              {errors.lastName ? (
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name error"
                  variant="outlined"
                  fullWidth
                  required
                  error
                  helperText={`${errors.lastName}`}
                  value={employeeFormInputFields.lastName}
                  onChange={handleChangeInput}
                />
              ) : (
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={employeeFormInputFields.lastName}
                  onChange={handleChangeInput}
                />
              )}
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en"
              >
                <DatePicker
                  id="startDate"
                  label="Start day *"
                  value={startDateValue}
                  onChange={(newValueStartDay) =>
                    setStartDateValue(
                      dayjs(newValueStartDay).format('MM/DD/YYYY'),
                    )
                  }
                  onError={(newErrorStartDate) =>
                    setErrorStartDate(newErrorStartDate)
                  }
                  // <<<<<<<<<<<< If action bar on date picker needed >>>>>>>>>>>
                  // slots={{
                  //   actionBar: CustomActionBar,
                  // }}
                  slotProps={{
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                    textField: {
                      helperText: errorMessageStartDate,
                    },
                  }}
                  minDate={dayjs().subtract(64, 'year')}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12}>
              {errors.department ? (
                <FormControl error fullWidth>
                  <InputLabel id="department-label">Department *</InputLabel>
                  <Select
                    labelId="department"
                    id="department"
                    name="department"
                    value={employeeFormInputFields.department}
                    onChange={handleChangeInput}
                    input={<OutlinedInput label="department" />}
                  >
                    {departmentsNames.map((department) => (
                      <MenuItem key={department} value={department}>
                        {department}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{`${errors.department}`}</FormHelperText>
                </FormControl>
              ) : (
                <FormControl fullWidth>
                  <InputLabel id="department-label">Department * </InputLabel>
                  <Select
                    labelId="department"
                    id="department"
                    name="department"
                    value={employeeFormInputFields.department}
                    onChange={handleChangeInput}
                    input={<OutlinedInput label="department" />}
                  >
                    {departmentsNames.map((department) => (
                      <MenuItem key={department} value={department}>
                        {department}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Grid>
            <Grid xs={12}>
              <h2 className="createEmployee__form--caption">
                Address informations <span>(required field *)</span>
              </h2>
            </Grid>
            <Grid xs={12}>
              {errors.street ? (
                <TextField
                  id="street"
                  name="street"
                  label="Street"
                  variant="outlined"
                  required
                  fullWidth
                  error
                  helperText={`${errors.street}`}
                  value={employeeFormInputFields.street}
                  onChange={handleChangeInput}
                />
              ) : (
                <TextField
                  id="street"
                  name="street"
                  label="Street"
                  variant="outlined"
                  required
                  fullWidth
                  value={employeeFormInputFields.street}
                  onChange={handleChangeInput}
                />
              )}
            </Grid>
            <Grid xs={6}>
              {errors.city ? (
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  required
                  fullWidth
                  error
                  helperText={`${errors.city}`}
                  value={employeeFormInputFields.city}
                  onChange={handleChangeInput}
                />
              ) : (
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  required
                  fullWidth
                  value={employeeFormInputFields.city}
                  onChange={handleChangeInput}
                />
              )}
            </Grid>
            <Grid xs={6}>
              {errors.zipCode ? (
                <TextField
                  id="zipCode"
                  name="zipCode"
                  label="Zip Code"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  error
                  helperText={`${errors.zipCode}`}
                  value={employeeFormInputFields.zipCode}
                  onChange={handleChangeInput}
                />
              ) : (
                <TextField
                  id="zipCode"
                  name="zipCode"
                  label="Zip Code"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  value={employeeFormInputFields.zipCode}
                  onChange={handleChangeInput}
                />
              )}
            </Grid>
            <Grid xs={12}>
              {errors.state ? (
                <FormControl error fullWidth>
                  <InputLabel id="state-label">State *</InputLabel>
                  <Select
                    labelId="state"
                    id="state"
                    name="state"
                    value={employeeFormInputFields.state}
                    onChange={handleChangeInput}
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
                  <FormHelperText>{`${errors.state}`}</FormHelperText>
                </FormControl>
              ) : (
                <FormControl fullWidth>
                  <InputLabel id="state-label">State *</InputLabel>
                  <Select
                    labelId="state"
                    id="state"
                    name="state"
                    value={employeeFormInputFields.state}
                    onChange={handleChangeInput}
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
              )}
            </Grid>
            <Grid xs={12}>
              <Stack direction="row" spacing={2}>
                <Grid xs={6}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    type="reset"
                    fullWidth
                    onClick={() => {
                      handleResetClick()
                    }}
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
                      handleSubmitClick(e)
                    }}
                  >
                    Create
                  </Button>
                </Grid>
              </Stack>
            </Grid>

            <Grid xs={12} className="createEmployee__popBtn">
              <Button
                color="secondary"
                onClick={() => {
                  handlePopulateClick()
                }}
              >
                Populate
              </Button>
            </Grid>
          </Grid>
        </Box>
        {isModalOpen && (
          <InfoModal
            setIsModalOpen={setIsModalOpen}
            title={`${employeeFormInputFields.firstName} ${employeeFormInputFields.lastName}`}
            information={`has been successfully registered !`}
            modalBg={
              'radial-gradient(circle, rgba(255, 246, 235, 1) 0%, rgba(255, 228, 196, 1) 70%)'
            }
            TitleTextAlign={'center'}
            TitleTextColor={'#00bc77'}
            InformationTextAlign={'center'}
            InformationTextColor={'#257b5a'}
            ValidationBtnBgColor={'transparent'}
            ValidationBtnColor={'#257b5a'}
          />
        )}
      </main>
    </>
  )
}
