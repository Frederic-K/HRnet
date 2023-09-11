// DatePicker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/de'
import 'dayjs/locale/en-gb'
import dayjs from 'dayjs'

export default function InputDatePicker(props) {
  const { id, label, value, onChange, onError, helperText, minDate, maxDate } =
    props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <DatePicker
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        onError={onError}
        // <<<<<<<<<<<< If action bar on date picker needed >>>>>>>>>>>
        // slots={{
        //   actionBar: CustomActionBar,
        // }}
        slotProps={{
          actionBar: {
            actions: ['today', 'clear'],
          },
          textField: {
            helperText: helperText,
          },
        }}
        minDate={minDate}
        maxDate={maxDate}
      />
    </LocalizationProvider>
  )
}
