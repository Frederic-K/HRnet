// Redux
import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/employeeSlice'
import userReducer from '../features/userSlice'

export default configureStore({
  reducer: {
    employees: employeesReducer,
    user: userReducer,
  },
})
