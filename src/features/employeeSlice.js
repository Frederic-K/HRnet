import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    },
    deleteEmployee: (state, action) => {
      console.log('action.payload', action.payload)
      // state.employees.filter((el) => el.employeeID !== action.payload)
      state.employees.filter((el) => !action.payload.includes(el.employeeID))
      // console.log('employees-state', state.employees)
    },
    clearEmployeeState: () => {
      // localStorage.clear()
      return {
        employees: [],
      }
    },
  },
})

export const { addEmployee, deleteEmployee, clearEmployeeState } =
  employeesSlice.actions

export const employeeSelector = (state) => state.employees

export default employeesSlice.reducer
