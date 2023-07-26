import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

let arrayEmployees = JSON.parse(localStorage.getItem('employees')) || []
localStorage.setItem('employees', JSON.stringify(arrayEmployees))
arrayEmployees = JSON.parse(localStorage.getItem('employees'))

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
      localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    deleteEmployee: (state, action) => {
      console.log('action.payload', action.payload)
      // state.employees.filter((el) => el.employeeID !== action.payload)
      state.employees.filter((el) => !action.payload.includes(el.employeeID))
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

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   employees: [],
// }

// export const employeesSlice = createSlice({
//   name: 'employees',
//   initialState,
//   reducers: {
//     addEmployee: (state, action) => {
//       state.employees.push(action.payload)
//     },
//     deleteEmployee: (state, action) => {
//       console.log('action.payload', action.payload)
//       // state.employees.filter((el) => el.employeeID !== action.payload)
//       state.employees.filter((el) => !action.payload.includes(el.employeeID))
//       // console.log('employees-state', state.employees)
//     },
//     clearEmployeeState: () => {
//       // localStorage.removeItem('employees')
//       return {
//         employees: [],
//       }
//     },
//   },
// })

// export const { addEmployee, deleteEmployee, clearEmployeeState } =
//   employeesSlice.actions

// export const employeeSelector = (state) => state.employees

// export default employeesSlice.reducer
