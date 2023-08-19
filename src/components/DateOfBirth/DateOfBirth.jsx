// import * as React from 'react'
import { useState, useMemo } from 'react'
import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// const startOfQ12022 = dayjs('2022-01-01T00:00:00.000')
// const endOfQ12022 = dayjs('2022-03-31T23:59:59.999')
// const today = dayjs()
const minAge = dayjs().subtract(18, 'year')

export default function DateOfBirthPicker() {
  const [error, setError] = useState(null)

  const errorMessage = useMemo(() => {
    switch (error) {
      case 'maxDate': {
        return 'Birthdate is required : min 18yo'
      }

      //   case 'minDate': {
      //     return 'Please select a date in the first quarter of 2022'
      //   }

      case 'invalidDate': {
        return 'Your date is not valid'
      }

      default: {
        return ''
      }
    }
  }, [error])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <Box>
        <DatePicker
          // defaultValue={dayjs()}
          onError={(newError) => setError(newError)}
          slotProps={{
            actionBar: {
              actions: ['clear'],
            },
            textField: {
              helperText: errorMessage,
            },
          }}
          minDate={''}
          // maxDate={endOfQ12022}
          maxDate={minAge}
        />
      </Box>
    </LocalizationProvider>
  )
}
