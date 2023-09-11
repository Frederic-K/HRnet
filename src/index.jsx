import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './styles/style.scss'
import App from './App'
import store from './utils/store'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@mui/material/styles'
import { globalTheme } from '../src/styles/themes/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={globalTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
