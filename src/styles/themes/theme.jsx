import { createTheme } from '@mui/material/styles'
import { teal } from '@mui/material/colors'

export const globalTheme = createTheme({
  typography: {
    fontFamily: ['Archivo'].join(','),
    fontSize: 17,
  },
  palette: {
    primary: teal,
    secondary: {
      main: '#f5f5f5',
    },
  },
})
