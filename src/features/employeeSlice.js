import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

// let arrayEmployees = JSON.parse(localStorage.getItem('employees')) || []
// localStorage.setItem('employees', JSON.stringify(arrayEmployees))
// arrayEmployees = JSON.parse(localStorage.getItem('employees'))

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log('action.payload add-1', action.payload)
      // state.employees.push(action.payload)
      state.employees = [...state.employees, action.payload]
      localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    deleteEmployee: (state, action) => {
      console.log('action.payload', action.payload)
      let selected = action.payload
      //console.log('slice selected line', action.payload)
      state.employees = state.employees.filter(
        (el) => !selected.includes(el.employeeID),
      )
      localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    clearEmployeeState: () => {
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
