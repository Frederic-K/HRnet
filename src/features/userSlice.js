import { createSlice } from '@reduxjs/toolkit'
import { useUser } from '../services/API/useUser'

const initialState = {
  id: localStorage.getItem('userId') ?? null,
  firstName: '',
  lastName: '',
  isFetching: false,
  isUpdated: false,
  isError: false,
  errorMessage: '',
  successMessage: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // State management from actions
    clearUserState: (state) => {
      localStorage.removeItem('id')
      return {
        ...state,
        id: '',
        firstName: '',
        lastName: '',
        isFetching: false,
        isUpdated: false,
        isError: false,
        errorMessage: '',
        successMessage: '',
      }
    },
    logout: (state) => {
      localStorage.clear()
      return {
        ...state,
        id: '',
        firstName: '',
        lastName: '',
        isFetching: false,
        isUpdated: false,
        isError: false,
        errorMessage: '',
        successMessage: '',
      }
    },
  },
  extraReducers: (builder) => {
    // State management from api feedback
    builder
      .addCase(useUser.fulfilled, (state, { payload }) => {
        // console.log('payload', payload)
        return {
          ...state,
          id: payload.userData.id,
          firstName: payload.userData.firstName,
          lastName: payload.userData.lastName,
          isFetching: false,
          successMessage: 'Login success',
        }
      })
      .addCase(useUser.rejected, (state, { payload }) => {
        return {
          ...state,
          isFetching: false,
          isError: true,
          errorMessage: 'Request rejected',
        }
      })
      .addCase(useUser.pending, (state) => {
        return {
          ...state,
          isFetching: true,
        }
      })
  },
})
// Actions to manage state
export const { clearUserState, logout } = userSlice.actions
// Grab states
export const userSelector = (state) => state.user

export default userSlice.reducer
