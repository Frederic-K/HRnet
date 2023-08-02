import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) ?? [],
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees = [...state.employees, action.payload]
      localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    deleteEmployee: (state, action) => {
      let selected = action.payload
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
