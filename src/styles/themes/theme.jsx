import { createTheme } from '@mui/material/styles'
import { green, teal } from '@mui/material/colors'

export const globalTheme = createTheme({
  typography: {
    fontFamily: ['Archivo'].join(','),
    fontSize: 17,
  },
  palette: {
    primary: teal,
    secondary: {
      main: '#f9fbe7',
    },
  },
})
