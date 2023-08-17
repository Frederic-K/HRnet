// React
import { useState, useRef, useEffect } from 'react'
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
import toast from 'react-hot-toast'
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
// import dayjs from 'dayjs'

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
import { departmentsDatas } from '../../services/Datas/departementsDatas'
import { statesDatas } from '../../services/Datas/statesDatas'
// Formatting data
import { modelingDate } from '../../services/Model/DataModeling'
// uuid
import { v4 as uuidv4 } from 'uuid'
// Modal
// import InfoModalComponent from '../../components/InfoModalComponent/InfoModalComponent'

export default function CreateEmployee() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useSelector(userSelector)
  let creationFormInputs = ''
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
  // const [departement, setDepartement] = useState('')
  // const handleChangeDepartement = (event) => {
  //   setDepartement(event.target.value)
  // }

  const stateNames = statesDatas
  // const [locationState, setLocationState] = useState('')
  // const handleChangeLocationState = (event) => {
  //   setLocationState(event.target.value)
  // }

  // const [dateOfBirthState, setDateOfBirthState] = useState(null)
  // const handleDateOfBirthState = (e) => {
  //   setDateOfBirthState(e)
  // }

  // const [startOfDateState, setStartOfDateState] = useState(null)
  // const handlestartOfDateState = (e) => {
  //   setStartOfDateState(e)
  // }

  // const uniqueID = uuidv4()
  // // const shortUniqueID = uniqueID.slice(0, 13)
  // const firstNameInput = useRef()
  // const dateOfBirthInput = useRef()
  // const lastNameInput = useRef()
  // const startDateInput = useRef()
  // const streetInput = useRef()
  // const cityInput = useRef()
  // const zipCodeInput = useRef()

  const handlePopulateClick = () => {
    const mockedEmployees = mockedEmployeesDatas
    mockedEmployees.forEach((fakeEmployee) =>
      dispatch(addEmployee(fakeEmployee)),
    )
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (
  //     uniqueID !== '' &&
  //     firstNameInput.current.value !== '' &&
  //     lastNameInput.current.value !== '' &&
  //     dateOfBirthInput.current.value !== '' &&
  //     startDateInput.current.value !== '' &&
  //     departement !== '' &&
  //     streetInput.current.value !== '' &&
  //     cityInput.current.value !== '' &&
  //     zipCodeInput.current.value !== '' &&
  //     locationState !== ''
  //   ) {
  //     creationFormInputs = {
  //       employeeID: uniqueID,
  //       firstName: firstNameInput.current.value,
  //       lastName: lastNameInput.current.value,
  //       dateOfBirth: dateOfBirthInput.current.value,
  //       startDate: startDateInput.current.value,
  //       department: departement,
  //       street: streetInput.current.value,
  //       city: cityInput.current.value,
  //       zipCode: zipCodeInput.current.value,
  //       state: locationState,
  //     }
  //     console.log('creationFormInputs', creationFormInputs)
  //     dispatch(addEmployee(creationFormInputs))
  //     setIsModalOpen(true)
  //   } else {
  //     toast.error('Empty fields are not allowed')
  //   }
  // }

  // const handleResetClick = () => {
  //   setDepartement('')
  //   setLocationState('')
  //   setDateOfBirthState(null)
  //   setStartOfDateState(null)
  // }
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

  const [employeeFormInputFields, setemployeeFormInputFields] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    zipCode: '',
    department: '',
    state: '',
    dateOfBirth: null,
    startDate: null,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validateValues = (inputValues) => {
    let errors = {}
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
    if (inputValues.dateOfBirth === null) {
      errors.dateOfBirth = 'Date is required'
    }
    if (inputValues.startDate === null) {
      errors.startDate = 'Date is required'
    }
    return errors
  }
  const handleChangeInput = (e) => {
    setemployeeFormInputFields({
      ...employeeFormInputFields,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    setErrors(validateValues(employeeFormInputFields))
    setSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      validFormSubmit()
      // setIsModalOpen(true)
    }
    // eslint-disable-next-line
  }, [errors])

  const validFormSubmit = () => {
    console.log(employeeFormInputFields)
    dispatch(addEmployee(employeeFormInputFields))
    setIsModalOpen(true)
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
        {/* {Object.keys(errors).length === 0 && submitting ? (
          <span className="success">Successfully submitted ✓</span>
        ) : null} */}
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
                  // inputRef={firstNameInput}
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
                  // inputRef={firstNameInput}
                />
              )}
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en"
              >
                {errors.dateOfBirth ? (
                  <DatePicker
                    // id="dateOfBirth"
                    label="Birthdate *"
                    // name="dateOfBirth"
                    // inputRef={dateOfBirthInput}
                    value=""
                    onChange={(newValue) =>
                      setemployeeFormInputFields({
                        ...employeeFormInputFields,
                        dateOfBirth: modelingDate(newValue),
                      })
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
                        helperText: `${errors.dateOfBirth}`,
                      },
                    }}
                  />
                ) : (
                  <DatePicker
                    // id="dateOfBirth"
                    label="Birthdate *"
                    // name="dateOfBirth"
                    // inputRef={dateOfBirthInput}
                    value={employeeFormInputFields.dateOfBirth}
                    onChange={(newValue) =>
                      setemployeeFormInputFields({
                        ...employeeFormInputFields,
                        dateOfBirth: modelingDate(newValue),
                      })
                    }
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
                )}
                {/* <DatePicker
                  id="dateOfBirth"
                  label="Birthdate *"
                  // name="dateOfBirth"
                  // inputRef={dateOfBirthInput}
                  value={employeeFormInputFields.dateOfBirth}
                  onChange={(newValue) =>
                    setemployeeFormInputFields({
                      ...employeeFormInputFields,
                      dateOfBirth: newValue,
                    })
                  }
                  // <<<<<<<<<<<< If action bar on date picker needed >>>>>>>>>>>
                  // slots={{
                  //   actionBar: CustomActionBar,
                  // }}
                  slotProps={{
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                  }}
                /> */}
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
                  // inputRef={lastNameInput}
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
                  // inputRef={lastNameInput}
                />
              )}
            </Grid>
            <Grid xs={4} className="createEmployee__form--datePicker">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en"
              >
                {errors.startDate ? (
                  <DatePicker
                    label="Start day *"
                    // inputRef={startDateInput}
                    value=""
                    onChange={(newValue) =>
                      setemployeeFormInputFields({
                        ...employeeFormInputFields,
                        startDate: modelingDate(newValue),
                      })
                    }
                    slotProps={{
                      actionBar: {
                        actions: ['today', 'clear'],
                      },
                      textField: {
                        helperText: `${errors.startDate}`,
                      },
                    }}
                  />
                ) : (
                  <DatePicker
                    label="Start day *"
                    // inputRef={startDateInput}
                    value={employeeFormInputFields.startDate}
                    onChange={(newValue) =>
                      setemployeeFormInputFields({
                        ...employeeFormInputFields,
                        startDate: modelingDate(newValue),
                      })
                    }
                    slotProps={{
                      actionBar: {
                        actions: ['today', 'clear'],
                      },
                    }}
                  />
                )}
                {/* <DatePicker
                  label="Start day *"
                  // inputRef={startDateInput}
                  value={employeeFormInputFields.startDay}
                  onChange={(newValue) =>
                    setemployeeFormInputFields({
                      ...employeeFormInputFields,
                      startDate: newValue,
                    })
                  }
                  slotProps={{
                    actionBar: {
                      actions: ['today', 'clear'],
                    },
                  }}
                /> */}
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
              {/* <FormControl fullWidth>
                <InputLabel id="departement-label">Departement *</InputLabel>
                <Select
                  labelId="departement"
                  id="departement"
                  name="departement"
                  required
                  // value={departement}
                  // onChange={handleChangeDepartement}
                  input={<OutlinedInput label="departement" />}
                >
                  {departmentsNames.map((departement) => (
                    <MenuItem key={departement} value={departement}>
                      {departement}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}
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
                  // inputRef={streetInput}
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
                  // inputRef={streetInput}
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
                  // inputRef={cityInput}
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
                  // inputRef={cityInput}
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
                  // inputRef={zipCodeInput}
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
                  // inputRef={zipCodeInput}
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
              {/* <FormControl fullWidth>
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
              </FormControl> */}
            </Grid>
            <Grid xs={12}>
              <Stack direction="row" spacing={2}>
                <Grid xs={6}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    type="reset"
                    fullWidth
                    // onClick={() => {
                    //   handleResetClick()
                    // }}
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
                      // setIsModalOpen(true)
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
            // title="banzai"
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
