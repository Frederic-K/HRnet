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
    // deleteEmployee: (state, action) => {
    //   state.employees.
    // }
  },
})

export const { addEmployee } = employeesSlice.actions

export const employeeSelector = (state) => state.employees

export default employeesSlice.reducer
