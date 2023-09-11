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
    errorUserId,
    errorName,
    errorLabel,
    errorHelperText,
  } = props

  return (
    <div>
      {!isError ? (
        <TextField
          fullWidth
          id={id}
          label={label}
          name={name}
          variant="outlined"
          helperText={helperText}
          inputRef={inputRef}
          onChange={onChange}
        />
      ) : (
        <TextField
          error
          fullWidth
          id={errorUserId}
          name={errorName}
          label={errorLabel}
          helperText={errorHelperText}
          inputRef={inputRef}
          onChange={onChange}
        />
      )}
    </div>
  )
}
