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
    clearEmployeeState: (state) => {
      // localStorage.clear()
      return {
        employees: [],
      }
    },
  },
})

export const { addEmployee, clearEmployeeState } = employeesSlice.actions

export const employeeSelector = (state) => state.employees

export default employeesSlice.reducer
