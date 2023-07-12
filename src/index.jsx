import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './styles/style.scss'
import { Toaster } from 'react-hot-toast'
import App from './App'
import store from './utils/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>,
)
