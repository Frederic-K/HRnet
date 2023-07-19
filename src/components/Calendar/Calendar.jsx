import { useRef } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/de'
import 'dayjs/locale/en-gb'

export default function Calendar() {
  const dateOfBirthInput = useRef()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <DatePicker
        label="Birthdate"
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
  )
}
