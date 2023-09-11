// Mui conponenets
import { TextField } from '@mui/material'

export default function InputTextField(props) {
  const {
    isError,
    id,
    label,
    name,
    helperText,
    inputRef,
    onChange,
    value,
    errorUserId,
    errorName,
    errorLabel,
    errorHelperText,
  } = props

  return (
    <div>
      {isError ? (
        <TextField
          error
          fullWidth
          // required
          id={errorUserId}
          name={errorName}
          label={errorLabel}
          helperText={errorHelperText}
          inputRef={inputRef}
          onChange={onChange}
          value={value}
        />
      ) : (
        <TextField
          fullWidth
          // required
          id={id}
          label={label}
          name={name}
          variant="outlined"
          helperText={helperText}
          inputRef={inputRef}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  )
}
